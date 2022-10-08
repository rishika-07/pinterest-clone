
import { StyleSheet ,Image ,Text, View ,Pressable} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import {useState , useEffect } from "react";






const Pin = (props) => {
const {image, title} = props;

const [ratio, setRatio] =useState(1);

 const onLike =()=>{};

 

 useEffect(()=>{
  if(image){
  Image.getSize(image,(width,height)=>setRatio(width/height));
 }}
 ,[image]);

    return(
        
      <view style={styles.pin}>
        <View>
        <Image source={{uri: image,}}style={[styles.image,{aspectRatio: ratio }]}/>

         <Pressable onPress={onLike} style={styles.heartBtn}>
         <EvilIcons name="heart" size={24} color="black" />
         </Pressable>
         </View>
       
      
      
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
       </view>
   
    );
}; 

const styles = StyleSheet.create({
    
    
    pin:{
      width:"100%",
      padding :4,
     },
     title: {
      lineHeight:22,
       fontSize: 16,
       fontWeight: '600',
       color:"#181818",
     },
     image:{
      
       width:"100%",
       borderRadius: 15,
     },
     heartBtn: {
      backgroundColor: "#D3CFD4",
      position: 'absolute',
      right:10,
      bottom:10,
      padding:5,
      borderRadius:50,
     }
  });
export default Pin;