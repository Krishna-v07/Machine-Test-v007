import React, { useState } from 'react';
import {
    SafeAreaView, View, StyleSheet, Text, StatusBar, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Button, Keyboard, TextInput, ScrollView,
    TouchableOpacity, Image, ImageBackground
} from 'react-native';
import styles from './styles';
import color from '../../Componets/assets/Theme/color';
import Ripple from 'react-native-material-ripple';


const Login = ({ navigation }) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState(""); 
    const image = { uri: "https://i.pinimg.com/564x/a0/f3/fc/a0f3fca48ecf97ab27a85bc90f577b9f.jpg" }; 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}  >
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}>
                    <View style={{ height: 200, paddingBottom: 10, alignItems: "center", justifyContent: "flex-end", }}>
                        <Text style={{ color: color.white, fontSize: 20, fontWeight: "bold" }}>
                            Smart Home
                        </Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={{ flex: 1 }} >
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={styles.inner}>
                                    <View style={styles.containerInput}>
                                        <TextInput
                                            style={styles.PhoneInput}
                                            placeholder="Email Address"
                                            keyboardType="email-address"
                                            placeholderTextColor={color.white}
                                            value={email}
                                            onChangeText={(email) => { setemail(email) }}
                                        />
                                    </View>

                                    <View style={styles.containerInput}> 
                                        <TextInput
                                            placeholderTextColor={color.white}
                                            style={styles.PhoneInput}
                                            placeholder="Password"
                                            secureTextEntry={true}
                                            value={password}
                                            onChangeText={(password) => { setpassword(password) }}
                                        />
                                    </View>
                                    <Ripple
                                        onPress={() => { navigation.replace("BottomNavitaon") }}
                                        style={styles.btnContainer}>
                                        <Text style={styles.Btntitle}>
                                            LOGIN
                                        </Text>
                                    </Ripple>
                                    <Text style={styles.forgotTitle}>Forgot Password</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Login;

