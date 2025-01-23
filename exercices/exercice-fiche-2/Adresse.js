import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const Adresse = () => {
  const [visible, setVisible] = useState(true)
  return (
    <View style={styles.composant}>
          <View style={styles.titre}>
            <Text style={styles.texteTitre}>Adresse</Text>
            <Pressable onPress={() => setVisible(!visible)}>
              <Text style={styles.textePressable}>{visible ? "Cacher" : "Afficher"}</Text>
            </Pressable>
          </View>
          {visible && (
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
          )}
        </View>
    
  )
}

export default Adresse

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
  ligne:{
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    margin: 10,
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
})