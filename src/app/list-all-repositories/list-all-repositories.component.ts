import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Repository, Query } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-all-repositories',
  templateUrl: './list-all-repositories.component.html',
  styleUrls: ['./list-all-repositories.component.scss']
})
export class ListAllRepositoriesComponent implements OnInit {
  allPublicRepositories: Observable<Repository[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.allPublicRepositories = this.apollo.watchQuery<Query>({
      query: gql`
        query allRepositories($queryString: String!){
          search(query:$queryString, type:REPOSITORY, first:20){
          
          edges{
            node{
            ... on Repository{
              id
              name
              description 
              isPrivate
              url
              owner{
              login
              id
              url
              }
              assignableUsers{
              totalCount
              }
        
            }
            }
          }
          }
        }
      `,
      variables: {
        queryString: "is:public",
      }
    })
    .valueChanges
    .pipe(
      map(result => result.data.search.edges)
    );
  }

}
