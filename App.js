import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Form from "./components/Form";
import CityCard from './components/CityCard';

export default function App() {
  const [cities, setCities] = useState([]);

  const onPressAdd = (city) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=42c716938b4d468e92714331232908&q=${city}&aqi=no`)
    .then((response) => {
      return response.json()
    }).then((response) => {
      const cityToAdd = {
        name: response.location.name,
        temperature: response.current.temp_c
      };
      setCities([cityToAdd, ...cities])
    });
  }

  return (
    <View style={styles.container}>
      <Form onPressAdd={onPressAdd} />
      {
        cities.map((city) => {
          return (
            <CityCard city={city} />
          )
        })
      }
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
