import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
    //  const[showItems,setShowItems] = React.useState(false);
     const handleClick = () =>{
        setShowIndex();
     }
    return(
        <div>
            {/* Accordance Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                <span className="font-bold text-balance">
                    {data.title}({data.itemCards.length})
               </span>
                <span> ▼   </span>
                </div>
                  {/* Accordanve Body */}


                { showItems && <ItemList items={data.itemCards}/>}
            </div>

        </div>
    )
}
export default RestaurantCategory;