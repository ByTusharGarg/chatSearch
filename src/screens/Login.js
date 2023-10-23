import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateActiveStack } from "../redux/counterSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [pin, setPin] = useState("");
  const handlePinChange = (text) => {
    setPin(text);
  };
  const login = async () => {
    try {
      let pass = await AsyncStorage.getItem("pin");
      if (pin === pass) {
        dispatch(updateActiveStack(1));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 50,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text>Pin</Text>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Enter a 4 digit pin"
          value={pin}
          onChangeText={handlePinChange}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Button
          title="Login"
          onPress={() => {
            login();
          }}
        />
      </View>
    </View>
  );
};

export default Login;
