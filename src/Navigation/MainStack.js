import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import { useDispatch } from "react-redux";
import { updateActiveStack } from "../redux/counterSlice";
const Stack = createNativeStackNavigator();

const MainStack = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <Button
              title="Logout"
              onPress={() => {
                dispatch(updateActiveStack(0));
              }}
            />
          ),
        }}
      />
      {/* <Stack.Screen name="Chat" component={Home} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
