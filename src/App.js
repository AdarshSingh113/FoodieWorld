import React, { lazy,Suspense, useEffect } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

//Chunking or Code Splitting or Dynamic Nundling or Lazy Loading or On demand Loading or dyanmice import
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{
   const[userName,setUserName] = React.useState("default");

//for dummy Authenticatioin
useEffect(()=>{
   const data = {
   name : "Adarsh Singh",
   };
   setUserName(data.name);
},[])
   return(
      //We can use nested Provider
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
   <div className="app">
      <Header/>
      <Outlet/>
   </div>
     </UserContext.Provider>
     </Provider>
   );
  
};


const appRouter = createBrowserRouter(
   [
      {
         path:"/",
         element:<AppLayout/>,
         children:[
            {
               path:"/",
               element:<Body/>
            },
            {
               path:"/about",
               element:<About/>
            },
            {
               path:"/grocery",
               element:<Suspense fallback={<div>Loading...</div>}>
               <Grocery />
             </Suspense>
            },
            {
               path:"restaurants/:resId",
               element:<RestaurantMenu/>
            },
            {
               path:"/cart",
               element : <Cart/>
            },
         ]
         ,
         errorElement:<Error/>
      },
      
   ]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);
