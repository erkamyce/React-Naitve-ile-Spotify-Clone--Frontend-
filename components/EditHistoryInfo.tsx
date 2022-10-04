import { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity,ScrollView,RefreshControl ,Image} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditHistoryInfo({ path }: { path: string }) {
  const [refreshing,setRefreshing]=useState(false)
    const _onRefresh = () => {
      setRefreshing(true)
      setTimeout(() => {
        setRefreshing(false)
      },2000);
    }
    return (
    
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
    flexDirection:'row',
    marginTop:10,
    marginLeft:15,
    width:290,
    height:67,
  },
  sanatciAltCercevesi:{
    marginLeft:15,
    width:110,
    height:150,
  }, 
  horizontalFoto :{
    width:67,
    height:67,
  },
  cerceve: {
    width:'46%',
    flexDirection:'row',
    margin:4.5,
    backgroundColor:'#2e2e2e',
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
    width:67,
    height:67,
    borderRadius:67/2,
  },
  baslik:{
    marginTop:35,
    marginBottom:18,
    margin:10,
    justifyContent:'center',
    color:'white',
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

})



