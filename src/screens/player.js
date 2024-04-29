import React from "react";
import {Text,Image,TouchableOpacity,View} from 'react-native';
import estilos from "../styles/estilos";
import capa from "../images/capa.jpg"

export default function Player(){
    return<View style={estilos.view}>
        <Text style={estilos.descricaoReproduzindo}>Reproduzindo</Text>
        <Image source={capa} style={estilos.capa}/>
        <Text style={estilos.descricaoMusica}>Sinonimos</Text>
        <Text style={estilos.descricaoMusica}>Chitãozinho & Xororó part. Ana Castela</Text>
        <TouchableOpacity style={estilos.botaoPlay}>
            <Text style={estilos.textoBotao}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.card}> 
            <Text style={estilos.textoCard}>
                Reproduzindo - Sinonimos
            </Text>
        </TouchableOpacity>
    </View>
}

