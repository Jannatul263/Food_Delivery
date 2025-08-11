import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

interface Props {
  onLoginSuccess: () => void;
  onBackToHome: () => void;
}

const LoginScreen: React.FC<Props> = ({ onLoginSuccess, onBackToHome }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    Alert.alert("Success", `Logged in as ${email}`, [{ text: "OK", onPress: onLoginSuccess }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Custom styled Login button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Custom styled Back to Home button */}
      <TouchableOpacity style={[styles.backButton, { marginTop: 10 }]} onPress={onBackToHome}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#da6516ff",  // matching your SignupScreen border color style
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 12,
  },

  // Custom Login button styles
  loginButton: {
    backgroundColor: "#da6516ff",
    height: 36,              // smaller height like Signup button
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Custom Back button styles
  backButton: {
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#2775dcff",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    alignSelf: "center",
    borderColor: "#2775dcff",
  },
  backButtonText: {
    color: "#f0f5f8ff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default LoginScreen;
