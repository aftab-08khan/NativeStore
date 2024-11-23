import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../context/themeContext";

const ProductListScreen = ({ navigation }) => {
  const { mode, handleModeBtn } = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading ? (
        <ActivityIndicator color={"red"} size={"large"} />
      ) : (
        <View
          style={[styles.container, mode ? styles.darkMode : styles.lightMode]}
        >
          <Text style={styles.headerText}>Product Screen</Text>
          <TouchableOpacity style={styles.modeButton} onPress={handleModeBtn}>
            <Text style={styles.modeButtonText}>
              {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Text>
          </TouchableOpacity>
          <FlatList
            key={"2-columns"} // Unique key to force re-rendering if necessary
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.productList}
            numColumns={2} // Fixed two columns layout
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 16,
  },
  productList: {
    paddingVertical: 8,
    alignItems: "center",
  },
  productCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    width: "45%", // For two cards per row with some spacing
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff6347",
  },
  modeButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    backgroundColor: "#333",
    marginVertical: 10,
  },
  modeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  lightMode: {
    backgroundColor: "#f7f7f7",
  },
  darkMode: {
    backgroundColor: "#333",
  },
});
