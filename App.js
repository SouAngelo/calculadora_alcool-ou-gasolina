import { StyleSheet, Text, View, Image, TextInput, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [maisBarato, setMaisBarato] = useState('')

  function openModal(){
    
  const soma = alcool + gasolina

  if(soma !== 0){
    setModalVisible(true)
    
  } else{
    alert('Dgite o preço por litro!')
  }

   const divisao = alcool / gasolina

   if(divisao < 0.7){
     setMaisBarato('Álcool')
   } else{
     setMaisBarato('Gasolina')
   }

  }

  function closeModal(){
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center', marginTop: 80}}>
           <Image source={require('./assets/logo.png')}/>
           <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold', marginTop: 25, marginBottom: 50}}>Qual a melhor opção?</Text>
        </View>

        <View>
          <Text style={styles.text}>Álcool (preço por litro):</Text>
          <TextInput style={styles.inputs} placeholder='Digite o preço' keyboardType='numeric'
           value={alcool} onChangeText={(e) => setAlcool(e)} maxLength={4}/>

          <Text style={styles.text}>Gasolina (preço por litro):</Text>
          <TextInput style={styles.inputs} placeholder='Digite o preço' keyboardType='numeric'
          value={gasolina} onChangeText={(e) => setGasolina(e)}  maxLength={4}/>
      <TouchableOpacity style={{marginLeft: 20, marginRight: 20, height: 50, backgroundColor: '#f42222', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}} 
       onPress={openModal}>
         <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}>Calcular</Text>
      </TouchableOpacity>

        </View>

   <Modal
   animationType='slide'
   visible={modalVisible}
   >
    
    <View style={styles.container}>
       <View style={{alignItems: 'center', marginTop: 80}}>
           <Image source={require('./assets/logo.png')}/>
           <Text style={{fontSize: 28, color: 'green', fontWeight: 'bold', marginTop: 25, marginBottom: 50}}>Compensa usar {maisBarato}</Text>
       </View>
       <View style={styles.textModal}>
         <Text style={{fontSize: 28, color: '#fff', fontWeight: 'bold'}}>Com os preços:</Text>
         <Text style={{fontSize: 18, marginTop: 10, color: '#fff'}}>Álcool: R$ {alcool}</Text>
         <Text style={{fontSize: 18, marginTop: 10, color: '#fff'}}>Gasolina: R$ {gasolina}</Text>

         <TouchableOpacity style={styles.closeModal} onPress={closeModal}>
          <Text style={{fontSize: 18, marginTop: 10, color: '#f42222'}}>Calcular novamente</Text>
       </TouchableOpacity>

       </View>

      
    </View>

   </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02677a',
    
  },

  inputs:{
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    fontSize: 18,
    marginBottom: 35,
    fontWeight: '600',
    color: '000'
  },
  text:{
    color: '#fff',
    marginLeft: 20,
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold'
  },

  textModal:{
    alignItems: 'center', 

  },
  
  closeModal:{
    borderColor: '#f42222',
    borderWidth: 1,
    width: 300,
    height: 40,
    alignItems: 'center',
    marginTop: 25
  }
});
