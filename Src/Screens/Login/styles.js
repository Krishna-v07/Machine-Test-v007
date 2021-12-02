import {StyleSheet} from 'react-native';
import color from '../../Componets/assets/Theme/color';
export default styles=StyleSheet.create({
    containerInput: {
        flexDirection: "row", 
        borderColor: color.white,
        alignItems: "center",
        borderBottomWidth: 1.5,
        marginTop: 30,
    },
    Opendialogview: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center", 
    },
    PhoneInput: {
        flex: 1,
        marginLeft: 5,
        height: 50,
        color:color.white, 
    },
      
    inner: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        flex: 1,
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: color.white,
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        marginTop: 100, padding: 12, alignItems: "center",
        backgroundColor: color.yellow, borderRadius: 10
    },
    Btntitle:{
        fontSize: 20, fontWeight: "bold", color: color.white
    },
    forgotTitle:{
        marginTop: 20, fontSize: 15,color:color.white 
    }
})