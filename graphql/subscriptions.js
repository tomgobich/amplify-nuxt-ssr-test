/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      name
      biography
      website
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      name
      biography
      website
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      name
      biography
      website
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      summary
      body
      createdAt
      authorId
      updatedAt
      author {
        id
        email
        name
        biography
        website
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      summary
      body
      createdAt
      authorId
      updatedAt
      author {
        id
        email
        name
        biography
        website
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      summary
      body
      createdAt
      authorId
      updatedAt
      author {
        id
        email
        name
        biography
        website
        createdAt
        updatedAt
      }
    }
  }
`;
