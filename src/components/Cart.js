import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {  clearCart } from "../utils/cartSlice";
const Cart =  () =>{

     const dispatch = useDispatch();

     const handleClearCart = () =>{
        dispatch(clearCart());
     }

    const cartItems = useSelector((store)=>store.cart.items);

    return <div className="m-10 p-10 text-center" >
        <h1 className="font-bold">Cart</h1>
        <button className="m-2 p-2 bg-black text-white"
        onClick={handleClearCart}
        >Clear Items</button>
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}/>
        </div>
    </div>
};

export default Cart;