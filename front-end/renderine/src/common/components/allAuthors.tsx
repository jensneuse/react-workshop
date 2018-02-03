import * as React from 'react'
import gql from 'graphql-tag';
import {graphql,QueryProps} from 'react-apollo'
import {getAllAuthorsQuery} from '../../../graphql-types';

const query = gql`
    query getAllAuthors {
        allAuthors {
            totalCount
            nodes {
                nodeId
                id
                name
                articlesByAuthorId {
                    totalCount
                }
            }
        }
    }
`;

interface Props {
    data: QueryProps & getAllAuthorsQuery
}

class AllAuthors extends React.Component<Props> {
    render() {

        if (this.props.data.loading){
            return <div>Loading...</div>
        } else if (this.props.data.error){
            return <div>Error: {this.props.data.error.message}</div>
        }

        return (
            <div>
                <h2>Authors</h2>
                <ul>
                {
                    this.props.data.allAuthors.nodes.map(author => (
                        <li key={author.id}>
                            <div>Name: {author.name}</div>
                            <div>NumberOfArticles: {author.articlesByAuthorId.totalCount}</div>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default graphql<getAllAuthorsQuery,Props,{}>(query)(AllAuthors);