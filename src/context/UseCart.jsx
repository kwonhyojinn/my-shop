import { useAuthContext } from "./AuthContext";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { updateCart, getCart, deleteCartItem } from "../api/firebase";

export default function UseCart(){
    const {uid} = useAuthContext();
    const queryClient = useQueryClient();

    const cartInfo = useQuery(['cart', uid || ''], ()=> getCart(uid),{
        enabled : !!uid
    })

    const addItemCart = useMutation(
        //mutation : 정보를 업데이트 할 때 사용하는 구문
        (product)=> updateCart(uid, product),
        {
            onSuccess : ()=>{
                queryClient.invalidateQueries(['cart',uid])
            }

        })

        const deleteItem = useMutation((id)=>deleteCartItem(uid, id),{
            onSuccess : ()=>{
                queryClient.invalidateQueries(['cart',uid])
            }
        })
    return {cartInfo, addItemCart, deleteItem} //밖으로
}