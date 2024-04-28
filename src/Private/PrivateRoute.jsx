import { useContext } from "react";
import { AuthCOntext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

const {user , loading }=useContext(AuthCOntext);
const location=useLocation();

  if(!loading){
   return <div className="flex justify-center items-center h-[60vh]"><span className="loading loading-bars loading-lg size-20"></span></div>
  }   

  if(user){
   return children
  }
    return <Navigate to={'/Login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;