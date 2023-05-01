import React, { createContext, useState, useEffect } from 'react';
import { firebase } from '../Settings/ConfigFirebase';
//import firebase from '../Settings/ConfigFirebase';
import { onValue, ref, set} from 'firebase/database';


export const AlumnosContext = createContext();


const AlumnosProvider = (props) => {
    const [alumno, setAlumno] = useState({
        matricula: "",
        nombre: "",
        correo: "",
        carrera: ""
    })

    const [lista, setLista] = useState([]);

    useEffect(() => {

        let alumnosLista = [];
        const dbRef = ref(firebase, 'Alumnos');
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((row) => {
                alumnosLista.push({
                    matricula: row.key,
                    nombre: row.val().nombre,
                    correo: row.val().correo,
                    carrera: row.val().carrera
                })

            });
            setLista(alumnosLista)
        }, {
            onlyOnce: true
        });

        /* version anterior
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
        */

    }, []);

    const eliminar = (id) => {

        set(ref(firebase, 'Alumnos/' + id), null)
        .then(() => {
            alert("Eliminado")
        })
        .catch((error) => {
          // The write failed...
        });
      
        /* version anterior
        firebase.database().ref('Alumnos/' + id).set(null).then(() => {
            alert("Eliminado")
        })
        */

        const temporal = lista.filter((item) => {
            return item.matricula !== id;
        })
        setLista(temporal)
    }
    return (
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