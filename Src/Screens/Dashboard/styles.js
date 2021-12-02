import {StyleSheet} from 'react-native';
import color from '../../Componets/assets/Theme/color';
export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.containerbg,
    },
    item: {
        backgroundColor: color.white, 
        height:150,
         width:"45%",
        padding: 10,
        borderRadius:10,
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
      }
})