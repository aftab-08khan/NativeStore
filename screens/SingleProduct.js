import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../context/themeContext";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const { mode } = useTheme();
  return (
    <ScrollView
      style={[
        styles.container,
        mode === true ? styles.lightMode : styles.darkMode,
      ]}
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  lightMode: {
    backgroundColor: "#000",
  },
  darkMode: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});
