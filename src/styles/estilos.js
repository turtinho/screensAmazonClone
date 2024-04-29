import {StyleSheet,Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height
const estilos = StyleSheet.create({
    imagem:{
        width:250,
        height: 80,
        alignSelf:'center',
        marginBottom:60,
        marginTop:5,
    },
    texto:{
        alignContent:'center',
        fontSize:25,
        textAlign:'center',
    },
    inputLogin:{
        width: 250,
        height:40,
        margin:8,
        borderWidth:1,
        padding:10,
        borderRadius:6,
        borderColor:'orange',
        alignSelf:'center',
    },
    botao:{
        width:180,
        backgroundColor:'orange',
        borderRadius:6,
        paddingVertical:16,
        alignSelf:'center',
        marginTop:50,
        marginBottom:90,
    },
    direitos:{
        textAlign:"center",
        fontSize:10,
        fontWeight:'italic',
    },
    botaoPlay:{
        backgroundColor:'green',
        borderRadius:6,
        paddingVertical:16,
        alignItems:'center',
        marginTop:50,
        margin:50,
        alignContent:'center',
    },
    textoBotao:{
        fontSize:15,
        color:"white",
        alignSelf:'center',
    },
    card:{
        width:"100%",
        alignItems:"center",
        flexDirection:"row",
        marginLeft:80,
        marginBottom:30,
    },
    textoCard:{
        fontSize:15,
        color:"white",
        textAlign:"center",
    },
    view:{
        backgroundColor:"#4F4F4F",
    },
    capa:{
        marginTop:20,
        width: 350,
        height:350,
        marginBottom:10,
        alignSelf:"center",
    },
    descricaoMusica:{
      marginLeft:15,
      fontSize:18,
      fontWeight:"bold",
      color:"white"
    },
    descricaoReproduzindo:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:15,
        color:"white"
      },
      telaLogin:{
        marginTop:80,
      },
      pesquisarAmazon:{
        marginTop:18,
        alignItems:'center',
        borderRadius:6,
        height:40,
        marginLeft:20,
        marginRight:20,

      },
      inputContainer: {
        height:90,
        backgroundColor:'#bbfafa',
        flexDirection:'row',
      },
      inputContainer2: {
        height:30,
        backgroundColor:'#e6fbff',
        flexDirection:'row',
      },
      inputContainer3: {
        height:30,
        backgroundColor:'#bbfafa',
        flexDirection:'row',
      },
      input: {
        backgroundColor:'#ffffff',
        height:40,
        width:250,
        marginTop: 40,
        borderRadius:10,
      },
      icon: {
        marginTop: 45,
        marginRight: 8,
        marginLeft:8,
      },
      icon1: {
        marginTop: 8,
        marginRight: 8,
        marginLeft:8,
      },
      icon2: {
        marginRight: 8,
        marginLeft:8,
      },
      icon3: {
        marginTop: 3,
        marginRight: 8,
        marginLeft:8,
      },
      produto:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        width:80,
        height:120,
        borderRadius:8,
        backgroundColor:'#ffffff'
      },
      imagemProduto:{
        marginTop:5,
        marginLeft:5,
        width:60,
        height:75,
      },
      imagemProduto2:{
        marginTop:5,
        marginLeft:7,
        width:60,
        height:75,
      },
      imagemCategoria:{
        marginTop:5,
        marginLeft:8,
        width:50,
        height:50,
      },
      containerProd:{
        marginTop:10,
        flexDirection:'row',
      },
      containerProd2:{
        marginTop:5,
        flexDirection:'row',
      },
      footerContainer: {
        height:50,
        marginTop:15,
        backgroundColor:'#e36f09',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
      },
      textoFooter:{
        marginTop:13,
        fontSize:17,
        textAlign:'center',
        fontWeight:'bold,'
      },
      textoEnviar:{
        marginTop:5,
      },
      logoConta:{
        width:90,
        height:30,
        marginTop:45,
      },
      botaoConta:{
        borderRadius: 20,
        marginTop:7,
        marginRight:7,
        borderColor:'#a9a9a9',
        borderWidth: 1,
        width:130,
        height:35,
      },
      textoBotao:{
        color:'#000000',
        textAlign: "center",
        fontSize: 12,
        padding:3,
        lineHeight: 26,
      },
      verTudo:{
        color:'#1ab1e8',
        marginTop:19,
        marginLeft:150,
        fontSize:12,
      },
      verTudo2:{
        color:'#1ab1e8',
        marginTop:8,
        marginLeft:80,
        fontSize:12,
      },
      categoria:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        width:80,
        height:120,
        borderRadius:8,
        backgroundColor:'#ffffff'
      },
      atalhos:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        width:70,
        height:70,
        borderRadius:8,
        backgroundColor:'#ffffff'
      },
      botaoFecharPedido:{
        borderRadius: 12,
        marginLeft:8,
        marginRight:12,
        backgroundColor:'#FFD700',
        width:280,
        height:30,
      },
      textoBotaoFecharPedido:{
        color:'#000000',
        textAlign: "center",
        fontSize: 13,
        padding:3,
        lineHeight: 26,
      },
      textoDesmarcar:{
        color:'#07b1fa',
        marginLeft:12
      },
      textoDesmarcar2:{
        color:'#07b1fa',
        textAlign:'center'
      },
      textoMaisMenos:{
        textAlign:'center',
      },
      produtoCarrinho:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        width:120,
        height:120,
        borderRadius:8,
        backgroundColor:'#ffffff'
      },
      imagemProdutoCarrinho:{
        marginTop:5,
        marginLeft:18,
        width:80,
        height:105,
      },
      botaoQtd:{
        borderRadius: 3,
        backgroundColor:'#ffffff',
        width:22,
        height:22,
        borderWidth: 1,
        borderColor:'#a9a9a9'
      },
      botaoExcluir:{
        borderRadius: 3,
        backgroundColor:'#ffffff',
        width:55,
        height:22,
        borderWidth: 1,
        borderColor:'#a9a9a9'
      },
})

export default estilos