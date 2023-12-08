import React, { useEffect,useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react' //기본 스와이퍼 import
import 'swiper/css'; //기본swiperCss

import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css/effect-fade';
import { getStorageImg, storage } from '../api/firebase';

function SlideItem({imgs}) {
    // const sliderImg = [
    //     'http://res.cloudinary.com/dbfthuy6l/image/upload/v1699500468/qogwffq48woep8pcctro.jpg',
    //     'http://res.cloudinary.com/dbfthuy6l/image/upload/v1699500218/rlo520nqkyb2nhuunsoj.jpg',
    //     'http://res.cloudinary.com/dbfthuy6l/image/upload/v1699500383/qte8cqqooi8fi2s84l3e.jpg',
    //     'http://res.cloudinary.com/dbfthuy6l/image/upload/v1699500805/edt9nfwo1y3if9njgwtt.jpg',
    
    // ]

    
    const [imgUrl, setImgUrl] = useState([]);

    useEffect(()=>{
        const loadImg = async()=>{
            try{
                const urls = await Promise.all(
                    imgs.map((imgPath)=>getStorageImg(imgPath))
                )
                setImgUrl(urls);
                // console.log(imgUrl);
            }catch(error){
                console.error(error)
            }
        }
        loadImg();
    },[imgs])

    const slider = {
        width: '500px',
        height: '600px',

    }
    return (
        <>
            <Swiper style = {slider} slidesPerView={1} loop={true} autoplay = {{delay:2000}} speed = {3000} modules={[Autoplay, EffectFade]} effect={'fade'}>
                {imgUrl.map((el,index)=>(
                    <SwiperSlide key={index} style={{background: `url(${el}) no-repeat center center`}}></SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}

export default SlideItem;