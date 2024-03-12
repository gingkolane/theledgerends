import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("SignIn", { name: "Sign In" })}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp", { name: "Sign Up" })}
      />
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
