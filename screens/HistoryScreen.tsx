import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditHistoryInfo from "../components/EditHistoryInfo";
import { Text, View } from "../components/Themed";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dün</Text>
      <EditHistoryInfo path="/screens/HistoryScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "600",
  },
});
