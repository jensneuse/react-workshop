import * as React from 'react'
import {Component} from 'react'
import gql from 'graphql-tag';
import {getAllArticlesQuery} from '../../../graphql-types'
import { graphql } from 'react-apollo';

const query = gql`
    query getAllArticles {
        allArticles {
          totalCount
          nodes {
            nodeId
            id
            title
            description
            content
            authorId
            authorByAuthorId {
              id
            }
          }
        }
      }
`
interface Props {
    data: getAllArticlesQuery
}

class AllArticles extends Component<Props> {
    render() {

        return (
            <div>
                {JSON.stringify(this.props)}
            </div>
        );
    }
}

export default graphql<getAllArticlesQuery,{},Props>(query)(AllArticles);