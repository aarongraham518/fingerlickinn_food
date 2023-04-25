import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/colors";
export const ImageNameText = ({image, userNameText, userNameComment }) => {
  return (
   <>
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={image}
            />
        </View>
        <View style={styles.nameCommentContainer}>
            <Text style={styles.userNameText}>{userNameText}</Text>
            <Text style={styles.userNameComment}>{userNameComment}</Text>
        </View>
    </View>
    <View style={styles.bottomBorderContainer}>
        <View style={styles.bottomBorder}></View>
    </View>
   </>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderWidth: 2,
        // borderColor: 'black',
        paddingLeft: 30,
        // paddingRight: 20,
        marginTop: 20,
        // marginRight: 20
    },
    commentsMain: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 18
    },
    imageContainer:{
        // borderWidth: 2,
        // borderColor: 'black',
    },  
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.primaryPink
    },
    nameCommentContainer:{
        // borderWidth: 2,
        // borderColor: 'black',
        marginLeft: 20,
    },
    userNameText:{
        color: Colors.primaryBlue,
        fontWeight: 'bold',
        fontSize: 18,
    },
    userNameComment:{
        color: 'grey',
        fontWeight: '500',
        fontSize: 16,
        marginTop: 5,
        paddingRight: 60
    },
    bottomBorderContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
        marginRight: 20
    },
    bottomBorder:{
        width: '75%',
        borderWidth: 1,
        borderColor: '#e9e6e6',
        height: 2,
        textAlign: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
  });