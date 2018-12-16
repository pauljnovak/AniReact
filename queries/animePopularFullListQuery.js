import gql from 'graphql-tag'

export default animeTopScoreFullListQuery = gql`
 query ($page: Int) {
  Page (page: $page) {
    pageInfo {
      currentPage
      hasNextPage
    }
    media ( type: ANIME, sort: POPULARITY_DESC, isAdult: false){
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