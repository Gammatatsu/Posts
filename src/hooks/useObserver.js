import { useEffect, useRef } from "react";

export const useObserver = (ref,canLoad,isLoading,callback) =>{
    const observer = useRef()
    useEffect (()=>{
        const options={
          root:document,
        }
        if(isLoading)return;
        if(observer.current) observer.current.disconnect();
        const cb = function(entries,observer){
          if(entries[0].isIntersecting  && canLoad){
            callback()
    
          }
    
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
      },[isLoading])
     
}