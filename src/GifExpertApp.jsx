import { useState } from "react";
import {AddCategory, GifGrid, ButtonRemoveCategory} from "./components";

 
 const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState([ 'valorant' ]);
  // console.log(categories)
  const onAddCategory = (newCategory) => {
    // console.log( newCategory)
    if( categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])    

  }
  
  const handleRemove = (category) => {
    // console.log( category)
    if( categories.length === 1) return
    const newList = categories.filter((catego) => catego !== category)
    setCategories(newList)
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory ={event => onAddCategory(event)}
      />
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        {categories.map( (category) =>(
           <div key={category}>
            <ButtonRemoveCategory onRemove ={ () => handleRemove(category)}/>
            <GifGrid key={category} category={category}/>
           </div> 
          ))
        }
    </>
  )
 }
 
 export default GifExpertApp;