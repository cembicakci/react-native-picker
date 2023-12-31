import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setVisible(true) }} style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>

      <Picker
        data={data}
        selectText={"city"}
        selectedItem={(item) => { console.log("Selected Item", item) }}
        visible={visible}
        setVisible={setVisible}
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
  buttonText: {
    color: '#007AFF',
    fontSize: 18
  }
});
