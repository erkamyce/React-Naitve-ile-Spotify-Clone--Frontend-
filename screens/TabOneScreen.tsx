import { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet ,Image,RefreshControl,ScrollView,} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import EditHistoryInfo from '../components/EditHistoryInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ path1 }: { path1: string },{ navigation }: RootTabScreenProps<'TabOne'> ) {
    const [refreshing,setRefreshing]=useState(false)
    const _onRefresh = () => {
      setRefreshing(true)
      setTimeout(() => {
        setRefreshing(false)
      },2000);
    }
  return (
    <View >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={_onRefresh}
          />
        }
      >
        <View style = {styles.discerceve}>
        <View style = {styles.cerceve} >
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKb6aGds5t180L05qW5i7rlZ4uIQnkanx5Xg&usqp=CAU"}} style ={styles.foto}/>
          <Text numberOfLines={1} style= {styles.yazi}>Dua Lipa</Text>
        </View>
        <View style = {styles.cerceve} >
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSV3efmWT4oQvxWP9Q0qhGrkfikMyfHeshA&usqp=CAU"}} style ={styles.foto}/>
          <Text numberOfLines={1} style= {styles.yazi}>Eminem</Text>
        </View>
    </View>
    <View style = {styles.discerceve}>
      <View style = {styles.cerceve} >
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0uUdU-6TT18XcweV8nVAQGv7WojI2WuKuA&usqp=CAU"}} style ={styles.foto}/>
        <Text numberOfLines={1} style= {styles.yazi}>50 Cent</Text>
      </View>
      <View style = {styles.cerceve} >
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUjPUg5JtCvGRI_wj7QVFHlBb1BXkaMkZOg&usqp=CAU"}} style ={styles.foto}/>
        <Text numberOfLines={1} style= {styles.yazi}>Ava Max</Text>
      </View>
    </View>
      <View  style = {styles.discerceve}>
        <View style = {styles.cerceve} >
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikP5ZPBsKJlH_8DUlBrQEzRhcgZqWQ9FuOw&usqp=CAU"}} style ={styles.foto}/>
          <Text numberOfLines={1} style= {styles.yazi}>Winona Oak</Text>
        </View>
        <View style = {styles.cerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEbl4_CHUY3rhCmrzZz5Z3veW45z8lBgDbQ&usqp=CAU"}} style ={styles.foto}/>
          <Text numberOfLines={1} style= {styles.yazi}>Marshmallow </Text> 
        </View>
      </View>
      <View >
        <Text  style = {styles.baslik} >Benzersiz Seçimlerin</Text>
      </View>
      <ScrollView horizontal={true} >
      <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-AYHiReF9MhhM51EAxMkzhLb0xC_zPqScw&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Emircan İğrek, Sezen Aksu, Tuğkan ve daha fazlası</Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4zzwgtJ-KnRvzVFu_eOcAebb5irkf6um-g&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Zeynep Bastık, Burcu Güneş, Deryağ Uluğ ve daha fazlası</Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioPG2BbENDSiXaI4ek3YI_r0CtY6fqhJIZg&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Little Mix, Ariana Grande, Winona Oak ve daha fazlası </Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkKCZUFpYg37n7tcww1OC2a8-Fgka9nP49Q&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Emircan İğrek, Sezen Aksu, Tuğkan ve daha fazlası</Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yRLSLAKuYRtXU3-NJ0HHMD9DzsCxxBZImg&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Little Mix, Ariana Grande, Winona Oak ve daha fazlası</Text>
        </View>
      </ScrollView>
      <View >
        <Text  style = {styles.baslik} >Sanatçılar</Text>
      </View>
      <ScrollView horizontal={true} >
      <View style ={styles.sanatciAltCercevesi}>
          <View style ={styles.satancicercevesi}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE_OKZWKNR4MZ7BGBZHC16pnk_zbpxDLVAg&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <Text numberOfLines={2} style= {styles.sanatciadi}>Demi Lavato</Text>
          </View>
      </View>
      <View style ={styles.sanatciAltCercevesi}>
          <View style ={styles.satancicercevesi}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5MTREavKZB6e14DVq9_amLfqARyiHRUnZQ&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <Text numberOfLines={2} style= {styles.sanatciadi}>Eminem</Text>
          </View>
      </View>
      <View style ={styles.sanatciAltCercevesi}>
          <View style ={styles.satancicercevesi}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5IyXTgyLWD7_KRHJ73EGQSOMoyk_9yToOg&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <Text numberOfLines={2} style= {styles.sanatciadi}>Derya Uluğ</Text>
          </View>
      </View>
      <View style ={styles.sanatciAltCercevesi}>
          <View style ={styles.satancicercevesi}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2wKFgllmvXXrYEXrMzq35-0y23trvWYUeQ&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <Text numberOfLines={2} style= {styles.sanatciadi}>Winona Oak</Text>
          </View>
      </View>
      <View style ={styles.sanatciAltCercevesi}>
          <View style ={styles.satancicercevesi}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezqVevZDe5ka5ThCpTFlskNTzjEbFW20obQ&usqp=CAU"}} style ={styles.yuvarlakFoto}/>
          <Text numberOfLines={2} style= {styles.sanatciadi}>Zeynep Bastik</Text>
          </View>
      </View>
      </ScrollView>
      <View >
        <Text  style = {styles.baslik} >Senin İçin En İyisi</Text>
      </View>
      <ScrollView horizontal={true} >
      <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-AYHiReF9MhhM51EAxMkzhLb0xC_zPqScw&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Emircan İğrek, Sezen Aksu, Tuğkan ve daha fazlası</Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4zzwgtJ-KnRvzVFu_eOcAebb5irkf6um-g&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Zeynep Bastık, Burcu Güneş, Deryağ Uluğ ve daha fazlası</Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioPG2BbENDSiXaI4ek3YI_r0CtY6fqhJIZg&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Little Mix, Ariana Grande, Winona Oak ve daha fazlası </Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkKCZUFpYg37n7tcww1OC2a8-Fgka9nP49Q&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Emircan İğrek, Sezen Aksu, Tuğkan ve daha fazlası</Text>
        </View>
        <View style ={styles.altcerceve}>
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yRLSLAKuYRtXU3-NJ0HHMD9DzsCxxBZImg&usqp=CAU"}} style ={styles.horizontalFoto}/>
          <Text numberOfLines={2} style= {styles.altyazi}>Little Mix, Ariana Grande, Winona Oak ve daha fazlası</Text>
        </View>
      </ScrollView> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  discerceve:{
    flexDirection:'row',
  },
  satancicercevesi:{
    alignItems:'center',
  },
  sanatciadi:{
    marginTop:8,
    fontWeight:'600',
    fontSize:15,
    justifyContent:'center',
    alignItems: 'center',
  },
  altcerceve: {
    marginLeft:15,
    width:150,
    height:190,
  },
  sanatciAltCercevesi:{
    marginLeft:15,
    width:110,
    height:150,
  }, 
  horizontalFoto :{
    borderWidth:0.3,
    borderColor:'black',
    width:146,
    height:146,
  },
  cerceve: {
    borderWidth:0.3,
    borderColor:'black',
    width:'46%',
    flexDirection:'row',
    margin:4.5,
    backgroundColor:'darkgrey',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  foto : {
    width:53,
    height:53,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
 
  yuvarlakFoto :{
    borderWidth:0.3,
    borderColor:'black',
    width:110,
    height:110,
    borderRadius:110/2,
  },
  baslik:{
    marginTop:35,
    marginBottom:18,
    margin:10,
    justifyContent:'center',
    color:'black',
    fontSize:20,
    fontWeight:'700'
  },
  scrollView: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yazi: {
    margin:15,
    justifyContent:'center',
    alignItems: 'center',
  },
  altyazi: {
    marginTop:10,
    fontSize:14,
    color:'gray'
  },
  iccerceve:{
    backgroundColor:'grey',
  }

});
