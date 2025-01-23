import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const Coordonnees = () => {
  const [visible, setVisible] = useState(true)
  return (
    <View style={styles.composant}>
      <View style={styles.titre}>
        <Text style={styles.texteTitre}>Coordonnées</Text>
        <Pressable onPress={() => setVisible(!visible)}>
          <Text style={styles.textePressable}>{visible ? "Cacher" : "Afficher"}</Text>
        </Pressable>
      </View>
      {visible && (
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
      )}
    </View>
    
  )
}

export default Coordonnees

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