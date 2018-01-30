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
                bornIn
                articlesByAuthorId {
                    totalCount
                }
            }
        }
    }
`;

interface Props {
    data: getAllAuthorsQuery
}

class AllAuthors extends React.Component<Props> {
    render() {

        return (
            <div>
                <p>{JSON.stringify(this.props)}</p>
            </div>
        )
    }
}

export default graphql<getAllAuthorsQuery,{},Props>(query)(AllAuthors);