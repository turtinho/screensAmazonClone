import React from "react";
import {TextInput, View,Text, Image} from 'react-native';
import estilos from "../styles/estilos.js"
import { Ionicons } from "@expo/vector-icons"; 

import ps5 from '../images/ps5.jpg'
import alexa from '../images/alexa.jpeg'
import watch from '../images/watch.jpeg'
import fone from '../images/fone.jpeg'
import tab from '../images/tab.jpeg'
import kindle from '../images/kindle.jpeg'
import iphone from '../images/iphone.jpeg'
import tv from '../images/tv.jpeg'
import mac from '../images/macbook.jpeg'

export default function Index(){
    return<View>
      <View style={estilos.inputContainer}>
      <Ionicons name="search" size={24} color="black" style={estilos.icon} />
      <TextInput
        style={estilos.input}
        placeholder="      Pesquisar na Amazon.com.br"
        placeholderTextColor={'#a9a9a9'}
      />
    </View>    
      <View style={estilos.inputContainer2}>
        <Ionicons name="pin" size={24} color="black" style={estilos.icon2} />
        <Text style={estilos.textoEnviar}>Enviar para Igor - Bauru 17000-000</Text>
      </View>
      <View style={estilos.containerProd}>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={ps5} style={estilos.imagemProduto}/>
        </View>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={alexa} style={estilos.imagemProduto}/>
        </View>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={watch} style={estilos.imagemProduto}/>
        </View>
      </View>
      <View style={estilos.containerProd}>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={fone} style={estilos.imagemProduto}/>
        </View>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={tab} style={estilos.imagemProduto}/>
        </View>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={kindle} style={estilos.imagemProduto}/>
        </View>
      </View>
      <View style={estilos.containerProd}>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={iphone} style={estilos.imagemProduto}/>
        </View>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={tv} style={estilos.imagemProduto}/>
        </View>
        <View style={estilos.produto}>
            <Text style={{marginLeft:3, fontSize:12}}>Continue comprando</Text>
            <Image source={mac} style={estilos.imagemProduto}/>
        </View>
      </View>
      <View style={estilos.footerContainer}>
      <Text style={estilos.textoFooter}>O App Day começa em 32:40:09</Text>
    </View> 
  </View>
}