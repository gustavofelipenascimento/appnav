import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../config/styles";
 
export default function ProdutosScreen() {
  const [produtos, setProdutos] = useState([]);


  useEffect(
    () => {
      
      fetchProducts();
    },
    [] 
  );


  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log(data.products);
    
    setProdutos(await data.products);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {}
      {}
      <Text variant="titleLarge">Produtos</Text>
      <Text variant="bodyMedium">Confira a lista de produtos</Text>

      {
        produtos.length === 0 ? (
          <Text>Carregando...</Text>
        ) : (
          produtos.map((produto) => (
            <View key={produto.id} style={styles.selfStrech}>
              <Text variant="headlineMedium" >{produto.title}</Text>
              {}
              <Image
                source={{ uri: produto.images[0] }}
                style={{ width: "100%", maxWidth: 480, height: 320 }}
              />
            </View>
          ))
        )
      }
    </View>
    </ScrollView>
  );
}
