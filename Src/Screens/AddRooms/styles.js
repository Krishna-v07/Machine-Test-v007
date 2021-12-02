import {StyleSheet} from 'react-native';
import color from '../../Componets/assets/Theme/color';
export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.containerbg,
    },
    item: { 
        height:130,
         width:"28%",
        padding: 10, 
        marginVertical: 8,
        marginHorizontal:10,
        flexDirection:"column",
           
      },
      title: {
        fontSize: 32,
      },
      listdata:{
        justifyContent: "center", 
        alignItems: "center" ,marginHorizontal:12,paddingTop:10,paddingBottom:20
      },
      containerInput: {
        flexDirection: "row",
        paddingHorizontal: 10, 
        borderColor: color.tbgcolor,
        borderRadius:7,
        alignItems: "center",
        borderWidth: 0.5,
        marginTop: 10,
    },
    PhoneInput: {
      flex: 1,
      marginLeft: 5,
      height: 45,
      color:color.white
  },
  roomsitem:{
    height: "80%", padding: 5,backgroundColor:"red",borderRadius:100,alignItems:"center",justifyContent:"center"
  }
})