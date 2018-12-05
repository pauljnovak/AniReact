import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Anime from '../AnimeVerticalCard/AnimeVerticalCard';
import styles from './AnimeVerticalList.styles'




const AnimeVerticalList = ({animeList, fetchMore}) => {

    let loadMore = () => fetchMore({
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
        });

    return <FlatList
        style={styles.container}
        data={animeList.Page.media}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        renderItem={({item}) =>
            <Anime
                coverImage={item.coverImage.large}
                title={item.title.userPreferred}
                description={item.description}
                averageScore={item.averageScore}
                episodes={item.episodes}
                genres={item.genres}
            />}
    />
};

const AnimeVerticalList = ({data, fetchMore}) => <AnimeVerticalList 
 animeList={data}/>