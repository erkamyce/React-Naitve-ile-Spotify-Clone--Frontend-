import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text, StyleSheet, Button, Alert, View } from "react-native";
import { IStackScreenProps } from "../components/library/IStackScreenProps";
import TabOneScreen from "../screens/TabOneScreen";
import { RootTabScreenProps } from "../types";

const ScanScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [permission, setPermission] = useState(true);
  const [scanner, setScanner] = useState(true);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const { status, granted } =
        await BarCodeScanner.requestPermissionsAsync();
      console.log(`Status: ${status}, Granted: ${granted}`);

      if (status === "granted") {
        console.log("Access granted");
        setPermission(true);
      } else {
        setPermission(false);
      }
    } catch (error) {
      console.error(error);
      setPermission(false);
    } finally {
      setLoading(false);
    }
  };
  if (permission && scanner == true) {
    return (
      <View>
        <BarCodeScanner
          style={[styles.container]}
          onBarCodeScanned={({ type, data }) => {
            try {
              console.log(type);
              console.log(data);
              Alert.alert(data);
              setScanner(false);
            } catch (error) {
              console.error("Unable to parse string: ", error);
            }
          }}
        >
          <View style={styles.iccerceve}>

          </View>

          <View style={styles.discerceve}>
                        <Text style={styles.yazsistili}>Kameranı Qr Koduna Doğru Tut</Text>
          </View>
        </BarCodeScanner>
      </View>
    );
  } else {
    return <TabOneScreen path1="/screen/TabOneScreen.tsx" />;
  }
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 15,
    backgroundColor: "white",
  },
  textError: {
    color: "red",
  },
  discerceve: {
    alignItems: "center",
    justifyContent: "center",
    width: "110%",
    height: "110%",
    opacity: 0.8,
    backgroundColor: "#1c1c1c",
    position: "absolute",
  },
  iccerceve: {
    width: 200,
    height: 300,
    borderWidth: 4,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.2,
    position: "absolute",
    top: 100,
  },
  yazsistili: {
    textAlign:'center',
    color:'white',
    position:'absolute',
    fontSize:20,
    bottom:250,
  },
});
