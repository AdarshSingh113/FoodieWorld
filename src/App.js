import React, { lazy,Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"

//Chunking or Code Splitting or Dynamic Nundling or Lazy Loading or On demand Loading or dyanmice import
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{
   return(
   <div className="app">
      <Header/>
      <Outlet/>
   </div>
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
            }
         ]
         ,
         errorElement:<Error/>
      },
      
   ]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);
