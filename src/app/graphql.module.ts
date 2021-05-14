import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { RetryLink } from '@apollo/client/link/retry';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { NgModule } from '@angular/core';

let uri = '/api/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
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

  return {
    link: ApolloLink.from([new RetryLink(), auth, httpLink.create({ uri })]),
    cache: new InMemoryCache()
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
