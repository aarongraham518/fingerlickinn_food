import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

export const CartItems = ({itemNameText, itemCategoryText, itemPriceText, itemImage}) => {
  return (
    <View style={styles.container}>
      {/**Image container */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={itemImage}/>
      </View>

      {/**Name, category, price container */}
      <View style={styles.nameCatPriceContainer}>
        {/**Name, category container */}
        <View>
          <Text style={styles.itemNameText}>{itemNameText}</Text>
          <Text style={styles.itemCategoryText}>{itemCategoryText}</Text>
        </View>
        {/**price, buttons container */}
        <View style={styles.priceButtonsContainer}>
          <Text style={styles.itemPriceText}>${itemPriceText.toFixed(2)}</Text>
          {/**buttons container */}
          <View style={styles.pressButtonsContainer}>
            <Pressable style={styles.pressButtonContainerMinus}>
              <Ionicons name="ios-remove" color={"white"} size={28} />
            </Pressable>
            <Pressable style={styles.pressButtonContainerAdd}>
              <Ionicons name="md-add" color={"white"} size={28} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    height: 110,
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.32,
    overflow: 'hidden'
  },
  image: {
    width: 'auto',
    height: 110,
    
  },
  nameCatPriceContainer: {
    // borderWidth: 1,
    // borderColor: "black",
    flex: 0.68,
    backgroundColor: Colors.white,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 8,
    // marginBottom: 20
  },
  itemNameText: {
    color: Colors.darkGrey,
    fontWeight: "bold",
    fontSize: 16,
  },
  itemCategoryText: {
    color: Colors.mediumGrey,
    fontWeight: "500",
    fontSize: 14,
    marginTop: 3,
  },
  priceButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "black",
  },
  itemPriceText: {
    color: Colors.primaryBlue,
    fontWeight: "500",
    fontSize: 18,
    marginTop: 14,
  },
  pressButtonsContainer:{
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 5,
    paddingBottom: 5
  },
  pressButtonContainerMinus: {
    backgroundColor: Colors.primaryBlue,
    borderColor: Colors.lightGrey,
    borderRightWidth: 1,
    height: 38,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  pressButtonContainerAdd: {
    backgroundColor: Colors.primaryBlue,
    // borderColor: 'black',
    // borderWidth: 1,
    height: 38,
    width: 38, 
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});