interface IDireccion {
    pais: string,
    casaNo: string
}

interface IPersona {
    nombre: string
    edad: number
    direccion: IDireccion
}

export const ObjetosLiterales = () => {

  const persona: IPersona = {
    nombre: 'Rodolfo',
    edad: 34,
    direccion: {
      pais: 'Brasil',
      casaNo: '5656'
    }
  }

    return (
        <>
            <h3>Objetos Literales</h3>  
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </>
    )
}
