import { StyleSheet } from 'react-native';
import { Searchbar } from "react-native-paper";
import React, { useState} from "react";

 import { Text, View } from '../components/Themed';

 export default function TabThreeScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  return (
    <View style= {{backgroundColor:"white" , flex:1}}>
      <View style={styles.Search}>
        <Searchbar
          placeholder="Kütüphanende Ara"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.altcerceve}>
        <Text style={styles.altyazi}>
        Favorilerinizi Bulun
        </Text>
        <Text numberOfLines={2} style={styles.aciklama}>
        Beğendiğiniz her şeyi arayabilir, takip edebilir veya oluşturabilirsiniz.
        </Text>
      </View>
     </View>
  );
}

 const styles = StyleSheet.create({
    aciklama:{
        marginTop:10,
        color:'grey',
        width:280,
        textAlign:'center',
    },
    altyazi:{
        fontSize:25,
        fontWeight:'600'
    },
    altcerceve:{
        marginTop:190,
        alignItems:'center',
        justifyContent:'center',
    },
  Search: {
    marginBottom:13,
    marginTop: 13,
    alignSelf: "center",
    width: "90%",
  },
});