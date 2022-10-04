import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Button, StyleSheet, Image, RefreshControl } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ScrollView } from "react-native";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { Pressable } from "react-native";

export default function TabThreeScreen() {
  const [onPress] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View>
    <View>
      <ScrollView horizontal={true}>
        <View style={styles.listcercevesi}>
          <Text style={styles.searchlist}>Çalma Listeleri</Text>
        </View>
        <View style={styles.listcercevesi}>
          <Text style={styles.searchlist}>Sanatçılar</Text>
        </View>
        <View style={styles.listcercevesi}>
          <Text style={styles.searchlist}>Albüm</Text>
        </View>
        <View style={styles.listcercevesi}>
          <Text style={styles.searchlist}>İndirilenler</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5
            name="retweet"
            size={20}
            color="white"
            style={styles.buttonstil}
          />
          <Text style={styles.ayaryazisi}>Yakınlarda Çalınanlar</Text>
        </View>
        <Pressable
          onPress={() => onPress}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome5
            name="list"
            size={20}
            color="white"
            style={[styles.buttonstil1, onPress == true]}
          />
        </Pressable>
      </View>
    </View>
    <View>
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={_onRefresh}
          />
        }
      >
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-AYHiReF9MhhM51EAxMkzhLb0xC_zPqScw&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Daily Mix 1</Text>
          <Text numberOfLines={1} style= {styles.altyazi}>Playlist 1 Gün Önce Güncellendi</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4zzwgtJ-KnRvzVFu_eOcAebb5irkf6um-g&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Daily Mix 2</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Playlist 1 Gün Önce Güncellendi</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5IyXTgyLWD7_KRHJ73EGQSOMoyk_9yToOg&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Derya Uluğ</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Sanatçı</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrHlFgt_xDZaqaM_P0vlLuGXSoAAkZdIkWA&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Oxygen</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Müzik : Winona Oak</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_SFoaPmn6-TuGiBu2GO-xSnwgG3MxiB6Rg&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Break My Broken Heart</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Müzik : Winona Oak</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-AYHiReF9MhhM51EAxMkzhLb0xC_zPqScw&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Daily Mix 1</Text>
          <Text numberOfLines={1} style= {styles.altyazi}>Playlist 1 Gün Önce Güncellendi</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4zzwgtJ-KnRvzVFu_eOcAebb5irkf6um-g&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Daily Mix 2</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Playlist 1 Gün Önce Güncellendi</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5IyXTgyLWD7_KRHJ73EGQSOMoyk_9yToOg&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Derya Uluğ</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Sanatçı</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrHlFgt_xDZaqaM_P0vlLuGXSoAAkZdIkWA&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Oxygen</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Müzik : Winona Oak</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_SFoaPmn6-TuGiBu2GO-xSnwgG3MxiB6Rg&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Break My Broken Heart</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Müzik : Winona Oak</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-AYHiReF9MhhM51EAxMkzhLb0xC_zPqScw&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Daily Mix 1</Text>
          <Text numberOfLines={1} style= {styles.altyazi}>Playlist 1 Gün Önce Güncellendi</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4zzwgtJ-KnRvzVFu_eOcAebb5irkf6um-g&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Daily Mix 2</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Playlist 1 Gün Önce Güncellendi</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5IyXTgyLWD7_KRHJ73EGQSOMoyk_9yToOg&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Derya Uluğ</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Sanatçı</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrHlFgt_xDZaqaM_P0vlLuGXSoAAkZdIkWA&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Oxygen</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Müzik : Winona Oak</Text> 
          </View>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_SFoaPmn6-TuGiBu2GO-xSnwgG3MxiB6Rg&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <View style ={{marginLeft:15}}>
           <Text numberOfLines={1}>Break My Broken Heart</Text>
           <Text numberOfLines={1} style= {styles.altyazi}>Müzik : Winona Oak</Text> 
          </View>
        </View>
        

      </ScrollView>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonstil1: {
    marginTop: 25,
    marginLeft: 130,
  },
  buttonstil: {
    marginTop: 25,
    marginLeft: 10,
  },
  ayaryazisi: {
    marginTop: 25,
    marginLeft: 30,
  },
  listcercevesi: {
    marginLeft: 5,
    marginRight: 5,
    minwidth: 80,
    maxWidth: 150,
    height: 35,
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "gray",
    borderTopLeftRadius: 35 / 2,
    borderTopRightRadius: 35 / 2,
    borderBottomLeftRadius: 35 / 2,
    borderBottomRightRadius: 35 / 2,
  },
  searchlist: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
  yuvarlakFoto: {
    width: 67,
    height: 67,
    borderRadius: 67 / 2,
  },
  altcerceve: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    width: 290,
    height: 67,
  },
  horizontalFoto: {
    width: 67,
    height: 67,
  },
  altyazi: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
});
