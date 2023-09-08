import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Picker from './src/Picker';

export default function App() {

  const data = [
    {
      id: 1,
      city: "İstanbul"
    },
    {
      id: 2,
      city: "Ankara"
    },
    {
      id: 3,
      city: "İzmir"
    },
    {
      id: 4,
      city: "Antalya"
    },
    {
      id: 5,
      city: "Bursa"
    }
  ]

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Picker
        items={data}
        onIndexChange={() => { }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
