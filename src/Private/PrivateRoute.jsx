import { useContext } from "react";
import { AuthCOntext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

const {user}=useContext(AuthCOntext);
const location=useLocation();
console.log(location)


  if(user){
   return children
  }
    return <Navigate to={'/Login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;