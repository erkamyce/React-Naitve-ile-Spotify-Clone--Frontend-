
import { StatusBar } from 'expo-status-bar';
import EditSettingInfo from '../components/EditSettingInfo';
import { Text, View } from '../components/Themed';
import { Platform, StyleSheet ,Image,Switch, Pressable, ScrollView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';




export default function SettingScreen() {
  const navigation =useNavigation()
  return (
      <View >
        <Pressable onPress={() => navigation.navigate("Users")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
          <View style={styles.kapakalani}>
        <Image source={{uri:"https://lh3.googleusercontent.com/ogw/AOh-ky3J1h_0mN2b-nQiAqR57_6pEdRimIYoRNJTcjrk=s32-c-mo"}} style ={styles.yuvarlakFoto}>
        </Image>
        <View style = {styles.profilalani}>
          <Text numberOfLines={1} style={styles.kapakbasligi}>Muhammed Erkam Yüce</Text>
          <Text style={styles.profil}>Profili Görüntüle</Text>
        </View>
        </View>
        </Pressable>
        
        <ScrollView>
        <EditSettingInfo path="/screens/SettingScreen.tsx" />
        </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  kapakalani:{
    margin:10,
    marginBottom:20,
    flexDirection:'row',
  },
  kapakbasligi:{
    fontSize:25,
    marginLeft:15,
  },
  profilalani:{
    height:50,
    width:260,
    
  },
  profil:{
    marginLeft:16,
    color:'grey',

  },
  yuvarlakFoto :{
    width:56,
    height:56,
    borderRadius:56/2,
  }, 
});