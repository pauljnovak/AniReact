import gql from 'graphql-tag'

export default AnimeTopScoreListQuery = gql`
{
    Page(page: 1) {
      media( type: ANIME, sort: SCORE_DESC, isAdult: false) {
        id
        coverImage {
          medium
        }
      }
    }
}
`;
