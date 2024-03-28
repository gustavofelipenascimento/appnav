import { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import styles from "../config/styles";
import axios from "axios";

const API_KEY = "de07126fb951aa5f28de0729942180f8";
const CITY_NAME = "Parana";

export default function TempoScreen() {

  const [tempoData, setTempoData] = useState(null)

  useEffect(() => {
    const fetchTempo = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

      try {
        const response = await axios.get(url);
        console.log(response.data)

        setTempoData(response.data)
      } catch (error) {
        console.error("Aqui tem um erro meu mano", error);
      }

    };
    fetchTempo();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">Tempo em {CITY_NAME}</Text>
      {tempoData && (
        <Card style={styles.card}>
          <Card.Title title="Detalhes do Tempo" />
          <Card.Content>
            <Text>Temperatura: {tempoData.main.temp}°C</Text>
            { }
          </Card.Content>
        </Card>
      )}
    </View>
  );
}