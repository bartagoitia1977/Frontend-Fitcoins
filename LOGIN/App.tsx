import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Quicksand: require('./assets/fonts/Quicksand_Bold.otf'),
    Inter: require('./assets/fonts/Inter-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }
  
  return (
    <KeyboardAvoidingView>
      <View style={styles.barra}>
        <Text style={styles.entrar}>Entrar</Text>
      </View>
      <View>
        <TextInput style={styles.email}>
          <Text style={styles.corcaixa}>Email</Text>
        </TextInput>
      </View>
      <View>
        <TextInput style={styles.senha}>
          <Text style={styles.corcaixa}>Senha</Text>
        </TextInput>
      </View>
      <View style={styles.botaoFace}>
        <Text style={styles.cortextologin}>Entrar com Facebook</Text>  
      </View> 
      <Image 
        style={styles.logo1}
        source={require('./assets/logos/face.png')} 
      /> 
      <View style={styles.botaoGoogle}>
        <Text style={styles.cortextologin}>Entrar com Google</Text>               
      </View>
      <Image 
        style={styles.logo2}
        source={require('./assets/logos/google.png')} 
        /> 
      <View style={styles.botaologin}>
        <Text style={styles.cortextologin2}>Entrar</Text>
      </View>
    </KeyboardAvoidingView>      
  );
}

const styles = StyleSheet.create({
  barra: {
    flex: -1,
    height: 70,
    backgroundColor: '#07055C',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  entrar: {
    fontSize : 20,
    color: '#FFFF',
    fontFamily: 'Quicksand',
  },
  email: {
    width: 328,
    height: 49,
    top: 30,
    left: 17,
    borderColor: '#A4A2AA',
    borderRadius: 9.5,
    borderWidth: 1, 
    justifyContent: 'center',
  },
  senha: {
    width: 328,
    height: 49,
    top: 50,
    left: 17,
    borderColor: '#A4A2AA',
    borderRadius: 9.5,
    borderWidth: 1, 
    justifyContent: 'center',
  },
  corcaixa: {
    color: '#A4A2AA',
    fontSize: 18,  
    fontFamily: 'Inter',  
  },
  botaoFace: {
    borderWidth: 1,
    borderColor: '#A4A2AA',
    width: 328,
    height: 51,
    left: 17,
    top: 200,
    justifyContent: 'center',
  },
  botaoGoogle: {
    borderWidth: 1,
    borderColor: '#A4A2AA',
    width: 328,
    height: 51,
    left: 17,
    top: 220,
    justifyContent: 'center',
  },
  cortextologin: {
    color: '#000000',
    fontSize: 16,  
    fontFamily: 'Inter',
    left: 100,
  },
  botaologin: {
    width: 320,
    height: 50,
    left: 17,
    top: 240,
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
    left: 50,
    top: 165,
    justifyContent: 'center',
  },
  logo2: {
    width: 20,
    height: 20,
    left: 50,
    top: 185,
    justifyContent: 'center',
  },
    
});
