import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import logo from '../images/amazon.png';
import estilos from "../styles/estilos.js"

export default function Login({navigation}){
    return<View style={estilos.telaLogin}>
        <Image source={logo} style={estilos.imagem}/>
        <TextInput style={estilos.inputLogin} placeholder='Digite seu Login' placeholderTextColor={'#a9a9a9'}/>
        <TextInput style={estilos.inputLogin} placeholder='Digite sua Senha' placeholderTextColor={'#a9a9a9'} secureTextEntry={true}/>
        <TouchableOpacity style={estilos.botao} onPress={()=>{
            navigation.navigate('Index')
        }}>
            <Text style={estilos.textoBotao}>
                Logar
            </Text>
        </TouchableOpacity>
        <Text style={estilos.direitos}>
            Todos os Direitos reservados - Igor Turto Soluções
        </Text>
    </View>
}

