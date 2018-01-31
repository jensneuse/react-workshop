import * as React from 'react'
import {Component} from 'react'
import gql from 'graphql-tag';
import {getAllArticlesQuery} from '../../../graphql-types'
import { graphql, QueryProps } from 'react-apollo';

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
                name
            }
        }
        }
    }  
`
interface Props {
    data: QueryProps & getAllArticlesQuery
}

class AllArticles extends Component<Props> {
    render() {

        if (this.props.data.loading){
            return <div>Loading...</div>
        } else if (this.props.data.error){
            return <div>Error: {this.props.data.error.message}</div>
        }

        return (
            <ul>
                {
                    this.props.data.allArticles.nodes.map(article => (
                        <div key={article.nodeId}>
                            <h4>{article.title}</h4>
                            <p>{article.description}</p>
                            <div>Written by: {article.authorByAuthorId.name}</div>
                        </div>
                    ))
                }
            </ul>
        );
    }
}

export default graphql<getAllArticlesQuery,Props,{}>(query)(AllArticles);