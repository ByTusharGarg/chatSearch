import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text>Click here to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
