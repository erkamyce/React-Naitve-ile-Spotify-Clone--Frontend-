import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function InnovationScreen() {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Yenilikler</Text>
      <EditScreenInfo path="/screens/InnovationScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    marginBottom:38,
    marginTop:4,
    marginLeft:10,
    fontSize: 35,
    fontWeight:'600',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
