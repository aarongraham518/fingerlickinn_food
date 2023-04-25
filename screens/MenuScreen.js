import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { MenuCategory } from "../components/MenuCategory";

let dummy_menu_data = [
  {
    id: 'c1',
    categoryName: "Entrees",
    // description: "Beef steak, sauce, french fries",
    image: require("../assets/images/ribeye1.jpg"),
    price: 12.4,
    count: 22,
  },
  {
    id: 'c2',
    categoryName: "Drinks",
    // description: "Beef steak, sauce, french fries",
    image: require("../assets/images/drink1.jpg"),
    price: 12.4,
    count: 42,
  },
  {
    id: Math.random(),
    categoryName: "Fruits",
    // description: "Beef steak, sauce, french fries",
    image: require("../assets/images/fruits2.jpg"),
    price: 12.4,
    count: 18,
  },
  {
    id: Math.random(),
    categoryName: "Salads",
    // description: "Beef steak, sauce, french fries",
    image: require("../assets/images/salads1.jpg"),
    price: 12.4,
    count: 24,
  },
];

export const MenuScreen = () => {

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.entreesContainer}>
          <MenuCategory
            // id={dummy_menu_data[0].id}
            id={dummy_menu_data[0].id}
            categoryName={dummy_menu_data[0].categoryName}
            // description={dummy_menu_data[0].description}
            image={dummy_menu_data[0].image}
            // price={dummy_menu_data[0].price}
            count={dummy_menu_data[0].count}
            height={340}
            marginTop={2}
            marginLeftFix={60}
            // onPress={pressHandler}
          />
        </View>

        {/**Drinks, fruits, salads container*/}
        <View style={styles.drinksFruitsSaladsContainer}>
          {/**Drinks container*/}
          <View style={styles.drinksContainer}>
            <MenuCategory
              id={dummy_menu_data[1].id}
              categoryName={dummy_menu_data[1].categoryName}
              description={dummy_menu_data[1].description}
              image={dummy_menu_data[1].image}
              // price={dummy_menu_data[0].price}
              count={dummy_menu_data[1].count}
              height={498}
              marginTop={2}
              // onPress={pressHandler}
            />
          </View>

          {/**Fruits & Salads container*/}
          <View style={styles.fruitsSaladsContainer}>
            {/**Fruits container*/}
            <View style={styles.fruitsContainer}>
              <MenuCategory
                id={dummy_menu_data[2].id}
                categoryName={dummy_menu_data[2].categoryName}
                description={dummy_menu_data[2].description}
                image={dummy_menu_data[2].image}
                // price={dummy_menu_data[0].price}
                count={dummy_menu_data[2].count}
                height={250}
                marginTop={2}
                // onPress={pressHandler}
              />
            </View>
            {/**Salads container*/}
            <View style={styles.saladsContainer}>
              <MenuCategory
                id={dummy_menu_data[3].id}
                categoryName={dummy_menu_data[3].categoryName}
                description={dummy_menu_data[3].description}
                image={dummy_menu_data[3].image}
                // price={dummy_menu_data[0].price}
                count={dummy_menu_data[3].count}
                height={250}
                marginTop={2}
                // onPress={pressHandler}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
    overflow: 'hidden'
  },
  entreesContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 0.4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  drinksFruitsSaladsContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.6,
    flexDirection: "row",
    overflow: 'hidden',
    paddingBottom: 1
  },
  drinksContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    flex: 1,
    overflow: 'hidden',
    paddingBottom: 10
  },
  fruitsSaladsContainer: {
    // borderWidth: 1,
    // borderColor: "purple",
    flex: 1,
    overflow: 'hidden'
  },
  fruitsContainer: {
    // borderWidth: 1,
    // borderColor: "orange",
    flex: 1,
    overflow: 'hidden'
    
  },
  saladsContainer: {
    // borderWidth: 1,
    // borderColor: "yellow",
    flex: 1,
    overflow: 'hidden'
  },
});
