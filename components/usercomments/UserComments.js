import { StyleSheet, Text, View, Image } from "react-native";
import { ImageNameText } from "./ImageNameText";

let dummyUserData = [
  {
    id: Math.random(),
    userNameText: "Allison Sandon",
    userNameComment:
      "Incredibly delicious tender steak! Be sure to order more.",
    image: require("../../assets/images/user1.png"),
  },
  {
    id: Math.random(),
    userNameText: "Chris Alldonny",
    userNameComment: "It gets no better than this!",
    image: require("../../assets/images/user2.png"),
  },
  {
    id: Math.random(),
    userNameText: "Melli Robinson",
    userNameComment: "Food that makes me smile!",
    image: require("../../assets/images/user4.png"),
  },
  {
    id: Math.random(),
    userNameText: "Udonis Mitchel",
    userNameComment: "Food for the soul!",
    image: require("../../assets/images/user3.png"),
  },
  
];
export const UserComments = () => {
  return (
    <>
      <View style={styles.commentsMainContainer}>
        <Text style={styles.commentsMain}>Comments (32)</Text>
      </View>
      {dummyUserData.map((data) => (
        <ImageNameText
          key={data.id}
          image={data.image}
          userNameText={data.userNameText}
          userNameComment={data.userNameComment}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
    commentsMainContainer:{
        paddingLeft: 30,
        marginTop: 20,
    },
  commentsMain: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 18,
  },
});
