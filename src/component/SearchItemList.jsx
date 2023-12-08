import React from 'react';
import DetailPageEvent from './DetailPageEvent';

function SearchItemList({products :  {id, title, image, price,option}}) {
    return (
        <li>
            <DetailPageEvent product={{id, image, title, price, option}}/>
        </li>
    );
}

export default SearchItemList;