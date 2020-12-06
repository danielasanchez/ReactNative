import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AlumnosContext} from '../Context/AlumnosContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase'

const validations =Yup.object().shape({
    matricula:Yup.number().typeError('Este campo es numérico').max(99999999,"Número muy grande").required('Obligatorio'),
    nombre:Yup.string().min(2,'Nombre muy corto').max(50,'Nombre muy largo').required('Obligatorio'),
    correo: Yup.string().email('Correo inválido').required('Obligatorio'),
    carrera: Yup.string().nullable().required('Selecciona una carrera')
})


export default function Formulario({route,navigation}){
    const {status} = route.params;
    const {alumno,lista,setAlumno,setLista}= useContext(AlumnosContext);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Alumnos</Text>

            <Formik
                initialValues={alumno}
                onSubmit={(values,{resetForm})=>{
                     firebase.database().ref('Alumnos/'+alumno.matricula).update(alumno).then(()=>{
                         alert("Enviado")
                     })
                    const temporal = lista.filter(al=>al.matricula!=alumno.matricula);//!==
                    //alert('enviado')
                    setLista([...temporal,alumno]);
                    resetForm({
                        matricula:"",
                        nombre:"",
                        correo:"",
                        carrera:""
                    })
                    navigation.goBack();

                    console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setAlumno(values)
                    console.log(alumno)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('matricula')}
                            onBlur={handleBlur('matricula')}
                            placeholder="Matrícula"
                            value={values.matricula}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.matricula && <Text style={styles.texterror}>{errors.matricula}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            placeholder="Nombre"
                            value={values.nombre}                        

                        />

                        {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('correo')}
                            onBlur={handleBlur('correo')}
                            placeholder="correo electronico"
                            value={values.correo}                        

                        />      

                        {errors.correo && <Text style={styles.texterror}>{errors.correo}</Text>}       

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.carrera}
                                onValueChange={ (v)=>
                                    setFieldValue('carrera',v)
                                }
                            >
                                <Picker.Item color="grey" label="Carrera" value="" />
                                <Picker.Item color="black" label="Informatica" value="Informatica"/>
                                <Picker.Item color="black" label="Sistemas" value="Sistemas"/>
                                <Picker.Item color="black" label="TICS" value="TICS"/>
                            </Picker>
                        </View>

                        {errors.carrera && <Text style={styles.texterror}>{errors.carrera}</Text>}

                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Enviar"
                            />

                            {
                                status==="add"
                                &&
                                <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Limpiar"
                                />

                            }
                        


                        </View>

                    </View>
                )


            }    
                
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    texterror:{
      color:'red'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'gray', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    header:{
      fontSize:20, 
      textAlign:'center', 
      marginBottom:40
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: 'gray', 
      overflow: 'hidden',
      elevation: 5,
    }
  
  });
  