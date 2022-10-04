import { Button, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";

import { Text, View } from "../components/Themed";

export default function AddListScreen() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.cerceve}>
      <Text style={styles.baslik}>Oynatma Listeniz Ad Ekle</Text>
      <TextInput
        selectionColor={"grey"}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.tuscercevesi}>
          <Button
            onPress={() => Alert.alert("")}
            title="İptal"
            color="black"
          />
        </View>
        <View style={styles.tuscercevesi}>
          <Button
            onPress={() => Alert.alert("")}
            title="Atla"
            color="black"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tuscercevesi:{
    width:110,
    marginBottom:10,
    marginLeft:10,
  },
  cerceve: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  baslik: {
    fontSize: 20,
  },
  input: {
    color: "white",
    fontSize: 30,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    margin: 12,
    borderBottomColor: "lightgrey",
    textAlign: "center",
  },
});
