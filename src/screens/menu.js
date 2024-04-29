import React from "react";
import {TextInput, View,Text, Image, ScrollView} from 'react-native';
import estilos from "../styles/estilos.js"
import { Ionicons } from "@expo/vector-icons"; 

import caixa from '../images/caixa.jpg'
import agenda from '../images/agenda.jpg'
import webcam from '../images/webcam.jpeg'
import maismenos from '../images/maismenos.jpeg'
import livros from '../images/livros.jpeg'
import novamente from '../images/novamente.jpg'
import ofertas from '../images/ofertas.jpeg'
import presentes from '../images/presente.jpeg'
import caixa2 from '../images/caixa2.jpg'
import saude from '../images/saude.jpg'
import alimento from '../images/alimentos.jpeg'
import pet from '../images/pet.jpg'

export default function Menu(){
    return<ScrollView>
    <View style={estilos.inputContainer}>
    <Ionicons name="search" size={24} color="black" style={estilos.icon} />
    <TextInput
      style={estilos.input}
      placeholder="      Pesquisar na Amazon.com.br"
      placeholderTextColor={'#a9a9a9'}
    />
  </View>  
  <Text style={{fontWeight:"bold",fontSize:14,marginTop:6,marginLeft:5}}>Seus Atalhos</Text>
    <View style={estilos.containerProd2}>
        <View style={{flexDirection:'column',marginLeft:8}}>
            <View style={estilos.atalhos}>            
                <Image source={caixa} style={estilos.imagemCategoria}/>
            </View>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:8,textAlign:'center'}}>Seus Pedidos</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <View style={estilos.atalhos}>            
                <Image source={agenda} style={{marginTop:5, marginLeft:5, width:60, height:60}}/>
            </View>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:8,textAlign:'center'}}>Suas listas</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <View style={estilos.atalhos}>            
                <Image source={webcam} style={{marginTop:8, marginLeft:15, width:35, height:55,}}/>
            </View>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:8,textAlign:'center'}}>Eletrônicos, TV</Text>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:2,textAlign:'center'}}>Ee Áudio</Text>
        </View>
    </View> 
    <View style={estilos.containerProd2}>
        <View style={{flexDirection:'column',marginLeft:8}}>
            <View style={estilos.atalhos}>            
                <Image source={maismenos} style={{marginTop:5, marginLeft:4, width:60, height:60,}}/>
            </View>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:8,textAlign:'center'}}>Mais por Menos</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <View style={estilos.atalhos}>            
                <Image source={livros} style={{marginTop:7, marginLeft:8, width:55, height:55,}}/>
            </View>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:8,textAlign:'center'}}>Livros</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            <View style={estilos.atalhos}>            
                <Image source={novamente} style={{marginTop:12, marginLeft:10, width:50, height:50,}}/>
            </View>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:8,textAlign:'center'}}>Comprar</Text>
            <Text style={{marginLeft:2, fontSize:10,fontWeight:'bold',marginTop:2,textAlign:'center'}}>novamente</Text>
        </View>
    </View> 
  <Text style={{fontWeight:"bold",fontSize:14,marginTop:6,marginLeft:5}}>Comprar por categoria</Text> 
    <View style={estilos.containerProd}>
      <View style={estilos.produto}>
          <Text style={{marginLeft:3, fontSize:12}}>Amazon Prime</Text>
          <Image source={caixa2} style={estilos.imagemProduto2}/>
      </View>
      <View style={estilos.produto}>
          <Text style={{marginLeft:3, fontSize:12}}>Presentes</Text>
          <Image source={presentes} style={estilos.imagemProduto2}/>
      </View>
      <View style={estilos.produto}>
          <Text style={{marginLeft:3, fontSize:12}}>Ofertas e Descontos</Text>
          <Image source={ofertas} style={estilos.imagemProduto2}/>
      </View>
    </View>
    <View style={estilos.containerProd}>
      <View style={estilos.produto}>
          <Text style={{marginLeft:3, fontSize:12}}>Alimentos e Bebidas</Text>
          <Image source={alimento} style={estilos.imagemProduto2}/>
      </View>
      <View style={estilos.produto}>
          <Text style={{marginLeft:3, fontSize:12}}>Saúde e Cuidados Pessoais</Text>
          <Image source={saude} style={{marginLeft:5, width:70, height:70}}/>
      </View>
      <View style={estilos.produto}>
          <Text style={{marginLeft:3, fontSize:12}}>Pet Shop</Text>
          <Image source={pet} style={estilos.imagemProduto2}/>
      </View>
    </View>
</ScrollView>
}