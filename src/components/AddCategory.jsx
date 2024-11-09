import PropTypes from "prop-types";
import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChanged = (event) => {
  // console.log(event.target.value)
    setInputValue(event.target.value)
  };

  const onSubmit = (event) => {
    // console.log('Hola mundo desde el onSubmit') //console.log para el test de submit
    event.preventDefault();
    // console.log('Soy el inputValue', inputValue);
    // inputValue === '' ? alert('debe escribir un nombre') : setCategories((categories)=>[{name:inputValue, id: 3}, ...categories])
    if( inputValue.trim().length <= 1) return
    setInputValue('');
    onNewCategory(inputValue.trim());
  };
  return (
    <form onSubmit={ (event) => onSubmit(event)} aria-label='form'>
       <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
     
    
  )
}

AddCategory.protoType = {
  onNewCategory: PropTypes.func.isRequired
}