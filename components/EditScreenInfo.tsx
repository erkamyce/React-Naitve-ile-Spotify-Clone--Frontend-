import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <ScrollView>
      <Text style={styles.baslik}>Daha Eski</Text>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsETrejOxDbmrA9Oe90nNR8lAZa6AEUh5M3w&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            Diamonds
          </Text>
          <Text style={styles.aciklamayazisi}>Single: Rihanna</Text>
          <Text style={styles.aciklamayazisi}>4 Gün Önce</Text>
        </View>
      </View>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaBKx8eOz4_fqSIB9U42I_N6N9wVZI_lqnQ&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            Watch Yout Man(feat,Marshmello)
          </Text>
          <Text style={styles.aciklamayazisi}>
            Single: Rico Nasty, Marshmello
          </Text>
          <Text style={styles.aciklamayazisi}>6 Gün Önce</Text>
        </View>
      </View>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpmLujrl52ep-zAto-ZYp-4jLVxaNjVTRXw&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            Hapier (Slowed + Reverb)
          </Text>
          <Text style={styles.aciklamayazisi}>
            Single: Marshmello, Bastille
          </Text>
          <Text style={styles.aciklamayazisi}>6 Gün Önce</Text>
        </View>
      </View>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPsdnq9AvfgKYvWW-YCzavTEOlwoJu3Yg_g&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            Lutherian
          </Text>
          <Text style={styles.aciklamayazisi}>Single: Hugola</Text>
          <Text style={styles.aciklamayazisi}>7 Gün Önce</Text>
        </View>
      </View>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVg5-t9zj-uFnxfCnhlxUW8Osesyfb6AwK3A&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            SUBSTANCE
          </Text>
          <Text style={styles.aciklamayazisi}>Single: Demi Lavato</Text>
          <Text style={styles.aciklamayazisi}>8 Gün Önce</Text>
        </View>
      </View>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd74dAWw5S17cLWZPCHjofKJjkuUkKVDMi4A&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            Sevdim Seni Bir Kere
          </Text>
          <Text style={styles.aciklamayazisi}>
            Single: Cem Adrian, Hande Mehan
          </Text>
          <Text style={styles.aciklamayazisi}>9 Gün Önce</Text>
        </View>
      </View>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPqK-c6-8u_MhuT2QC9EfEBfRL0Et4n1mlQ&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            Sharks
          </Text>
          <Text style={styles.aciklamayazisi}>Single: Imagine Dragons</Text>
          <Text style={styles.aciklamayazisi}>10 Gün Önce</Text>
        </View>
      </View>
      <View style={styles.discerceve}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgG7WzSI90IveyDhLa_4j2anJJV0Igk8RnQ&usqp=CAU",
          }}
          style={styles.kucukfoto}
        />
        <View style={styles.altcerceve}>
          <Text numberOfLines={1} style={styles.altbaslik}>
            Numb
          </Text>
          <Text style={styles.aciklamayazisi}>Single: Marshmello, Khalid</Text>
          <Text style={styles.aciklamayazisi}>13 Gün Önce</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
  discerceve: {
    flexDirection: "row",
  },
  altcerceve: {
    width: 250,
    margintleft: 5,
  },
  baslik: {
    fontSize: 20,
    marginLeft: 15,
  },
  altbaslik: {
    fontSize: 16,
    marginTop: 15,
  },
  aciklamayazisi: {
    fontSize: 13,
    color: "gray",
  },
  kucukfoto: {
    height: 75,
    width: 75,
    margin: 10,
  },
});
