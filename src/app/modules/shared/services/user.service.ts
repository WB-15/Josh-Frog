import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Platform } from '@ionic/angular';

import { UserEntity, UserSelfGQL } from '../../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: UserEntity;
  private userSubject$ = new BehaviorSubject<UserEntity>(this.user);
  public userChanged$ = this.userSubject$.asObservable();

  private BASE_URL = '';

  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly EXPIRATION_KEY = 'expiration_timestamp';
  private readonly USER_DETAILS_KEY = 'user_details';

  constructor(
    private httpClient: HttpClient,
    private apollo: Apollo,
    private userSelfGQL: UserSelfGQL,
    private platform: Platform
  ) {
    console.log(platform.platforms());
    if (platform.is('capacitor') || platform.is('electron')) {
      this.BASE_URL = 'https://new.joshsfrogs.com';
    }

    const expirationTimestamp = Number(
      localStorage.getItem(this.EXPIRATION_KEY)
    );

    const accessToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    const userDetails = localStorage.getItem(this.USER_DETAILS_KEY);

    if (expirationTimestamp && accessToken) {
      // if the user details haven't expired AND the timestamp isn't too far in the future to be valid
      if (
        Date.now() < expirationTimestamp &&
        Date.now() > expirationTimestamp - 24 * 60 * 60 * 1000
      ) {
        if (userDetails) {
          this.user = JSON.parse(userDetails) as UserEntity;
          this.userSubject$.next(this.user);
        } else {
          this.userInfo();
        }
      }
    }
  }

  public login(username: string, password: string): Observable<LoginResponse> {
    this.apollo.getClient().resetStore();
    const data = this.httpClient
      .post<LoginResponse>(this.BASE_URL + '/login', { username, password })
      .pipe(shareReplay(1));
    data.subscribe(
      (response) => {
        if (response.roles.includes('ROLE_ADMIN')) {
          // Javascript date format is in milliseconds since epoch UTC, expires_in is in seconds
          const expirationTimestamp = Date.now() + response.expires_in * 1000;
          localStorage.setItem(this.ACCESS_TOKEN_KEY, response.access_token);
          localStorage.setItem(
            this.EXPIRATION_KEY,
            String(expirationTimestamp)
          );
          this.userInfo();
        } else {
          console.error('Not an admin user.');
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return data;
  }

  public isAuthenticated(): boolean {
    const expirationTimestamp = Number(
      localStorage.getItem(this.EXPIRATION_KEY)
    );
    const accessToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);

    // if the user details haven't expired AND the timestamp isn't too far in the future to be valid
    return (
      expirationTimestamp &&
      accessToken &&
      Date.now() < expirationTimestamp &&
      Date.now() > expirationTimestamp - 24 * 60 * 60 * 1000
    );
  }

  public isAdmin(): boolean {
    if (!this.user) {
      const userDetails = localStorage.getItem(this.USER_DETAILS_KEY);
      if (userDetails) {
        this.user = JSON.parse(userDetails) as UserEntity;
      }
    }
    // if the user details haven't expired AND the timestamp isn't too far in the future to be valid
    return this.user.admin;
  }

  private userInfo(): void {
    this.userSelfGQL
      .fetch()
      .pipe(map((result) => result.data.userSelf))
      .subscribe(
        (result) => {
          this.user = result as UserEntity;
          localStorage.setItem(
            this.USER_DETAILS_KEY,
            JSON.stringify(this.user)
          );
          this.userSubject$.next(this.user);
        },
        (error) => {
          console.error(error);
          this.user = undefined;
          this.userSubject$.next(this.user);
        }
      );
  }

  public logout(): void {
    this.apollo.getClient().resetStore();
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.EXPIRATION_KEY);
    localStorage.removeItem(this.USER_DETAILS_KEY);
    this.user = undefined;
    this.userSubject$.next(this.user);
  }
}

// tslint:disable:variable-name
export class LoginResponse {
  username: string;
  roles: [string];
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}
