import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateActiveStack } from "../redux/counterSlice";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Login"
        onPress={() => {
          dispatch(updateActiveStack(1));
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Click here to SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
