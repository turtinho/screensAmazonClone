import React from "react";
import {TouchableOpacity, View,Text, Image} from 'react-native';
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
import logo from '../images/amazon.png'

export default function Conta(){
    return<View>
    <View style={estilos.inputContainer}>
    <Image source={logo} style={estilos.logoConta}/>
    <View style={{marginLeft:120,flexDirection:"row"}}>
        <Ionicons name="notifications" size={24} color="black" style={estilos.icon} />
        <Ionicons name="search" size={24} color="black" style={estilos.icon} />
    </View>
  </View>    
    <View style={estilos.inputContainer3}>
      <Ionicons name="person" size={20} color="black" style={estilos.icon3} />
      <Text style={estilos.textoEnviar}>Olá, Igor</Text>
      <Ionicons name="arrow-down" size={15} color="black" style={estilos.icon1} />
    </View>
    <View style={{flexDirection:"column",alignItems:'center'}}>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={estilos.botaoConta}>
                <Text style={estilos.textoBotao}>Seus Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoConta}>
                <Text style={estilos.textoBotao}>Comprar Novamente</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={estilos.botaoConta}>
                <Text style={estilos.textoBotao}>Sua Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoConta}>
                <Text style={estilos.textoBotao}>Suas Listas</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={{flexDirection:"row"}}>
        <Text style={{fontWeight:"bold",fontSize:14,marginTop:18,marginLeft:5}}>Seus Pedidos</Text>
        <Text style={estilos.verTudo}>Ver tudo</Text>
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
    <View style={{flexDirection:"row",marginTop:10}}>
    <Text style={{fontWeight:"bold",fontSize:14,marginTop:5,marginLeft:5}}>Continue Comprando</Text>
        <Text style={estilos.verTudo2}>Ver tudo</Text>
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
    </View>   
</View>
}