import gql from 'graphql-tag'

export default ANIME_QUERY = gql`
 query ($page: Int) {
  Page (page: $page) {
    pageInfo {
      currentPage
      hasNextPage
    }
    media {
      id
      title {
        userPreferred
      }
      coverImage {
        large
      }
    }
  }
}
`;
