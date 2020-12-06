import React, {createContext, useState,useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const AlumnosContext = createContext();


const AlumnosProvider = (props)=>{
    const [alumno, setAlumno] = useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
    })

    const [lista, setLista]= useState([]);

    useEffect(()=>{
        firebase.database().ref('Alumnos').on('value', snapshot=>{
            let alumnosLista=[];
            snapshot.forEach(row=>{
                alumnosLista.push({
                    matricula:row.key,
                    nombre:row.val().nombre,
                    correo:row.val().correo,
                    carrera:row.val().carrera
                })
            })
            setLista(alumnosLista)
        })
    },[])




    const eliminar =(id)=>{
        firebase.database().ref('Alumnos/'+id).set(null).then(()=>{
            alert("Eliminado")
        })

        const temporal = lista.filter((item)=>{
            return item.matricula!== id;
        })
        setLista(temporal)
    }
    return(
        <AlumnosContext.Provider
            value={{
                alumno,
                lista,
                setAlumno,
                setLista,
                eliminar
            }}
        >
            {props.children}

        </AlumnosContext.Provider>
    )
}

export default AlumnosProvider;