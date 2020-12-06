import React, {createContext, useState,} from 'react';

export const AlumnosContext = createContext();


const AlumnosProvider = (props)=>{
    const [alumno, setAlumno] = useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
    })

    const [lista, setLista]= useState([]);





    return(
        <AlumnosContext.Provider
            value={{
                alumno,
                lista,
                setAlumno,
                setLista
            }}
        >
            {props.children}

        </AlumnosContext.Provider>
    )
}

export default AlumnosProvider;