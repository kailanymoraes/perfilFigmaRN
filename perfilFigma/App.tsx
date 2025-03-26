import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './componentes/Header/Header';
import Infos from './componentes/Infos/Infos';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Infos/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
