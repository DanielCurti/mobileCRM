import React from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() { 
    var username = ''
    var password = ''
    const login = () => {
        if (username == '123' && password == '123') {	
            navigation.navigate('home', {data: 'Daniel Henrique curti'})
        } else {
            Alert.alert('Erro', 'Usuario ou senha incorreto')
        }
      }

      const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>
                    Bem-Vindo(a)
                </Text>               
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>
                    Email:
                </Text>
                <TextInput onChangeText={value => username = value} placeholder="Digite seu Email..." style={styles.input}/>

                <Text style={styles.title}>
                    Senha:
                </Text>
                <TextInput onChangeText={value => password = value} placeholder="Digite sua senha..." style={styles.input}/>
                
                <TouchableOpacity style={styles.button} onPress={ () => login()}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}  onPress={ () => navigation.navigate('signup')}>
                    <Text style={styles.buttonText}>
                        <Text style={styles.registerText}>
                            Não possui uma conta? Registre-se
                        </Text>
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(165, 145 , 104)',
    },
    containerHeader: {
        marginTop: '18%',
        marginBottom: '12%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius : 25,
        borderTopRightRadius : 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: 'rgb(165, 145 , 104)',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#333',
        fontSize: 14
    }
})
