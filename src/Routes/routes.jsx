import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";
import AddCraftSection from "../Components/AddCraftSection";
import AddCraft from "../Pages/addCraft/AddCraft";
import MyArtCraft from "../Pages/myArt&Craft/MyArtCraft";
import AllArtCraft from "../Pages/allArt&Craft/AllArtCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<div></div>,
    children:[

      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/allArt&Craft',
        element:<AllArtCraft/>
      },
      {
        path:'/addCraft',
        element:<AddCraft/>
      },
      {
        path:'/myArt&Craft',
        element:<MyArtCraft/>
      }


    ]
  },
  {
    path:'/craftItemsSection',
    element:<AddCraftSection/>
  }
]);




export default router