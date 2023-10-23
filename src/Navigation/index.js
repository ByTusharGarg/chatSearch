import { View, Text } from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MainStack from "./MainStack";

const Navigation = () => {
  const active = useSelector((state) => state.counter.value);
  const renderStack = (id) => {
    switch (id) {
      case 0:
        return <AuthStack />;
      case 1:
        return <MainStack />;
      default:
        break;
    }
  };
  return <NavigationContainer>{renderStack(active)}</NavigationContainer>;
};

export default Navigation;
