import { View, Text, Image, Button, Linking } from "react-native";
import React from "react";
import Identite from "./Identite";
import Coordonnees from "./Coordonnees";
import Adresse from "./Adresse";
import Hobbies from "./Hobbies";

const ExerciceFiche2 = () => {
    const handleClick = () => {
        const url = 'https://www.cegeptr.qc.ca/';
    Linking.openURL(url).catch((err) => 
      console.error('Erreur lors de l’ouverture du lien :', err)
    );
    }

  return (
    <View style={styles.container}>
      <Identite />
      <Coordonnees />
      <Adresse />
      <Hobbies />
      <Button title="Site web" onPress={handleClick} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#223240",
    padding: 30,
  },
  
  
  nom: {
    fontSize: 45,
    color: "white",
  },
  texte: {
    color: "gray",
    fontSize: 21,
  },
};

export default ExerciceFiche2;
