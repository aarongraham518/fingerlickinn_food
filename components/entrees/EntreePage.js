import { View, StyleSheet, FlatList } from "react-native";

import { EntreeItem } from "../FoodItemDetails";

let dummy_entree_data = [
  {
    id: Math.random(),
    categoryName: "Ribeye Steak",
    description: "Beef steak, sauce, french fries",
    image: require('../../assets/images/ribeye1.jpg'),
    price: 12.4,
  },
  {
    id: Math.random(),
    categoryName: "Wood Grills",
    description: "Pork, tomato, onion",
    image: require('../../assets/images/woodgrills.jpeg'),
    price: 15.0,
  },
  {
    id: Math.random(),
    categoryName: "Banging Saute",
    description: "Banging saute, just right",
    image: require('../../assets/images/saute.jpg'),
    price: 25.99,
  },
  {
    id: Math.random(),
    categoryName: "Yummy Crunch",
    description: "Yummified with great crunch",
    image: require('../../assets/images/yummy.jpg'),
    price: 35.99,
  },
];

export default function EntreePage({route, navigation}) {
  console.log(route.params.categoryId, ' is our categoryId');

  function renderCategoryItem(itemData) {
    // function pressHandler() {
    //   navigation.navigate('MealsOverview', {
    //     categoryId: itemData.item.id,
    //   });
    // }

    //outputs the individual tiles
    return (
      <EntreeItem
        categoryName={itemData.item.categoryName}
        description={itemData.item.description}
        price={itemData.item.price}
        image={itemData.item.image}
        // onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dummy_entree_data}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    backgroundColor: "#fff",
  },
});
