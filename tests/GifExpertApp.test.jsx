import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"


describe('Prueba en GifExpertApp />', () => {
  const categories = 'valorant';
  const addCategories = 'GOKU';

  const setup = () => {

      render(<GifExpertApp/>)

      const input = screen.getByRole('textbox');
      const form =screen.getByRole('form');

      return {
        input,
        form
      };
  };

   test('se espera que el input value sea vacio', () => { 

      render(<GifExpertApp/>);
      const input = screen.getByRole('textbox');
      fireEvent.input(input, {target: { value: ''}});
      expect(input.value).toBe('');
      // screen.debug()

    })


    test('se espera el  GifExpertApp in h1', () => { 
      
      setup();
      expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe('GifExpertApp');
      
      

    })

    test('debe agregar una nueva categoria', () => { 
      // Mi app tiene como state inicial de las categorias "valorant".
      const {input, form} = setup();
      
      fireEvent.input(input, {target: {value: addCategories}});
      fireEvent.submit(form); //agrega GOKU
      // screen.debug()
      
      //Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
      expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);

     })

     test('NO debe agregar una nueva categoria SI ES LA MISMA', () => { 
      const {input, form} = setup();
      
      fireEvent.input(input, {target: {value: 'valorant'}});
      fireEvent.submit(form); //agrega valorant
      
      // screen.debug()
      
      //Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
      expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1); // SE ESPERAN DOS EN VEZ DE UNO PORQUE YA ESTA VALORANT EN EL ARRAY

     })

})