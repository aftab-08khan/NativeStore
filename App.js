import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductListScreen from "./screens/productListScreen";
import ThemeProvider from "./context/themeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "./screens/SingleProduct";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen
              name="ProductList"
              component={ProductListScreen}
              options={{ title: "Products" }}
            />
            <Stack.Screen
              name="ProductDetail" // This name should match the navigation action
              component={ProductDetailScreen}
              options={{ title: "Product Details" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
