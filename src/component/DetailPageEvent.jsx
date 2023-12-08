import React from 'react';
import { useNavigate } from 'react-router-dom';

function DetailPageEvent({product}) {
    
    /*
    단순한 페이지 이동이 목적이라면 Link 를 사용하면 되지만,
    페이지를 이동하면서 데이터의 이동도 포함해야 한다면 Link가 아닌
    useNavigate를 사용해야 한다. 
    */
   const setPrice = parseInt(product.price).toLocaleString();
   const navigate = useNavigate();
   const detail = ()=>{
    navigate(`/products/detail/${product.id}`,{
        state : {
            title : product.title,
            id : product.id,
            image : product.image,
            price : product.price,
            option : product.option,
            category : product.category,
            description :product.description

        }
    })
   }
    return (
        <div onClick={detail} className='productsItem'>
            <img src={product.image} alt={product.title} />
            <div className="textWrap">
                <h3 className='itemTitle'>{product.title}</h3>
                <div className="itemFlex">
                    <p className="itemPrice">{setPrice} 원</p>
                    <p className="itemOpt">{product.option}</p>
                </div>
            </div>
            
        </div>
    );
}

export default DetailPageEvent;