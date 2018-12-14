import gql from 'graphql-tag'

export default animePopularListQuery = gql`
{
    Page(page: 1) {
      media( type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
        id
        coverImage {
          medium
        }
      }
    }
}
`;
