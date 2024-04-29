import {View ,StatusBar, SafeAreaView} from 'react-native';
import Rotas from './src/routes/routes';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Rotas/>
      <StatusBar/>
      <SafeAreaView/>
    </View>
  );
}
