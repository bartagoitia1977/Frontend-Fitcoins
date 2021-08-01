/* TELA DE LOGIN CFA_Login2.jsx do FitCoins */

import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, 
  View, Image, Alert, TouchableOpacity} from 'react-native';

 /* Fontes e estados para caixa de digitação */ 
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {

  /* Estados para ciaxa de digitação */
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [escondeSenha, setEscondeSenha] = useState(true);  
  
  /* Ativação das fontes para estilos */
  const [loaded] = useFonts({
    Quicksand: require('./assets/fonts/Quicksand_Bold.otf'),
    Inter: require('./assets/fonts/Inter-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (

    /* View principal para prevenir subida indesejada do teclado (iOS) */
    <KeyboardAvoidingView>
      <View style={styles.barra}>
        <Image 
          style={styles.seta}
          source={require('./assets/logos/SetaEsquerda.png')} 
        /> 
        <Text style={styles.entrar}>Entrar</Text>
      </View>
      <View>
        <TextInput 
          style={styles.email}
          placeholder='Email'
          placeholderTextColor= '#A4A2AA'
          value= {input}
          onChangeText= {(texto_email) => setInput(texto_email)}>                            
        </TextInput>
      </View>
      <View>
        <TextInput 
          style={styles.senha}
          placeholder='Senha'
          placeholderTextColor= '#A4A2AA'
          value= {input2}
          onChangeText= {(texto_senha) => setInput2(texto_senha)}
          secureTextEntry= {escondeSenha}>           
        </TextInput>
      </View>
      <TouchableOpacity 
        onPress={() => Alert.alert('Entrar com Facebook','Facebocó')}
        style={styles.botaoFace}>
        <Text style={styles.cortextologin}>Entrar com Facebook</Text>        
      </TouchableOpacity>            
      <Image 
        style={styles.logo1}
        source={require('./assets/logos/face.png')} 
      />       
      <TouchableOpacity
        onPress={() => Alert.alert('Entrar com Google','Google sabe de tudo!')}
        style={styles.botaoGoogle}>
        <Text style={styles.cortextologin}>Entrar com Google</Text>               
      </TouchableOpacity>
      <Image 
        style={styles.logo2}
        source={require('./assets/logos/google.png')} 
      /> 
      <TouchableOpacity 
        onPress={() => Alert.alert('Entrar','Você terá longa vida e saúde!')}      
        style={styles.botaologin}>
        <Text style={styles.cortextologin2}>Entrar</Text>
      </TouchableOpacity>  
              
      
    </KeyboardAvoidingView>      
  );
}
/* Estilos */
const styles = StyleSheet.create({
  barra: {
    height: '10%',
    backgroundColor: '#07055C',
    justifyContent: 'center',    
  },
  entrar: {
    fontSize : 20,
    color: '#FFFF',
    fontFamily: 'Quicksand',
    top: '-20%',
    left: '41%',
  },
  email: {
    width: '92%',
    height: '30%',
    top: '10%',
    left: '4%',
    borderColor: '#A4A2AA',
    borderRadius: 9.5,
    borderWidth: 1, 
    justifyContent: 'center',
    fontSize: 18,  
    fontFamily: 'Inter', 
  },
  senha: {
    width: '92%',
    height: '30%',
    top: '-50%',
    left: '4%',
    borderColor: '#A4A2AA',
    borderRadius: 9.5,
    borderWidth: 1, 
    justifyContent: 'center',
    fontSize: 18,  
    fontFamily: 'Inter', 
  },
  botaoFace: {
    borderWidth: 1,
    borderColor: '#A4A2AA',
    borderRadius: 6,
    width: '92%',
    height: '9%',
    left: '4%',
    top: '-12%',
    justifyContent: 'center',
  },
  botaoGoogle: {
    borderWidth: 1,
    borderColor: '#A4A2AA',
    borderRadius: 6,
    width: '92%',
    height: '9%',
    left: '4%',
    top: '-12%',
    justifyContent: 'center',
  },
  cortextologin: {
    color: '#000000',
    fontSize: 16,  
    fontFamily: 'Inter',
    left: 100,
  },
  botaologin: {
    width: '88%',
    height: '10%',
    left: '6%',
    top: '-12%',
    borderRadius: 25,
    backgroundColor: '#07055C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cortextologin2: {
    color: '#FFFF',
    fontSize: 16,  
    fontFamily: 'Inter',
  },
  logo1: {
    width: 20,
    height: 20,
    left: '14%',
    top: '-18%',
    justifyContent: 'center',
  },
  logo2: {
    width: 20,
    height: 20,
    left: '14%',
    top: '-18%',
    justifyContent: 'center',
  },
  seta: {
    top: '15%',
    left: '6%',
  },
    
});