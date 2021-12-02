import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    FlatList,
    View,
    TextInput,
    ImageBackground, Image
} from 'react-native';
import styles from './styles';
import color from '../../Componets/assets/Theme/color';
import Ripple from 'react-native-material-ripple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import DashboardHeader from '../../Componets/DashboardHeader/DashboardHeader';
import Plus from 'react-native-vector-icons/Entypo';
import Images from '../../Componets/assets/Theme/Images';
import Data from '../../Componets/Data';
import RoomsData from '../../Componets/RoomsData';


const AddRoom = ({ navigation }) => {
    const [ischecked, setischecked] = useState(false)
    const [rname, setrname] = useState(null)


    const renderItem = ({ item }) => (
        <View style={{ ...styles.item}}>            
             <Ripple 
             onPress={() => { setischecked(item.id),setrname(item.title) }}
             style={{...styles.roomsitem,backgroundColor: ischecked == item.id ? color.yellow : color.white}}>
                 <Image style={{ height: "70%", width: "70%", resizeMode: "contain" }}
                    source={ischecked == item.id ? item.imageswt : item.images} /> 
            </Ripple>  
            <View style={{ height: "40%", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: ischecked == item.id ? color.yellow : color.white, fontWeight: "bold" }}>
                    {item.title}
                </Text> 
            </View>   
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={{ height: "15%", flexDirection: "row", }}>
                <View style={{ width: "20%", justifyContent: "center", paddingHorizontal: 15 }}>
                    <Ionicons name="chevron-back-outline" size={30} color={color.white}
                        onPress={() => { navigation.goBack() }}
                    />
                </View>
                <View style={{ width: "60%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: color.white }}>
                        Add Room
                    </Text>
                </View>
                <View style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
                    <Text
                     onPress={()=>{alert("Done")}}
                     style={{ fontSize: 16, fontWeight: "600", color: color.white }}>SAVE</Text>
                </View>
            </View>
            {/* ********* */} 

            <View style={{  height: "17%",paddingHorizontal:15,}}> 
               <Text style={{color:color.white}}>Enter Room's Name</Text>
                <View style={styles.containerInput}> 
                    <TextInput
                        style={styles.PhoneInput}
                        placeholder="Rooms Name" 
                        placeholderTextColor={color.tbgcolor}
                        value={rname}
                        onChangeText={(rname) => { setrname(rname) }}
                    />
                </View> 
            </View>
            {/* ********* */}
            <View style={{paddingHorizontal:20}}>
                <Text style={{color:color.tbgcolor}}>
                    Select room's icon
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.listdata}>
                    <FlatList
                        data={RoomsData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        numColumns={3}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AddRoom;
