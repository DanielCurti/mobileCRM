import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

// android 227203302334-0chppkb282ddtco4lm6mgstbo7t3atvo.apps.googleusercontent.com

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession()


export default function Welcome() {

  const navigation = useNavigation();
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "227203302334-0chppkb282ddtco4lm6mgstbo7t3atvo.apps.googleusercontent.com",
    expoClientId: "d8f1d1b5-dbf8-4c44-b17f-8aa607cc4865",
    redirectUri: "https://auth.expo.io/@danielcurti/sharingpark"
  })
  
  React.useEffect(() => {
    loginComGoogle()
  }, [response])

  async function loginComGoogle() {
    await AsyncStorage.getItem("@user");
    if (!userInfo) {
      if(response?.type === "success") {	
        await getUserInfo(response.authentication.accessToken)
      }
    } else {
      setUserInfo(JSON.parse(userInfo))
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(`https://www.googleapis.com/userinfo/v2/me`, { 
        headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      const userInfo = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(userInfo));
      setUserInfo(userInfo);
    } catch (err) {

    }
  }
  return(
    <ScrollView>
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>
                Bem-Vindo(a)
            </Text>               
        </Animatable.View>

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

              <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: 'black', height: 4, flex: 1, alignSelf: 'center', borderRadius: 3, backgroundColor: 'rgb(165, 145 , 104)'}} />
                <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 18, color: 'rgb(165, 145 , 104)'}}>Outras Opções</Text>
                <View style={{backgroundColor: 'black', height: 4, flex: 1, alignSelf: 'center', borderRadius: 3, backgroundColor: 'rgb(165, 145 , 104)'}} />
            </View>

              <TouchableOpacity 
              style={styles.buttonGoogle}
              onPress={ () => promptAsync()}>
                <Image
            source={require("../../assets/googlelogo.png")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.textGoogle}>Cadastrar com Google</Text>
              </TouchableOpacity>
        </Animatable.View>
          <Text>{JSON.stringify(userInfo)}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgb(165, 145 , 104)',
  },
  containerHeader:{
    flex: 1,
    backgroundColor: 'rgb(165, 145 , 104)',    
    marginTop: '8%',
    paddingStart: '5%'
  },
  message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
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
    backgroundColor: 'rgb(165, 145 , 104)',
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
  buttonGoogle:{
    margin: 18,
    backgroundColor: 'rgb(001, 001 , 001)',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal:25,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#fff',
    height: 40
  },
  textGoogle:{
    fontSize: 14,
    backgroundColor: '#111',
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  }
})