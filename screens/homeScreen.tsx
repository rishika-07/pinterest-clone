import { StyleSheet ,Image ,FlatList, ScrollView} from 'react-native';


import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Pin from "../components/Pin";
import pins from '../assets/data/pins';

export default function homeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
    <View style={styles.container}>

    <View style={{ backgroundColor: "#94ffa955", flex: 1}}>
    

    {pins.filter((item, index)=>index % 2===0).map((pin) => <Pin pin={pin}/> )}
    </View>
    <View style={{ backgroundColor: "#cd94ff55", flex: 1}}>
    {pins.filter((item, index)=>index % 2=== 1).map((pin) => <Pin pin={pin}/> )}
    </View>
    
   
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffffff",
    flexDirection: "row",
    
    padding: 20,
  },
  
  
});
