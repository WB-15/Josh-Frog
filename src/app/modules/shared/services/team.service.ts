import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamEntity,TeamListGQL} from '../../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private isBrowser: boolean;
  private teams: TeamEntity[] = null;
  private teamSubject$ = new BehaviorSubject<TeamEntity[]>(
    this.teams
  );
  public teamsChanged$ = this.teamSubject$.asObservable();

  constructor(
    private teamListGQL: TeamListGQL,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.teamList();
  }

  private teamList(): void {
    if (this.isBrowser && this.teams == null) {
      this.teamListGQL
        .fetch()
        .pipe(map((result) => result.data.teamList))
        .subscribe(
          (result) => {
            console.log("team List", result.data as TeamEntity[])
            this.teams = result.data as TeamEntity[];
            this.teamSubject$.next(this.teams);
          },
          (error) => {}
        );
    }
  }
}
