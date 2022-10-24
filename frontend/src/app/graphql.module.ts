import { NgModule } from '@angular/core'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core'
import { HttpLink } from 'apollo-angular/http'
import { extractFiles } from 'extract-files'
import { environment } from 'src/environments/environment'

const uri = environment.baseUrl + '/graphql'
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri, extractFiles }),
    cache: new InMemoryCache(),
  }
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
