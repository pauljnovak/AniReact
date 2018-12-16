import React from 'react';
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import Anime from '../AnimeVerticalCard/AnimeVerticalCard';
import styles from './AnimeVerticalList.styles';
import { LinearGradient } from 'expo'
import { Transition } from 'react-navigation-fluid-transitions'

class AnimeVerticalList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  render() {
    let { query, title } = this.props;
    console.log(title)
    return <Query query={query}
      variables={{ page: this.state.page }}
    >
      {({ loading, error, data, fetchMore }) => {
        
        const load = (step) => {
          console.log('here isad step'); 
          fetchMore({
            variables: {
              page: this.state.page + step,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              console.log('here isad updateQuery'); 
              if (prev.Page.pageInfo.currentPage === fetchMoreResult.Page.pageInfo.currentPage) {
                return prev;
              }
              const nd = Object.assign({}, prev, {
                data: {
                  Page: {
                    __typename: prev.Page.__typename,
                    pageInfo: {
                      currentPage: fetchMoreResult.Page.pageInfo.currentPage,
                      hasNextPage: fetchMoreResult.Page.pageInfo.hasNextPage,
                      __typename: prev.Page.pageInfo.__typename,
                    },
                    media: [...prev.Page.media, ...fetchMoreResult.Page.media],
                  }

                }
              });
              return nd
            }
          }).then(() => {
            this.setState({ page: this.state.page + step })
          })
        };


        console.log('here isad');    
        const hasNextPage = (() => {   if (data.Page) { return data.Page.pageInfo.hasNextPage; } else return false; })();
        const hasPreviousPage = (() => { if (data.Page) { return data.Page.pageInfo.currentPage > 1 } else return false; })();
        const loadMore = () => { if(hasNextPage) load(1) };
        const loadPrevious = () => { if(hasPreviousPage) load(-1) };
        console.log('here isad hasNextPage ' + hasNextPage);

        return  <View >
                 <LinearGradient colors={["#1F1F1F", "#000000"]} style={styles.buttonscontainer}>
                  <Transition shared={`title-${title}`}>
                    <Text style={styles.titleText}>{title}</Text>
                  </Transition>
                  <TouchableOpacity onPress={loadMore} style={hasNextPage ? styles.button : styles.buttonInactive}>
                    <Text adjustsFontSizeToFit={true}
                      numberOfLines={1} style={hasNextPage ? styles.buttonText : styles.buttonTextInactive}>
                      NEXT PAGE
                  </Text>
                  </TouchableOpacity >
                  <TouchableOpacity onPress={loadPrevious} style={hasPreviousPage ? styles.button : styles.buttonInactive}>
                    <Text adjustsFontSizeToFit={true}
                      numberOfLines={1} style={hasPreviousPage ? styles.buttonText : styles.buttonTextInactive}>
                      PREVIOUS PAGE
                    
                    </Text>
                  </TouchableOpacity >
                </LinearGradient>
                
                <FlatListPresentation loading={loading} error={error} data={data} state={this.state} />
                
              </View>
      }
    
    }
    </Query>
    
  }

};

const FlatListPresentation = 
  ({loading, error, data, state}) => {
    {console.log('here ' + loading)}
    if (!!loading) {
      return <View style={styles.activityIndicator}><ActivityIndicator size="large" color="white" /></View>
    }
    if (error) {
      return <Text>{error.message}</Text>
    }
    if(!data.Page) return null;

    return <View style={styles.activityIndicator}>
      <FlatList
        style={styles.container}
        data={data.Page.media}
        extraData={state}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) =>
          <Anime
            coverImage={item.coverImage.large}
            title={item.title.userPreferred}
            description={item.description}
            averageScore={item.averageScore}
            episodes={item.episodes}
            genres={item.genres}
          />}
      />
    </View>
}
 
export default AnimeVerticalList;