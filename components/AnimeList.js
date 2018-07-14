import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import Anime from './Anime';
import {Query} from 'react-apollo'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
});
const AnimeListComponent = ({animeList, loadMore}) => {

    return <FlatList
        style={styles.container}
        data={animeList.Page.media}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        renderItem={({item}) => <Anime coverImage={item.coverImage.large} title={item.title.userPreferred} description={item.description}/>}
    />
};


export default AnimeList = ({query}) => {
    return <Query query={query} variables={{page: 1}}>
        {({loading, error, data, fetchMore}) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>{error.message}</Text>
            return <AnimeListComponent loadMore={() =>

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
        }}
    </Query>
}
