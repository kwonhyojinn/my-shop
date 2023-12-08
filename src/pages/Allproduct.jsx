import React, { useEffect, useState } from 'react';
import Products from '../component/Products';
import SlideItem from '../component/SlideItem';
import { listAll, ref } from 'firebase/storage'; //파이어베이스가 아닌 스토리지
import { getStorageImg, storage } from '../api/firebase';

function Allproduct(props) {

    const [imgUrls, setImgUrls] = useState([]);

    useEffect(()=>{
        const fetchImgs = async()=>{
            const imgListRef = ref(storage);
            try{
                const imgRef = await listAll(imgListRef);
                const selectRef = categoryRandomRef(imgRef.items, 4);
                const urls = await Promise.all(
                    selectRef.map((ref)=>getStorageImg(ref))
                );
                setImgUrls(urls);
            }catch(error){
                console.error(error);
            }
            

        }
        fetchImgs();
    },[])
    console.log(imgUrls)

    function categoryRandomRef(refs, count){
        return refs.sort(()=>0.5 - Math.random()).slice(0, count)
        /*
        순서를 무작위로 섞는 공식
        sort : 순서를 특정한 기준에 의해서 정렬을 하는 메서드 [-1, 0, 1]
        받아온 배열에서 sprt를 돌려서 -1, 0, 1이 나오도록 랜덤의 수를 생성(math.random)
        math.random은 0~1사이의 값을 반환하게 되는데 반환되는 값에서 0.5를 빼면
        균등하게 음수와 양수를 뽑아낼 수 있다. 
        0.5외에 다른 숫자가 들어올 수 있지만 가장 균등한 확률은 중간값인 0.5를 넣어준다. 
        slice는 정렬된 배열중에서 시작순번부터 끝나는 순번까지 잘라내는 역할을 한다. 
        
        ex) a,b를 sort를 이용해서 정렬할 때 
        -1를 반환하게 되면 앞으로 가게 되고
        1을 반환하게 되면 뒤로 가게 되며
        0을 반환할 경우 정렬하지 않는다. 
        */
    }
    
    return (
        <div className='container'>
            <SlideItem imgs={imgUrls}/>
            <Products/>
        </div>
    );
}

export default Allproduct;