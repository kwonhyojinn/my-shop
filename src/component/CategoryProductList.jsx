import React from 'react';
import DetailPageEvent from './DetailPageEvent';
import styled from 'styled-components';

function CategoryProductList({category, product}) {
    return (
        <div className='container'>
            <CategoryTitle>{category}</CategoryTitle>
            <ul className="productList">
                {product.map((product)=>(
                    <li key={product.id}>
                        <DetailPageEvent product={product}/> 
                    </li>
                ))}
            </ul>
        </div>
    );
}


const CategoryTitle = styled.h2`
    font-size: 20px;
    padding: 24px 0 100px;
    font-weight: normal;
`

export default CategoryProductList;
