import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) =>{
    const dispatch = useDispatch();

const handleAddItem = (item) =>{
   dispatch(addItem(item));


}
    return(
        <div>
         {items.map(item => 
         <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" key={item?.card?.info?.id}> 
         <div className="w-9/12">
          <div className="py-2 text-lg" >
          <span>  {item?.card?.info?.name} </span>
           </div>
           <div>
           <span>  ₹ {item?.card?.info?.price/100}</span> 
           </div>
            <div className="text-xs">
            <p>{item?.card?.info?.description}</p>
            </div>
            </div>
                
            <div className="w-3/12 p-4 relative">
                 <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item?.card?.info?.imageId}  className="w-full" />
                 <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <button className="p-2 bg-white text-green-400 rounded shadow-lg m-auto flex justify-between"
                                onClick={()=>handleAddItem(item)} >Add +</button>
                </div>
            </div>

            </div>
            
            )}
        </div>
    )
}
export default ItemList;