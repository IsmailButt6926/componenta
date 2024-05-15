import React from 'react'
import { toast } from 'react-toastify';

const Toaster = (message:string,type:string) => {
    if(type === "success") {
        return toast.success(message, {position: "top-center" });
    }else if(type === "error"){
        return toast.error(message, { position: "top-center" });
    } else {
        return toast(message, {position: "top-center" });
    }
}

export default Toaster