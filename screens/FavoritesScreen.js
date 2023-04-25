import { StyleSheet, Text, View, ScrollView} from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { FoodItem } from "./FoodItem";

export const FavoritesScreen = () => {
  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.rootContainer}>
      {favoriteMeals.map((data) => (
        <FoodItem
          categoryName={data.title}
          description={data.description}
          price={data.price}
          image={data.imageUrl}
          id={data.id}
          key={data.id}
          // onPress={() => pressHandler(itemData.item.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rootContainer: {
    flex: 1,
    // borderWidth: 3,
    // borderColor: 'orange',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    
    // justifyContent: "flex-start",
    // alignItems",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
