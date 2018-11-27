import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { ListAllRepositoriesComponent } from './list-all-repositories/list-all-repositories.component';

const authLink = setContext((_, { headers }) => {
  const token = "649ef80689059b1ec13e47959841f2874170ad29";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

@NgModule({
  declarations: [
    AppComponent,
    ListAllRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { 
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: authLink.concat(httpLink.create({ uri: 'https://api.github.com/graphql'})),
      cache: new InMemoryCache()
    })
  }
}
