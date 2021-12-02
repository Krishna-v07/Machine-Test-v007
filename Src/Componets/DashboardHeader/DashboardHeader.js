import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground
} from 'react-native';
import color from '../assets/Theme/color';
import Ripple from 'react-native-material-ripple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

const DashboardHeader = (props) => { 
    return (
        <View style={{ height: "15%", flexDirection: "row" }}>
            <View style={{ width: "80%", justifyContent: "flex-end", paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: color.white }}>
                    {props.HomeName}</Text>
                <Text>
                    <Ionicons name="location-sharp" size={12} color={color.white} />
                    <Text style={{ fontSize: 12, fontWeight: "bold", color: "#999999" }}>
                        {props.location}
                    </Text>
                </Text>
            </View>
            <View style={{ width: "20%", justifyContent: "flex-end", alignItems: "center" }}>
                <Avatar
                    rounded
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="small" />
                <Badge
                    status="error"
                    containerStyle={{ position: 'relative', top: -35, right: -10 }}
                />
            </View>
        </View>
    )
}

export default DashboardHeader
