import gql from 'graphql-tag';

export default animePopularThisSeasonListQuery = gql`
{
    Page(page: 1) {
      media(startDate_like: "2018%", season: WINTER, type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
        id
        coverImage {
          medium
        }
      }
    }
  }
`;