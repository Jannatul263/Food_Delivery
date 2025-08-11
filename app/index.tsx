import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import HomeScreen from "../src/screen/HomeScreen";
import LoginScreen from "../src/screen/LoginScreen";
import SignupScreen from "../src/screen/SignupScreen";

type Screen = "Home" | "Login" | "Signup";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("Home");

  // Navigation callbacks
  const goToHome = () => setCurrentScreen("Home");
  const goToLogin = () => setCurrentScreen("Login");
  const goToSignup = () => setCurrentScreen("Signup");

  return (
    <View style={styles.container}>
      {currentScreen === "Home" && (
        <HomeScreen onLoginPress={goToLogin} onSignupPress={goToSignup} />
      )}

      {currentScreen === "Login" && (
        <LoginScreen onLoginSuccess={goToHome} onBackToHome={goToHome} />
      )}

      {currentScreen === "Signup" && (
        <SignupScreen onSignupSuccess={goToLogin} onBackToLogin={goToLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

