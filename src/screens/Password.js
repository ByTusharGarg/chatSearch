import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { updateActiveStack } from "../redux/counterSlice";

const Password = ({ route }) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pin, setPin] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirm(text);
  };
  const handlePinChange = (text) => {
    setPin(text);
  };
  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      console.log(route.params);
      await AsyncStorage.setItem("name", route?.params?.fullName);
      await AsyncStorage.setItem("email", route?.params?.email);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("pin", pin);
      await dispatch(updateActiveStack(1))
      // You can perform form submission or validation here
      // console.log(`Full Name: ${fullName}, Email: ${email}`);
      // navigation.navigate("Password")
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
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
        <Text>Password</Text>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Enter your password"
          value={password}
          onChangeText={handlePasswordChange}
          keyboardType="visible-password"
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Confirm your password"
          value={confirm}
          onChangeText={handleConfirmPasswordChange}
          keyboardType="visible-password"
        />
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
          title="Submit"
          disabled={!password || !confirm || !pin || submitting}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({});
