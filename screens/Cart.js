import { Text, View, StyleSheet, SafeAreaView } from "react-native";

import {useContext} from "react";
import { CartItems } from "../components/cartItems/CartItems";
import Colors from "../constants/colors";
import { CartContext } from "../store/context/cart-context";

let dummy_data = [
  {
    id: Math.random(),
    itemNameText: "Chicken nuggets",
    itemCategoryText: "Entree",
    itemPriceText: 8.25,
    itemImage: require("../assets/images/nuggets.png"),
  },
  {
    id: Math.random(),
    itemNameText: "Ribeye Steak",
    itemCategoryText: "Entree",
    itemPriceText: 12.4,
    itemImage: require("../assets/images/ribeye1.jpg"),
  },
  {
    id: Math.random(),
    itemNameText: "Wood Grills",
    itemCategoryText: "Entree",
    itemPriceText: 15.0,
    itemImage: require("../assets/images/woodgrills.jpeg"),
  },
  {
    id: Math.random(),
    itemNameText: "Banging Saute",
    itemCategoryText: "Entree",
    itemPriceText: 25.99,
    itemImage: require("../assets/images/saute.jpg"),
  },
  {
    id: Math.random(),
    itemNameText: "Yummy Crunch",
    itemCategoryText: "Entree",
    itemPriceText: 35.99,
    itemImage: require("../assets/images/yummy.jpg"),
  },
];
export const Cart = ({route, navigation}) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items, 'NEW DATA AVAILABLE IN THE CART!!!!!!');

  const dataForCart = route.params.itemDetails;
  // console.log(dataForCart[0], 'info for cart................');

  return (
    <View style={styles.container}>
      <View style={styles.cartItemsContainer}>
        {cartCtx.items.map((data) => (
     <CartItems
            key={data.id}
            itemImage={data.image}
            itemNameText={data.categoryName}
            itemCategoryText={data.description}
            itemPriceText={data.price}
          />
        ))}
      </View>

      <View style={styles.buyPriceButtonContainer}>
        <Text style={styles.buyText}>BUY</Text>
        <Text style={styles.buyPrice}>$106.50</Text>
      </View>
    </View>
  );
};

{/* <CartItems
            key={data.id}
            itemImage={data.itemImage}
            itemNameText={data.itemNameText}
            itemCategoryText={data.itemCategoryText}
            itemPriceText={data.itemPriceText}
          /> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  cartItemsContainer: {
    flex: 0.91,
    // borderWidth: 3,
    // borderColor: "black",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buyPriceButtonContainer: {
    backgroundColor: Colors.primaryBlue,
    flex: 0.09,
    marginBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  buyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  buyPrice: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
