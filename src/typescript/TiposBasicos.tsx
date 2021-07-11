export const TiposBasicos = () => {

    const nombre = "Rodolfo"
    const edad = 34
    const esActivo: boolean = true
    const poderes : string[]= [ 'Velosidad', 'volar', 'Respoirar en el agua']
    return (
        <>
            <h3>Tipos basicos</h3>   
            { nombre },  { edad }, { (esActivo) ? 'activo' : 'No Activo' } 
            <br />
            { poderes.join(', ') }
        </>
    )
}
