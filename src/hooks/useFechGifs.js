import {useState, useEffect} from 'react';
import { getGifs } from './../helpers/getGifs';

export const useFechGifs = ( category) => {
   
    
    const [stadoGifs, setstate] = useState({
        data: [],
        loading: true
    });

    //se ejecuta una sola vez cuando se renderiza
    useEffect ( () => {
         getGifs(category)
            .then( img => {

                setTimeout(() => {
                    console.log(img)
                    setstate({
                        data: img,
                        loading: false
                    });
                }, 3000);

            })
         
     },[category]);


    return stadoGifs;

}

