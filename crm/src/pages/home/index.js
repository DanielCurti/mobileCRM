import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native'

export default function Welcome() {

  const route = useRoute();
  console.log(route.params.data)
  return(
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Text>{route.params.data}</Text>
      </View>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,    
    backgroundColor: 'rgb(165, 145 , 104)',
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  texto:{
    color: '#a1a1a1'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#004400',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})