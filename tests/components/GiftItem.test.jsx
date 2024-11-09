import { render, screen } from "@testing-library/react"
import GiftItem from "../../src/components/GiftItem"






describe('Prueba de GifItem', () =>{

    const title ='Dragon ball';
    const url = 'https://dragon-ball/goku.jpg';


    test('Debe hacer match con el snapshot', () => { 

        const {container} = render(<GiftItem title={title} url={url}/>)
        // console.log(container)
        expect(container).toMatchSnapshot();


     })

     test('Debe de mostrar la imagen con el URL Y el ALT indicado', () => { 

        render(<GiftItem title={title} url={url}/>)
        // screen.debug();
        // console.log(screen.getByRole('img').src)
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt} = screen.getByRole('img');
        expect( src ).toBe(url)
        expect( alt ).toBe(title)
      });

      test('debe de mostar el title en el componente', () => { 
        
        render(<GiftItem title={title} url={url}/>)
        expect(title).toBeTruthy()

       })
})