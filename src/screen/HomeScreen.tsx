import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HomeScreenProps {
  onLoginPress: () => void;
  onSignupPress: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onLoginPress, onSignupPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Food Delivery!</Text>

      <TouchableOpacity style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={onSignupPress}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f3eaeaff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 28,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ed7214ff", // similar orange color like Signup button
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    alignSelf: "center",
    marginVertical: 8,
  },
  signupButton: {
    backgroundColor: "#0a8ce9ff", // different color for signup, e.g. blue
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
