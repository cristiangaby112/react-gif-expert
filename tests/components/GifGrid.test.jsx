import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Prueba en GifGris/>', () =>{

  const category = 'One Punch'
  
  test(' debe de mostar el loading inicialmente', () => { 

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true

    });

    render(<GifGrid category={category}/>)
    // screen.debug()
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

   })

   test('debe de mostar items cuando se cargan las imagenes useFetchGifs', () => { 
    const gifs = [{
      id: 'ABD',
      title: 'One-Punch',
      url: 'https:/one-punch.com/onepunch.jpg'
    },
    {
      id: 'ABer',
      title: 'Goku',
      url: 'https:/goku.com/goku.jpg'
    }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false

    });
    render(<GifGrid category={category}/>);
    // screen.debug()

    expect(screen.getAllByRole('img').length).toBe(2)

    })

})
