import React from "react";
import {TextInput, View,Text, Image,TouchableOpacity} from 'react-native';
import estilos from "../styles/estilos.js"
import { Ionicons } from "@expo/vector-icons"; 

import mac from '../images/macbook.jpeg'

export default function Carrinho(){
    return<View>
    <View style={estilos.inputContainer}>
    <Ionicons name="search" size={24} color="black" style={estilos.icon} />
    <TextInput
      style={estilos.input}
      placeholder="      Pesquisar na Amazon.com.br"
      placeholderTextColor={'#a9a9a9'}
    />
  </View>    
    <Text style={{fontWeight:'bold',margin:18}}>Mensagens sobre produtos em seu carrinho</Text>
    <View style={{flexDirection:"row"}}>
      <Text style={{fontSize:14,marginLeft:6,marginRight:4,marginBottom:10}}>Subtotal</Text>
      <Text style={{fontWeight:'bold',fontSize:15,marginBottom:10}}>R$ 10.999,11</Text>
    </View>    
    <TouchableOpacity style={estilos.botaoFecharPedido}>
      <Text style={estilos.textoBotaoFecharPedido}>
        Fechar pedido (4 itens)
      </Text>
    </TouchableOpacity>
    <View style={{flexDirection:"row"}}>
      <TextInput style={{width:20,height:20,backgroundColor:"#ffffff",margin:20,borderRadius:6,}}/>
      <Text style={{margin:12,}}>Enviar como presente, incluir mensagem personalizada</Text>
    </View>
    <Text style={estilos.textoDesmarcar}>Desmarcar todos os itens</Text>
    <View style={estilos.containerProd}>
      <View style={estilos.produtoCarrinho}>
          <Image source={mac} style={estilos.imagemProdutoCarrinho}/>
    </View>
        <View style={{flexDirection:'column',marginBottom:25}}>
          <Text>Apple MacBook Air</Text>
          <Text>de 13 polegadas</Text>
          <Text style={{fontWeight:'bold',fontSize:16}}>R$ 10.999,11</Text>
          <Text style={{color:'#1b9106'}}>Em estoque</Text>
          <Text>Vendido por: </Text>
          <Text style={{color:'#07b1fa'}}>Apple Brasil</Text>
        </View>  
      </View>
      <View style={{flexDirection:'row',marginLeft:12}}>
      <TouchableOpacity style={estilos.botaoQtd}>
      <Text style={estilos.textoMaisMenos}>
       -
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={estilos.botaoQtd}>
      <Text style={estilos.textoDesmarcar2}>
       3
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={estilos.botaoQtd}>
      <Text style={estilos.textoMaisMenos}>
       +
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={estilos.botaoExcluir}>
      <Text style={estilos.textoMaisMenos}>
       Excluir
      </Text>
    </TouchableOpacity>
      </View>
</View>
}