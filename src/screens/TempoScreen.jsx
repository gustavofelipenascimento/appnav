import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../config/styles";

const API_KEY = "de07126fb951aa5f28de0729942180f8";
const CITY_NAME ="Joinville, SC";

export default function TempoScreen() {
  useEffect(() => {
    const fetchTempo = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;
      const resposta = fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await resposta.json();
      console.log(data);
    };
    fetchTempo();
  }, []);

    return(
        <View 
            style={styles.container}        
        >
            <Text
            variant="bodyLarge"
            >
                Tempo
            </Text>
        </View>
    );
}