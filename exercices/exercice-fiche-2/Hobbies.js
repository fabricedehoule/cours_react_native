import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

const Hobbies = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.composant}>
      <View style={styles.titre}>
        <Text style={styles.texteTitre}>Hobbies</Text>
        <Pressable onPress={() => setVisible(!visible)}>
          <Text style={styles.textePressable}>
            {visible ? "Cacher" : "Afficher"}
          </Text>
        </Pressable>
      </View>
      {visible && (
        <View style={styles.zone}>
          <Text style={styles.texte}>Lecture</Text>
          <Text style={styles.texte}>Randonnée</Text>
          <Text style={styles.texte}>Vélo</Text>
        </View>
      )}
    </View>
  );
};

export default Hobbies;

const styles = StyleSheet.create({
  composant:{
    justifyContent: "center",
    alignItems: "stretch",
    marginBottom: 10,
  },
  zone: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "start",
    alignItems: "start",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  titre:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texteTitre: {
    color: "yellow",
    fontSize: 25,
  },
  textePressable:{
    color: "lightgray",
    fontSize: 21,
  },
  ligne: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
    margin: 10,
  },
  texte: {
    color: "gray",
    fontSize: 21,
  },
});
