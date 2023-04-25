import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import { EntreeItem, FoodItem } from "./FoodItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

// console.log(MEALS, ' ARE THE MEEEEEEEEEEEALS!!!!!!!!!!!!!!!');
// console.log(CATEGORIES, ' ARE THE CAAAAAAAATEGORRRRRIIIEEESS!!!!!!');
// let dummy_entree_data = [
//   {
//     id: Math.random(),
//     categoryName: "Ribeye Steak",
//     description: "Beef steak, sauce, french fries",
//     image: require('../../assets/images/ribeye1.jpg'),
//     price: 12.4,
//   },
//   {
//     id: Math.random(),
//     categoryName: "Wood Grills",
//     description: "Pork, tomato, onion",
//     image: require('../../assets/images/woodgrills.jpeg'),
//     price: 15.0,
//   },
//   {
//     id: Math.random(),
//     categoryName: "Banging Saute",
//     description: "Banging saute, just right",
//     image: require('../../assets/images/saute.jpg'),
//     price: 25.99,
//   },
//   {
//     id: Math.random(),
//     categoryName: "Yummy Crunch",
//     description: "Yummified with great crunch",
//     image: require('../../assets/images/yummy.jpg'),
//     price: 35.99,
//   },
// ];

export default function MenuCatorgyOptionsScreen({route, navigation}) {

  //CategoryId from menu screen
  const catId = route.params.categoryId ;
  // console.log(catId, " IS THE ID------------------------");

  const displayedMeals = MEALS.filter((mealItem) => {
    // console.log(mealItem, ' .......test mealItem............');
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //header details to showcase the right name in the header
  // useLayoutEffect(() => {
    //alternative for getting the id for the header within this screen
    // const categoryTitle = CATEGORIES.find(
    //   (category) => category.id === catId
    // ).title;

  //   navigation.setOptions({
  //     title: categoryTitle,
  //   });
  // }, [catId,navigation]);

  function renderCategoryItem(itemData) {
    // function pressHandler() {
    //   console.log('....going to ItemDetailScreen!!!!!!!')
    //   navigation.navigate('ItemDetailScreen', {
    //     categoryId: itemData.item.id,
    //   });
    // }

    //outputs the individual tiles
    return (
      <FoodItem
        categoryName={itemData.item.title}
        description={itemData.item.description}
        price={itemData.item.price}
        image={itemData.item.imageUrl}
        id={itemData.item.id}
        // onPress={() => pressHandler(itemData.item.id)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 80,
    backgroundColor: "black",
  },
});
