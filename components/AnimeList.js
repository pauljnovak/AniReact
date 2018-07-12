import React, {Component} from 'react';
import { Text, ScrollView } from 'react-native';
import Anime from './Anime';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const ANIME_QUERY = gql`
 query (
  $page: Int,
  $type: MediaType,
  $format: MediaFormat,
  $startDate: String,
  $endDate: String,
  $season: MediaSeason,
  $genres: [String],
  $genresExclude: [String],
  $isAdult: Boolean = false, # Assign default value if isAdult is not included in our query variables 
  $sort: [MediaSort],
) {
  Page (page: $page) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media (
      startDate_like: $startDate, # "2017%" will get all media starting in 2017, alternatively you could use the lesser & greater suffixes
      endDate_like: $endDate,
      season: $season,
      type: $type,
      format: $format,
      genre_in: $genres,
      genre_not_in: $genresExclude,
      isAdult: $isAdult,
      sort: $sort,
    ) {
      id
      title {
        userPreferred
      }
      type
      format
      episodes
      chapters
      volumes
      genres
      averageScore
      popularity
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}
`;

class AnimeListComponent extends Component {

    render() {
        if (this.props.animeList && this.props.animeList.loading) {
            return <Text>Loading</Text>
        }


        if (this.props.animeList && this.props.animeList.error) {
            return <Text>{this.props.animeList.error.toString()}</Text>
        }
        return <ScrollView>{this.props.animeList.Page.media.map(anime => <Anime key={anime.id} title={anime.title.userPreferred}/>)}</ScrollView>
    }
};

export default graphql(ANIME_QUERY, {
    name: 'animeList', options: {
        variables: {
            page: undefined, type: undefined,
            format: undefined,
            startDate: undefined,
            endDate: undefined,
            season: undefined,
            genres: undefined,
            genresExclude: undefined,
            isAdult: false,
            sort: undefined
        }
    }
})(AnimeListComponent)
