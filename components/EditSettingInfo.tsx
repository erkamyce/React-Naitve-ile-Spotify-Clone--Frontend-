import * as WebBrowser from 'expo-web-browser';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity,Switch, ScrollView } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function EditSettingInfo({ path }: { path: string }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  
  return (
    <ScrollView>
      <View>
        <Text style = {styles.baslik}>Data Saver</Text>
        <View style = {styles.ayarcercevesi}>
          <View style = {styles.ayaraltcercevesi}>
          <Text style= {styles.altbaslik}>Ses Kalitesi</Text>
          <Text style={styles.yazi}>Ses kalitesini düşük olarak ayarlar.</Text>  
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "darkgreen" }}
        thumbColor={isEnabled ? "lightgreen" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}/>
        </View>
      </View>
      <View>
      <Text style = {styles.baslik}>Video Podcast'ler</Text>
        <View style = {styles.ayarcercevesi}>
          <View style = {styles.ayaraltcercevesi}>
          <Text style= {styles.altbaslik}>Yalnızca sesi indir</Text>
          <Text style={styles.yazi}>Video podcast'leri yalnızca ses olarak kaydet.</Text>  
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "darkgreen" }}
        thumbColor={isEnabled1 ? "lightgreen" : "#f4f3f4"}
        onValueChange={toggleSwitch1}
        value={isEnabled1}/>
        </View>
        <View style = {styles.ayarcercevesi}>
          <View style = {styles.ayaraltcercevesi}>
          <Text style= {styles.altbaslik}>Yalnızca sesi dinle</Text>
          <Text style={styles.yazi}>Wi-fi'ye bağlı olmadığında video podcast'leri yalnızca ses olarak çal.</Text>  
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "darkgreen" }}
        thumbColor={isEnabled2 ? "lightgreen" : "#f4f3f4"}
        onValueChange={toggleSwitch2}
        value={isEnabled2}/>
        </View>
      </View>
      <View>
        <Text style = {styles.baslik}>Çal</Text>
        <View style = {styles.ayarcercevesi}>
          <View style = {styles.ayaraltcercevesi}>
          <Text style= {styles.altbaslik}>Çevrimdışı modu</Text>
          <Text style={styles.yazi}>Çevrim dışı olduğunda yalnızca indiridğin müzikleri dinleyebilirsin.</Text>  
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "darkgreen" }}
        thumbColor={isEnabled3 ? "lightgreen" : "#f4f3f4"}
        onValueChange={toggleSwitch3}
        value={isEnabled3}/>
        </View>
        <View style = {styles.ayarcercevesi}>
          <View style = {styles.ayaraltcercevesi}>
          <Text style= {styles.altbaslik}>Aralıksız</Text>
          <Text style={styles.yazi}>Aralıksız çalma izin ver.</Text>  
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "darkgreen" }}
        thumbColor={isEnabled4 ? "lightgreen" : "#f4f3f4"}
        onValueChange={toggleSwitch4}
        value={isEnabled4}/>
        </View>
        <View style = {styles.ayarcercevesi}>
          <View style = {styles.ayaraltcercevesi}>
          <Text style= {styles.altbaslik}>Yalnızca sesi dinle</Text>
          <Text style={styles.yazi}>Wi-fi'ye bağlı olmadığında video podcast'leri yalnızca ses olarak çal.</Text>  
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "darkgreen" }}
        thumbColor={isEnabled2 ? "lightgreen" : "#f4f3f4"}
        onValueChange={toggleSwitch2}
        value={isEnabled2}/>
        </View>
        <View>
        <Text style = {styles.baslik}>Data Saver</Text>
        <View style = {styles.ayarcercevesi}>
          <View style = {styles.ayaraltcercevesi}>
          <Text style= {styles.altbaslik}>Ses Kalitesi</Text>
          <Text style={styles.yazi}>Ses kalitesini düşük olarak ayarlar.</Text>  
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "darkgreen" }}
        thumbColor={isEnabled ? "lightgreen" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}/>
        </View>
      </View>
      </View>
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ayarcercevesi:{
    marginLeft:15,
    marginBottom:15,
    flexDirection:'row'
  },
  ayaraltcercevesi:{
    height:50,
    width:280,
  },
  yazi:{
    color:'grey',
  },
  altbaslik:{
    fontSize:16,
  },
  baslik:{
    marginLeft:15,
    marginBottom:15,
    fontSize:15,
    fontWeight:'800',
    marginTop:20,
  },
});