import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Identite = () => {
  return (
    <View style={styles.enTete}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/women/59.jpg" }}
        style={styles.image}
      />
      <Text style={styles.nom}>Line Laroche</Text>
    </View>
  );
};

export default Identite;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  enTete: {
    marginVertical: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  texte: {
    color: "gray",
    fontSize: 21,
  },
  nom: {
    fontSize: 45,
    color: "white",
  },
});
