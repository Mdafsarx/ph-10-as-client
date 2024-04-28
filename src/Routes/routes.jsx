import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";
import AddCraftSection from "../Components/AddCraftSection";
import AddCraft from "../Pages/addCraft/AddCraft";
import MyArtCraft from "../Pages/myArt&Craft/MyArtCraft";
import AllArtCraft from "../Pages/allArt&Craft/AllArtCraft";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../Private/PrivateRoute";
import UpdateRoute from "../Pages/myArt&Craft/UpdateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
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
        element:<PrivateRoute><AddCraft/></PrivateRoute>
      },
      {
        path:'/myArt&Craft/:email',
        element:<PrivateRoute><MyArtCraft/></PrivateRoute>,
        // loader:({params})=>fetch(`https://ph-10-as-server.vercel.app/ArtCraft/${params.email}`)
      },
       
      {
        path:'/myArt&Craft/update/:id',
        element:<PrivateRoute><UpdateRoute/></PrivateRoute>
        // loader:({params})=>fetch(`https://ph-10-as-server.vercel.app/ArtCraft/email/${params.id}`)
      },

      {
        path:'/Login',
        element:<Login/>
      },
      {
        path:'/Register',
        element:<Register/>
      }


    ]
  },
  {
    path:'/craftItemsSection',
    element:<AddCraftSection/>
  }
]);




export default router