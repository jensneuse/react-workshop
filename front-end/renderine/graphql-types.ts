/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface getAllArticlesQuery {
  // Reads and enables pagination through a set of `Article`.
  allArticles:  {
    __typename: "ArticlesConnection",
    // The count of *all* `Article` you could get from the connection.
    totalCount: number | null,
    // A list of `Article` objects.
    nodes:  Array< {
      __typename: "Article",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      nodeId: string,
      id: string,
      title: string | null,
      description: string | null,
      content: string | null,
      authorId: string,
      // Reads a single `Author` that is related to this `Article`.
      authorByAuthorId:  {
        __typename: "Author",
        id: string,
      } | null,
    } | null >,
  } | null,
};

export interface getAllAuthorsQuery {
  // Reads and enables pagination through a set of `Author`.
  allAuthors:  {
    __typename: "AuthorsConnection",
    // The count of *all* `Author` you could get from the connection.
    totalCount: number | null,
    // A list of `Author` objects.
    nodes:  Array< {
      __typename: "Author",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      nodeId: string,
      id: string,
      name: string,
      bornIn: string | null,
      // Reads and enables pagination through a set of `Article`.
      articlesByAuthorId:  {
        __typename: "ArticlesConnection",
        // The count of *all* `Article` you could get from the connection.
        totalCount: number | null,
      },
    } | null >,
  } | null,
};
