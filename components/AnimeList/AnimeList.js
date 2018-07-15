import React, {Component} from 'react';
import { Text } from 'react-native';
import {Query} from 'react-apollo'
import AnimeVerticalList from '../AnimeVerticalList/AnimeVerticalList'

const animeVerticalList = ({data, fetchMore}) => <AnimeVerticalList loadMore={() =>
    fetchMore({
        variables: {
            page: data.Page.pageInfo.currentPage + 1
        },
        updateQuery: (prev, {fetchMoreResult}) => {
            if(prev.Page.pageInfo.currentPage === fetchMoreResult.Page.pageInfo.currentPage) return prev;
            return {
                Page: {
                    __typename: prev.Page.__typename,
                    pageInfo: {
                        currentPage: fetchMoreResult.Page.pageInfo.currentPage,
                        hasNextPage: fetchMoreResult.Page.pageInfo.hasNextPage,
                        __typename: prev.Page.pageInfo.__typename
                    },
                    media: [...prev.Page.media,...fetchMoreResult.Page.media]
                }
            };
        }
    })
} animeList={data}/>

export default AnimeList = ({query, orientation}) => {
    return <Query query={query} variables={{page: 1}}>
        {({loading, error, data, fetchMore}) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>{error.message}</Text>
            return orientation === 'vertical' ? animeVerticalList({data, fetchMore}) : null
        }}
    </Query>
}
