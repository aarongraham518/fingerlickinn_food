import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView} from "react-native";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { FoodItemDetails } from "../components/FoodItemDetails";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { UserComments } from "../components/usercomments/UserComments";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { CartContext } from "../store/context/cart-context";

// import {useNavigation} from '@react-navigation/native';
  
// let dummy_itemDetail_data = [
//   {
//     id: Math.random(),
//     itemName: "Ribeye steak",
//     description: "Beef steak, sauce, french fries",
//     image: require("../assets/images/ribeye1.jpg"),
//     price: 12.4,
//   },
// ];

export const ItemDetailScreen = ({route, navigation}) => {
  const cartCtx = useContext(CartContext);
 
//   console.log(route, ' we can use this route');
// console.log('We made it to the ITEM DETAILS SCREEN');
// console.log('arrived with an id of', route.params.categoryId);
  
//context to provide
const favoriteMealsCtx = useContext(FavoritesContext);
// console.log(favoriteMealsCtx, 'is the context available from our store');

//get the meal id from the route
const catId = route.params.categoryId;

//find the meal id that matches the data meal id (change catId to mealId)
const selectedMeal = MEALS.find((meal) => meal.id === catId);

 //find out if the current meal is a favorite or not (meaning the id is in the id array);
 const mealIsFavorite = favoriteMealsCtx.ids.includes(catId);
//  console.log(mealIsFavorite, 'lets see the boolean value');

//Accessing methods and properties from our store
function changeFavoriteStatusHandler() {
  //will change favorite to non-favorite
  if(mealIsFavorite){
    favoriteMealsCtx.removeFavorite(catId);
  }else{
    favoriteMealsCtx.addFavorite(catId);
  }
}

function pressHandler(id, itemForCart) {
    navigation.navigate("MyCart", {
      categoryId: id,
      itemDetails: itemForCart
    });
  }

  const displayedMeal = MEALS.filter((mealItem) => mealItem.id === catId);
  // console.log(displayedMeal[0], ' is the meal item');

  const myShoppingCart = [];

  //Add cart to context
  const addToCart = (itemToCart) => {
    // console.log(myShoppingCart.length, 'items in the cart');
    // console.log(itemToCart, 'is the object going to the cart!');
    // myShoppingCart.push(itemToCart);
    console.log('Sending data to the store');
    cartCtx.addItem({
      id: itemToCart.id,
      categoryName: itemToCart.title,
      description: itemToCart.description,
      image: itemToCart.imageUrl,
      price: itemToCart.price,
      quantity: 1
    });
    // console.log('.....Adding to Cart....... ', itemToCart);
    // console.log(myShoppingCart.length, 'items in the cart');
    pressHandler(catId, myShoppingCart)
  }

  console.log(cartCtx, 'updated');
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <View style={styles.itemContainer}>
          <FoodItemDetails
            id={displayedMeal[0].id}
            categoryName={displayedMeal[0].title}
            description={displayedMeal[0].description}
            image={displayedMeal[0].imageUrl}
            price={displayedMeal[0].price}
            // count={dummy_menu_data[0].count}
            height={330}
            marginTop={2}
            // onPress={pressHandler}
          /> 
        </View>

        <View style={styles.buttonsContainer}>           
            <Pressable style={styles.buttonContainerFavorites} onPress={changeFavoriteStatusHandler}>
            <Ionicons name={mealIsFavorite ? "star" : 'star-outline'} color={true ? Colors.primaryBlue : 'grey'} size={25} />
            <Text style={styles.buttonTextFav}>ADD TO FAVORITES</Text>
            </Pressable>

            
              <Pressable style={styles.buttonContainerCart} onPress={() => addToCart(displayedMeal[0])}>
              <Ionicons name="cart" color={'white'} size={25} />
              <Text style={styles.buttonTextCart}>ADD TO CART</Text>
              </Pressable>
  
          </View>
          <View style={styles.commentsMessageContainer}>
            <UserComments />
          </View>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "black",
    // borderWidth: 3,
    // borderColor: 'red'
  },
  itemContainer: {
    // flex: .4,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  buttonsContainer: {
    // flex: .17,
    height: 60,
    flexDirection: "row",
  },
  buttonContainerFavorites: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.mediumGrey2,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  buttonContainerCart: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextFav:{
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginLeft: 5
  },
  buttonTextCart:{
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5
  },
  commentsMessageContainer:{
    // borderWidth: 1,
    // borderColor: 'blue',
    backgroundColor: 'white',
    // flex: .30
  }
});
