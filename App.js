import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigation from "./src/Navigation";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
