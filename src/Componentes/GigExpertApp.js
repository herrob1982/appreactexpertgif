
import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GigExpertApp = () => {

    //const categorias = ['One Punch','Samurai X','Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']) ;

    // const handleAdd = () => {

    //     //setCategories( [...categories, 'X-man']);
    //     //setCategories(['X-Men',...categories]);
    //     setCategories(cats => [...cats,'X-Men']);
    // }

    
    return (
        <div>
            <h2>GifExportApp</h2>
            <AddCategory 
                setCategoria = {setCategories}
            />
            <hr/>
            <ol>
                {
                    categories.map( cat => (
                        <GifGrid
                        key={cat}
                        category={cat}
                        />
                        )
                    )
                }
            </ol>
        </div>
    )
}



