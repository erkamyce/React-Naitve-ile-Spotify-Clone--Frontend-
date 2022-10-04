import {
  StyleSheet,
  AppRegistry,
  TouchableOpacity,
  Linking,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState, Component } from "react";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ScreenStackHeaderRightView } from "react-native-screens";

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <ScrollView>
      <View style={styles.Search}>
        <Searchbar
          placeholder="Sanatçılar, şarkılar veya podcast"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View>
        <Text style={styles.altbaslik}>En Çok Dinlediğin Türler</Text>
      </View>
      <View style={styles.altcerceve}>
        <View style={[styles.cerceve, styles.renk2]}>
          <Text style={styles.baslik}>Pop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://i.scdn.co/image/ab67706f00000003cc4c6f9066441e2212403cc1",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
        <View style={[styles.cerceve, styles.renk4]}>
          <Text style={styles.baslik}>Hip Hop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gjsmVJtQS2-twpsw0q2IrfoECYW4IMhznA&usqp=CAU",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
      </View>

      <View style={styles.altcerceve}>
        <View style={[styles.cerceve, styles.renk3]}>
          <Text style={styles.baslik}>Rock</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://i.scdn.co/image/ab67706f00000003fd6bff9e6d173b371e5865e2",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
        <View style={[styles.cerceve, styles.renk1]}>
          <Text style={styles.baslik}>Punk</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://external-preview.redd.it/zMjZ007xMcOY9bD9mrqkrokB_CCqOBE6ERL4JQq_CYM.jpg?auto=webp&s=b59c88984db1d2009f64fe6456b04b24f2f8b588",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
      </View>

      <View>
        <Text style={styles.altbaslik}>Hepsine Göz At</Text>
      </View>

      <View style={styles.altcerceve}>
        <View style={[styles.cerceve, styles.renk4]}>
          <Text style={styles.baslik}>Hip Hop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gjsmVJtQS2-twpsw0q2IrfoECYW4IMhznA&usqp=CAU",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
        <View style={[styles.cerceve, styles.renk2]}>
          <Text style={styles.baslik}>Pop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://i.scdn.co/image/ab67706f00000003cc4c6f9066441e2212403cc1",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
      </View>

      <View style={styles.altcerceve}>
        <View style={[styles.cerceve, styles.renk1]}>
          <Text style={styles.baslik}>Punk</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://external-preview.redd.it/zMjZ007xMcOY9bD9mrqkrokB_CCqOBE6ERL4JQq_CYM.jpg?auto=webp&s=b59c88984db1d2009f64fe6456b04b24f2f8b588",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
        <View style={[styles.cerceve, styles.renk3]}>
          <Text style={styles.baslik}>Rock</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://i.scdn.co/image/ab67706f00000003fd6bff9e6d173b371e5865e2",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
      </View>
      <View style={styles.altcerceve}>
        <View style={[styles.cerceve, styles.renk4]}>
          <Text style={styles.baslik}>Hip Hop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gjsmVJtQS2-twpsw0q2IrfoECYW4IMhznA&usqp=CAU",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
        <View style={[styles.cerceve, styles.renk2]}>
          <Text style={styles.baslik}>Pop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://i.scdn.co/image/ab67706f00000003cc4c6f9066441e2212403cc1",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
      </View>
      <View style={styles.altcerceve}>
        <View style={[styles.cerceve, styles.renk3]}>
          <Text style={styles.baslik}>Rock</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://i.scdn.co/image/ab67706f00000003fd6bff9e6d173b371e5865e2",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
        <View style={[styles.cerceve, styles.renk1]}>
          <Text style={styles.baslik}>Punk</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://external-preview.redd.it/zMjZ007xMcOY9bD9mrqkrokB_CCqOBE6ERL4JQq_CYM.jpg?auto=webp&s=b59c88984db1d2009f64fe6456b04b24f2f8b588",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
      </View>

      <View style={styles.altcerceve}>
        <View style={[styles.cerceve, styles.renk2]}>
          <Text style={styles.baslik}>Pop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://i.scdn.co/image/ab67706f00000003cc4c6f9066441e2212403cc1",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
        <View style={[styles.cerceve, styles.renk4]}>
          <Text style={styles.baslik}>Hip Hop</Text>
          <ScreenStackHeaderRightView>
            <Image
              style={styles.kucukfoto}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gjsmVJtQS2-twpsw0q2IrfoECYW4IMhznA&usqp=CAU",
              }}
            />
          </ScreenStackHeaderRightView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Search: {
    marginBottom:13,
    backgroundColor:"white",
    marginTop: 13,
    alignSelf: "center",
    width: "90%",
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
  renk1: {
    backgroundColor: "#9c3587",
  },
  renk2: {
    backgroundColor: "#039be5",
  },
  renk3: {
    backgroundColor: "red",
  },
  renk4: {
    backgroundColor: "orange",
  },
  cerceve: {
    width: "43%",
    marginBottom: 10,
    height: 91,
    flexDirection: "row",
    marginLeft: 13,
    margin: 4.5,
    // backgroundColor: "pink",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  altcerceve: {
    flexDirection: "row",
  },
  baslik: {
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 8,
    marginTop: 12,
  },
  altbaslik: {
    margin: 13,
    fontWeight: "800",
  },
  kucukfoto: {
    height: 91,
    width: 89,
    borderRadius: 5,
  },
});
