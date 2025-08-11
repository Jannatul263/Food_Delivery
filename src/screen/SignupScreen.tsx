import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

interface Props {
  onSignupSuccess: () => void;
  onBackToLogin: () => void;
}

const SignupScreen: React.FC<Props> = ({ onSignupSuccess, onBackToLogin }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!fullName || !address || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    Alert.alert("Success", `Signed up as ${fullName} (${email})`, [
      { text: "OK", onPress: onSignupSuccess },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
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
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Sign Up button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Back to Login button */}
      <TouchableOpacity style={[styles.backButton, { marginTop: 10 }]} onPress={onBackToLogin}>
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#dabb20ff",
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 12,
  },
  signupButton: {
    backgroundColor: "#ed7214ff",
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    alignSelf: "center",
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#0a8ce9ff",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    alignSelf: "center",
    borderColor: "#0a8ce9ff",
  },
  backButtonText: {
    color: "#f0f5f8ff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SignupScreen;
