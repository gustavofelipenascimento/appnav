import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../config/styles";
import { Image } from "expo-image";

const API = "43315f4832860af701053fa7289c1ffa";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Joinville&appid=${API}&units=metric`;

export default function TempoScreenAula() {
    const [temperatura, setTemperatura] = useState("");
    const [icone, setIcone] = useState("");
    
    const fetchTempo = async () => {

        const resposta = await fetch(URL);
        const data = await resposta.json();
        console.log(resposta);
        console.log(data);
        setTemperatura(data)
        setIcone(data.weather[0].icon)
    }

    useEffect(() => {
        fetchTempo();
    }, []);

    return (
        <View style={styles.container}>
           {icone && (
            <>
            {console.log(temperatura.weather.icon)}
            <Text
             variant="displayMedium"
             style={{ textAlign: "center", marginVertical: 10}}   
            >
                Temperatura em Joinville
            </Text>
            <Image
             source={{
                uri: `https://openweathermap.org/img/wn/${temperatura.weather[0].icon}@2x.png`,
             }}
             style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                borderRadius: 200,
                }} 
            />
            </>
           )}

            <Text variant="headlineSmall">Possui mais variedades</Text>
            <Text>Temperatura atual: {temperatura?.main?.temp}</Text>
            <Text>Temperatura Máxima: {temperatura?.main?.temp_max}</Text>
            <Text>Temperatura Minima: {temperatura?.main?.temp_min}</Text>
        </View>
    );
}
