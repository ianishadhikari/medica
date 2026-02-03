import { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router"; // helps to navigate between screens
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/images/auth_wave.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.medicaContainer}>
        <Text style={styles.medicaText}>Medica</Text>
      </View>
      <View style={styles.inputContainer}>
        <Feather
          name={"user"}
          size={24}
          color={"#9A9A9A"}
          style={styles.inputIcon}
        />
        <TextInput style={styles.TextInput} placeholder="ID" />
      </View>
      <View style={styles.inputContainer}>
        <Entypo
          name="lock"
          size={24}
          color={"#9A9A9A"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.loginButtonContainer}>
        <Text style={styles.loginButtonText}>Login</Text>
      </View>

      <View>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },

  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 244,
  },
  logoContainer: {
    alignItems: "flex-start",
  },

  logoImage: {
    height: 71,
    width: 124,
    position: "relative",
    top: -180,
  },

  medicaContainer: {},

  medicaText: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
    color: "#000000",
    position: "relative",
    top: -238,
  },
  inputContainer: {
    backgroundColor: "#D2E7FB",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 60,
  },
  inputIcon: {
    marginLeft: 10,
    marginRight: 5,
  },
  TextInput: {
    flex: 1,
  },
  loginButtonContainer: {
    backgroundColor: "#5FA3E4",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 90,
    elevation: 10,
    marginVertical: 35,
    height: 60,
  },
  loginButtonText: {
    color: "#1A1919",
    fontSize: 24,
    fontWeight: "bold",
  },

  forgotPasswordText: {
    textAlign: "center",
  },
});
