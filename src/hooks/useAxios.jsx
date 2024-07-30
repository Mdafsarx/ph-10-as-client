import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthCOntext } from "../Auth/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "https://ph-10-as-server.vercel.app",
    withCredentials: true
})

const useAxios = () => {
     const {Logout}=useContext(AuthCOntext)


    useEffect(()=>{
        axiosSecure.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            if(error.response.status==401 || error.response.status==403){
                Logout()
            }
          });
    },[])




    return axiosSecure
};

export default useAxios;