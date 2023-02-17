import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../themes/Color'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.bg,
    },
    bg: {
        height: 0.6 * height,
        width: width,
    },
    top_container: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent:'space-between',
        marginHorizontal: 16
    },
    total_money_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
    },
    text_account: {
        fontSize: 12,
        color: Color.gray_text
    },
    total_money: {
        fontSize: 36,
        color: Color.white,
        fontWeight: 'bold'
    },
    cent: {
        fontSize: 24,
        color: Color.white,
        fontWeight: 'bold'
    },
    dropdown: {
        marginLeft: 5
    },
    status_price:{
        flexDirection:'row',
        alignItems:'center'
    },
    text_status_price:{
        color: Color.green,
        marginLeft:3
    },
    flag_container:{
        marginTop:10
    },
    flag:{
        height:44,
        width:44
    },
    action_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:16,
        borderRadius:18,
        backgroundColor: Color.gray_green,
        marginHorizontal:16,
        marginTop:25
    },
    add_money:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: Color.blue,
        borderRadius:8,
        paddingHorizontal:16,
        height:38
    },
    text_add_money:{
        fontSize:14,
        color: Color.white,
        marginLeft:5
    },
    with_draw:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: Color.blue_20,
        borderRadius:8,
        paddingHorizontal:16,
        height:38
    },
    text_with_draw:{
        fontSize:14,
        color: Color.blue_text,
        marginLeft:5
    },
    more_horizontal:{
        backgroundColor: Color.blue_20,
        height:38,
        justifyContent:'center',
        paddingHorizontal:16,
        borderRadius:8
    },
    content_container:{
        marginHorizontal:16,
    },
    share_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:16, 
        marginTop:20
    },
    share:{
        fontSize:16,
        color: Color.gray_text
    },
    chart:{
        borderRadius:8,
        backgroundColor: Color.gray_green,
        padding:12
    },
    line:{
        width:width,
        height:1,
        backgroundColor: Color.line_color,
    },
    item_container:{
        justifyContent:'center',
        height:78
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    left_item:{
        flexDirection:'row'
    },
    avatar:{
        height:44,
        width:44
    },
    left_item_content:{
        marginLeft:10,
    },
    name:{
        fontSize:16,
        color: Color.white
    },
    pcs:{
        fontSize:14,
        color: Color.gray_text,
        marginTop:5
    },
    text_price:{
        fontSize:18,
        color: Color.white,
        alignSelf:'flex-end',
        height:34
    },
    price_change_container:{
        flexDirection:"row",
        alignItems:'center',
    },
    price_change:{
        fontSize:12,
        marginLeft:3
    },
    right_item:{
        justifyContent:'flex-end',
    },
    right_item_2:{
        
    },
    text_price_2:{
        alignSelf:'flex-end',
        marginTop:-5,
        fontSize:14
    }
})