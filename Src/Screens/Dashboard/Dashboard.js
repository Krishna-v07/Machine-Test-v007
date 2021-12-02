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

const Dashboard = ({navigation}) => {
    const [ischecked, setischecked] = useState(false) 
 

    const renderItem = ({ item }) => (
        <Ripple style={{ ...styles.item, backgroundColor: ischecked == item.id ? color.yellow : color.white }}
            onPress={() => { setischecked(item.id) }}>
            <View style={{ height: "60%", padding: 5 }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "contain" }}
                    source={ischecked == item.id ? item.imageswt : item.images} />
            </View>
            <View style={{ height: "40%", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: ischecked == item.id ? color.white : color.gray, fontWeight: "bold" }}>
                    {item.title}
                </Text>
                <Text>
                    {item.subtitle}
                </Text>
            </View>
        </Ripple>
    );


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <DashboardHeader
                location="2715 Ash Dr.San Jose, Dakota 83475"
                HomeName="Your Home"
            />
            {/* ********* */}
            <View style={{ flexDirection: "row", height: "10%" }}>
                <View style={{ width: "50%", justifyContent: "center", paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: color.white }}>
                        ROOMS
                    </Text>
                </View>
                <View style={{ width: "50%", justifyContent: "center", alignItems: "flex-end", paddingHorizontal: 20 }}>
                    <Plus name="circle-with-plus" size={30} color={color.yellow}
                        onPress={() => { navigation.navigate("AddRoom") }}
                    />
                </View>
            </View>
            {/* ********* */}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.listdata}>
                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        numColumns={2}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Dashboard;
