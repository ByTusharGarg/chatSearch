import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleFullNameChange = (text) => {
    setFullName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    // You can perform form submission or validation here
    console.log(`Full Name: ${fullName}, Email: ${email}`);
    navigation.navigate("Password", { fullName, email });
  };

  const checkUser = async () => {
    try {
      let pin = await AsyncStorage.getItem("pin");
      if (pin) navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkUser();
    }, [])
  );

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
        <Text>Full Name:</Text>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={handleFullNameChange}
        />

        <Text>Email:</Text>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Enter your email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Button
          title="Continue"
          disabled={!fullName || !email}
          onPress={handleSubmit}
        />
        {/* <TouchableOpacity
          style={{ alignItems: "center", marginTop: 20 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Click here to login</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SignUp;
