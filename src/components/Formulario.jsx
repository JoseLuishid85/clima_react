import React,{ useState } from 'react'
import useClima from '../hooks/useClima'
import Error from './Error'

const Formulario = () => {

    const [alerta,setAlerta] = useState(false)
    const { busqueda,datosBusqueda,consutarClima } = useClima()
    const { ciudad,pais } = busqueda;

    const handleSubmit = e =>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta(true)
            return 
        }

        setAlerta('')
        consutarClima(busqueda)
    }

    return (
        <div className='contenedor'>

            { alerta ? <Error mensaje='Todos los campos son obligatorios' /> : <p></p>}

            <form
                onSubmit={handleSubmit}
            >
                <div className='campo'>
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="pais">Pais</label>
                    <select 
                        name="pais" 
                        id="pais"
                        onChange={datosBusqueda}
                        value={pais}
                    >
                        <option value="">--Seleccione un Pais--</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="ES">España</option>
                        <option value="PE">Peru</option>
                        <option value="VE">Venezuela</option>
                    </select>
                </div>

                <input type="submit" value="Consultar Clima" />
            </form>
        </div>
    )
}

export default Formulario