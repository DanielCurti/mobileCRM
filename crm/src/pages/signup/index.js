import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  const navigation = useNavigation();

  
  return(
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            
          <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.titulo}>Login</Text>
                <TextInput 
                    placeholder='Digite seu Login' 
                    style={styles.input}
                  />

                  <Text style={styles.titulo}>Senha</Text>
                  <TextInput 
                    placeholder='Digite sua Senha' 
                    style={styles.input}
                  />

                <Text style={styles.titulo}>Repita sua senha</Text>
                  <TextInput 
                    placeholder='Digite sua senha novamente' 
                    style={styles.input}
                  />

                <Text style={styles.titulo}>Nome Completo</Text>
                  <TextInput 
                    placeholder='Digite seu nome completo' 
                    style={styles.input}
                  />
                
                <Text style={styles.titulo}>Telefone</Text>
                  <TextInput 
                    placeholder='Telefone' 
                    style={styles.input}
                  />

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Signin')}>
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
          </Animatable.View>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#11ff11',
  },
  containerForm:{
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 0
  },
  texto:{
    color: '#a1a1a1'
  },
  button:{
    margin: 18,
    backgroundColor: '#004400',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  fotoText:{
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  }
})