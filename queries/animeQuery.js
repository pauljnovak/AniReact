import gql from 'graphql-tag'

export default ANIME_QUERY = gql`
 query ($page: Int) {
  Page (page: $page) {
    pageInfo {
      currentPage
      hasNextPage
    }
    media (type: ANIME){
      id
      title {
        userPreferred
      }
      coverImage {
        large
      }
      description
      episodes
      averageScore
      genres
    }
  }
}
`;
