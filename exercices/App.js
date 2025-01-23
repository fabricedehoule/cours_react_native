import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ExerciceFiche1 from './exercice-fiche-1/ExerciceFiche1';
import ExerciceFiche2 from './exercice-fiche-2/ExerciceFiche2';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ExerciceFiche2 />
      </ScrollView>
      {/* <ExerciceFiche1 /> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223240',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
