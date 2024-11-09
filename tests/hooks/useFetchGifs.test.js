const { render, renderHook, waitFor } = require("@testing-library/react")
const { default: useFetchGifs } = require("../../src/hooks/useFetchGifs")


describe('Prueba en el hook useFetchGifs', () =>{

  test('debe de regresar el estado inicial', () => { 

    const {result} = renderHook(() => useFetchGifs('Valorant'))
    const {images, isLoading} = result.current
    // console.log(result);
    // console.log(images, isLoading)
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
    // expect(isLoading).toBe(true)

   });

   test('debe de retornar un arreglo de images y isLoading en false', async() => { 

    const {result} = renderHook(() => useFetchGifs('Valorant'))
    
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0) // funcion asincrona que espera que images sea mayor a 0
      
    )
    const {images, isLoading} = result.current


    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
    // expect(isLoading).toBe(true)

   })

})