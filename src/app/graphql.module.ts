import { Injector, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ApolloLink, concat, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { UserService } from './modules/shared/services/user.service';

let uri = '/api/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink, router: Router, injector: Injector) {
  // Get the authentication token from local storage if it exists
  const auth = setContext((operation, context) => {
    if (typeof localStorage !== 'undefined' && localStorage) {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        return {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
      } else {
        return {};
      }
    } else {
      return {};
    }
  });

  // If this is in the app, we need to use the full URL
  // But if this is on a development computer, fall back on
  // the Angular proxy settings
  if (
    window.location.host === 'app.joshsfrogs.com' ||
    window.location.protocol === 'capacitor-electron:'
  ) {
    uri = 'https://new.joshsfrogs.com' + uri;
  }

  const authCheck = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors?.length > 0) {
      for (let error of graphQLErrors) {
        if (error.message.endsWith('Access denied')) {
          const userService = injector.get(UserService);
          userService.logout(true);
        }
      }
    }
  });

  return {
    link: concat(authCheck, ApolloLink.from([
      new RetryLink({
        delay: {
          initial: 300,
          max: Infinity,
          jitter: true
        },
        attempts: {
          max: 5,
          retryIf: (error, operation) => {
            if (!!error) {
              return !(
                error.status &&
                (error.status === 504 ||
                  error.status === 524 ||
                  error.status === 401)
              );
            } else {
              return false;
            }
          }
        }
      }),
      auth,
      httpLink.create({ uri })
    ])),
    cache: new InMemoryCache()
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, Router, Injector]
    }
  ]
})
export class GraphQLModule {}
