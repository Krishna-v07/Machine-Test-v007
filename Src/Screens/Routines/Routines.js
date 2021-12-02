import React, { useState } from 'react';
import {
    SafeAreaView, 
    StatusBar,
    StyleSheet,
    Text, 
    View,
    Image
} from 'react-native';
import styles from './styles';
import color from '../../Componets/assets/Theme/color'; 

const Routines = ({ navigation }) => { 
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" /> 
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:22,color:color.yellow}}>
                    Welcome to Routines
                </Text>
            </View> 
        </SafeAreaView>
    )
}
export default Routines;
