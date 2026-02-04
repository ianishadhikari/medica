import { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router"; // helps to navigate between screens
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
export default function home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/home-top.png")}
        style={styles.homeTopImage}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.medicaContainer}>
        <Text style={styles.medicaText}>Medica</Text>
      </View>
      <View style={styles.menuIcon}>
        <AntDesign
          name="menu"
          size={30}
          color="black"
          style={styles.menuIconStyle}
        />
      </View>
      <View style={styles.allServiceContainer}>
        <Text style={styles.allServiceText}>All service for your health</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  homeTopImage: {
    width: 520,
    height: 185,
    position: "relative",
    top: -10,
  },
  logoContainer: {
    alignItems: "flex-start",
  },

  logoImage: {
    height: 71,
    width: 124,
    position: "relative",
    top: -145,
  },
  medicaContainer: {},

  medicaText: {
    textAlign: "left",
    marginLeft: 77,
    fontSize: 36,
    fontWeight: "bold",
    color: "#000000",
    position: "relative",
    top: -197,
  },
  menuIcon: {
    flexDirection: "row",
    marginTop: -240,
    width: "103%",
    justifyContent: "flex-end",
  },
  menuIconStyle: {
    color: "#FAFBFE",
    height: 29,
    width: 57,
    alignItems: "center",
    justifyContent: "center",
  },
  allServiceContainer: {
    margin: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  allServiceText: {
    height: 29,
    width: 340,
    color: "#000000",
    fontWeight: "semibold",
    textAlign: "center",
    fontSize: 24,
  },
});
