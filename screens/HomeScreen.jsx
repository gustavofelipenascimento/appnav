import { ScrollView, Text, View } from "react-native";
import styles from "../config/styles";


export default function HomeScreen(){

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text>Página Inicial</Text>
            </ScrollView>
        </View>
    )
}