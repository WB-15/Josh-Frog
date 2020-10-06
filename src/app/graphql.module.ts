import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { RetryLink } from 'apollo-link-retry';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

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
  if (window.location.host === 'app.joshsfrogstest.com') {
    uri = 'http://joshsfrogstest.com' + uri;
  }

  return {
    link: ApolloLink.from([new RetryLink(), auth, httpLink.create({ uri })]),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
