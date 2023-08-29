import { 
  View, 
  Button, 
  TextInput, 
  StyleSheet 
} from "react-native-web";
import { useState } from "react";

export default function Form({onPressAdd}) {
  const [city, setCity] = useState('');

  const handlePress = () => {
    onPressAdd(city);
  }

  return (
    <View>
      <TextInput style={styles.input} 
        value={city} 
        onChangeText={(text) => setCity(text) } 
      />
      <Button
        onPress={handlePress}
        title="Add"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#777',
    borderWidth: 2,
    borderRadius: 6
  },
});

