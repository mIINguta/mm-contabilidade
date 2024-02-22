import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll(){
    const quemsomos = useLocation();

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [quemsomos]);
    
}