import { View, Text, Image, Button, Linking } from "react-native";
import React from "react";

const ExerciceFiche1 = () => {
    const handleClick = () => {
        const url = 'https://www.cegeptr.qc.ca/';
    Linking.openURL(url).catch((err) => 
      console.error('Erreur lors de l’ouverture du lien :', err)
    );
    }

  return (
    <View style={styles.container}>
      <View style={styles.enTete}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/59.jpg" }}
          style={styles.image}
        />
        <Text style={styles.nom}>Line Laroche</Text>
      </View>
      <View></View>
      <View style={styles.zone}>
        <View style={styles.ligne}>
            <Image source={require("../assets/enveloppe.png")} style={styles.icone} />
            <Text style={styles.texte}>line.laroche@mail.com</Text>
        </View>
        <View style={styles.ligne}>
            <Image source={require("../assets/telephone.png")} style={styles.icone} />
            <Text style={styles.texte}>829-852-9541</Text>
        </View>
      </View>
      <View style={styles.zone}>
      <View style={styles.ligne}>
            <Image source={require("../assets/marqueur.png")} style={styles.icone} />
            <View>
                <Text style={styles.texte}>1585 rue des pins</Text>
                <Text style={styles.texte}>Gatineau, QC</Text>
                <Text style={styles.texte}>J8S 9M7</Text>
            </View>
        </View>
      </View>
      
      <Button title="Site web" onPress={handleClick} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "#223240",
    padding: 30,
  },
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
  ligne:{
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    margin: 10,
  },
  nom: {
    fontSize: 45,
    color: "white",
  },
  texte: {
    color: "gray",
    fontSize: 21,
  },
  icone: {
    marginRight: 10,
    height: 20,
    width: 20,
    alignSelf: "center",
  },
};

export default ExerciceFiche1;
