import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import UseCart from '../context/UseCart';

function ProductDetail() {
    const state = useLocation().state
    console.log(state)
    const {id, image, title, price, option, category, description} = state;
    const setPrice = parseInt(price).toLocaleString();
    const setOpt = option.split(',').map(option => option.trim())

    const [selected, setSelected] = useState(setOpt && setOpt[0])//옵션중 배열이 여러개 들어오면 맨 처음을 선택해놓겠다. 
    const [success, setSuccess] = useState()
    
    const selectOpt = (e)=>setSelected(e.target.value);
    //useLocation() 현재 url의 정보를 가져오는 리액트 훅

    const {addItemCart} = UseCart(); //addItemCart 불러오기
    const cartItem = ()=>{
        const product = {id, image, title, price, option:selected, quantity : 1}
        //quantity = 1 수량 체크
        addItemCart.mutate(product,{
            onSuccess : ()=>{
                setSuccess('장바구니에 상품이 추가되었습니다.')
            }
        })
    }
    return (
        <div className="container">
            <div className="detailPage">
                <div className="detailImg">
                    <img src={image} alt={title}/>
                </div>

                <div className="detailText">
                    <h2>{title}</h2>
                    <p>가격 <span>{setPrice}</span></p>
                    <div className="detailOpt">
                        {/* 리액트에서는 label의 for 대신에 htmlFor로 변경하여 사용 */}
                        <label className='lateText' htmlFor='optSelect'>옵션</label>
                        <select id="optSelect" onChange={selectOpt} value={selected}> {/* option을 선택하면 onChange안에 값이바뀌는  */}
                            {setOpt && setOpt.map((option, index)=>(
                                <option key={index}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div className="text">
                        <p>
                            {description}
                        </p>
                    </div>

                    <div className="detailBtn">
                        <button className='cartBtn' onClick={cartItem}>장바구니 담기</button>
                        <button className="buyBtn">구매하기</button>
                    </div>
                </div>
                {success && <p>{success}</p>}
                
            </div>
        </div>
    );
}

export default ProductDetail;