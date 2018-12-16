import React from 'react';

import AnimeVerticalList from '../AnimeVerticalList/AnimeVerticalList';
import AnimeHorizontalList from '../AnimeHorizontalList/AnimeHorizontalList';

const AnimeList = ({query, orientation, title}) => {
    console.log(title);
    return orientation === 'vertical' ? <AnimeVerticalList query={query} title={title}/> : <AnimeHorizontalList query={query}/>;
};
export default AnimeList;
