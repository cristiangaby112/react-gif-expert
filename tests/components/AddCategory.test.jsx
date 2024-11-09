import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Prueba en AddCategory/>', () =>{

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={() =>{}}/>) // Creamos el sujeto de prueba
        const input = screen.getByRole('textbox') //Extraemos el input
        
        fireEvent.input(input, {target: { value: 'valorant'}}) // Se dispara el evento
        expect( input.value ).toBe('valorant') // Hacemos la asercion de lo que se espera despues del evento

        // screen.debug()

     });

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'valorant';
        const onNewCategory = jest.fn() // creo una funcion ficticia

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        

        fireEvent.input(input, {target: { value: inputValue}});
        fireEvent.submit(form);
        // screen.debug()


        expect(input.value).toBe('');
        // expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1); // llama una vez a la funcion
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) //llama a la funcion con el valor de inputValue

      });

      test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');        
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0); 
        expect(onNewCategory).not.toHaveBeenCalled(); 
        

       });

})