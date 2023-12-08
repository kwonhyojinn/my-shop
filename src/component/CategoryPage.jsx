import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryProduct, getStorageImg, storage } from '../api/firebase';
import CategoryProductList from './CategoryProductList';
import {listAll, ref} from 'firebase/storage';
import SlideItem from './SlideItem';

function CategoryPage(props) {
    const [product, setProduct] = useState([]);
    const {category} = useParams(); //category에 담겨있는 정보를 가져옴

    const [imgUrls, setImgUrls] = useState([]);

    useEffect(()=>{
        const fetchImgs = async()=>{
            const imgListRef = ref(storage, `${category}`);
            try{
                const imgRefs = await listAll(imgListRef);
                const selectRef = categoryRandomRef(imgRefs.items, 3)
                const urls = await Promise.all(
                    selectRef.map((ref)=>getStorageImg(ref))
                )
                setImgUrls(urls)
            }catch(error){
                console.error(error)
            }

        }
        fetchImgs();
    },[category])

    function categoryRandomRef(refs, count){
        return refs.sort(()=>0.5 - Math.random()).slice(0, count);
    }
   

    useEffect(()=>{
        getCategoryProduct(category)
        .then((products)=>{
            setProduct(products);
        })
        .catch((error)=>{
            console.error(error);
        })

    },[category]) //빈 배열이 아닌 카테고리
    console.log(category)

    return (
        <div>
            <SlideItem imgs={imgUrls}/>
            <CategoryProductList category={category} product={product}/>
        </div>
    );
}

export default CategoryPage;