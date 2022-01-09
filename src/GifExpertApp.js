import { useState } from "react";
import { AddCategory} from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () =>{

    //const categories = ['One Punch','Saint Seiya','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handlerAdd = () => {
    //     setCategories( cats => [...categories,'Naruto']);
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory  setCategories = { setCategories}/>
            <hr />
            

            <ol>
                {
                    categories.map( category =>(
                        <GifGrid 
                            key = { category }
                            category = { category}/>
                    ) )
                }
            </ol>

        </>
        
    );
}

export default GifExpertApp;