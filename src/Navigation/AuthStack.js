import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Password from "../screens/Password";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{
          headerTitle: "Set Password",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
