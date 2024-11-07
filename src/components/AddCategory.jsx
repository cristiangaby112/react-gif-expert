import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChanged = (event) => {
  // console.log(event.target.value)
    setInputValue(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log('Soy el inputValue', inputValue);
    // inputValue === '' ? alert('debe escribir un nombre') : setCategories((categories)=>[{name:inputValue, id: 3}, ...categories])
    inputValue === '' ? alert('debe escribir un nombre') : onNewCategory(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={ (event) => onSubmit(event)}>
       <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
     
    
  )
}

// export default AddCategory