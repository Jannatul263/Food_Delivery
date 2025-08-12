import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,Image, } from "react-native";

interface HomeScreenProps {
  onLoginPress: () => void;
  onSignupPress: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onLoginPress, onSignupPress }) => {
  return (
    <ImageBackground
      source={require('./Images/Image1.png')}  
      
      style={styles.backgroundImage}
      resizeMode="cover"  
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Food Delivery!</Text>

        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={onSignupPress}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(280, 275, 275, 0.9)",  
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 28,
    textAlign: "center",
    color: "#000", 
  },
  button: {
    backgroundColor: "#ed7214ff",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    alignSelf: "center",
    marginVertical: 8,
  },
  signupButton: {
    backgroundColor: "#0a8ce9ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;

