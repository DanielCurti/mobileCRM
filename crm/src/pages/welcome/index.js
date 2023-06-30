import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Welcome() { 

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    source={require("../../assets/Fortaleça.png")} style={{width: '100%'}} resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                    Fortaleça CRM
                </Text>
                <Text style={styles.text}>
                    Um CRM focado em Fortalecer a sua empresa
                </Text>
                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('signin')}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'rgb(165, 145 , 104)',
        borderTopLeftRadius : 25,
        borderTopRightRadius : 25,
        paddingStart : '5%',
        paddingEnd : '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop : 28,
        marginBottom : 12
    },
    text: {
        color: '#222222'
    },
    button:{
        position : 'absolute',
        backgroundColor: 'black',
        borderRadius: 50,
        paddingVertical : 8,
        width : '60%',
        alignSelf : 'center',
        bottom : '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})
