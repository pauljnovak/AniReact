import gql from 'graphql-tag'

export default AnimeTrendingListQuery = gql`
{
    Page(page: 1) {
      media( type: ANIME, sort: TRENDING_DESC, isAdult: false) {
        id
        coverImage {
          medium
        }
      }
    }
}
`;
