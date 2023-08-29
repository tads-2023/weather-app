import { 
  View, 
  Text, 
  StyleSheet 
} from "react-native-web";

export default function CityCard({city}) {
  return (
    <View style={styles.card}>
      <Text style={styles.textName} >{city.name}</Text> 
      <Text style={styles.textTemperature}>{city.temperature}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    backgroundColor: '#4D8CBA'
  },
  textName:{
    fontSize: 16,
    color: '#fff'
  },
  textTemperature:{
    fontSize: 20,
    color: '#fff'
  }
});

