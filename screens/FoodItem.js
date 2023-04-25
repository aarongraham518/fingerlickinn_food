import { StyleSheet, ImageBackground, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from ".././constants/colors";
import { StatusBar } from "expo-status-bar";
import {useNavigation} from '@react-navigation/native';

export const FoodItem = ({
  id,
  categoryName,
  description,
  price,
  image,
  height,
  count,
  marginTop,
  marginLeftFix,
  onPress
}) => {
  const navigation = useNavigation();

  function pressHandler() {
    // console.log('....going to ItemDetailScreen with an id of ', id)
    navigation.navigate('ItemDetailScreen', {
      categoryId: id,
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      {/* <Pressable style={styles.container} onPress={pressHandler.bind(this, id)}> */}
      <Pressable style={styles.FoodItemContainer} onPress={() => pressHandler(id)}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={[ styles.entreeContainer, { height: height ? height : 200 }]}
          // style={styles.entreeContainer}
          imageStyle={styles.backgroundImage}
        >
          <LinearGradient
            colors={["transparent", Colors.black]}
            style={styles.nameDescriptionContainer}
          >
            <View style={styles.nameDescPriceContainer}>
              <View style={styles.subContainer}>
                <Text style={[styles.name, { marginTop: marginTop}]}>
                  {categoryName}
                </Text>
                {description ? (
                  <Text style={styles.description}>{description}</Text>
                ) : (
                  <></>
                )}
              </View>
              <View style={styles.priceContainer}>
                {price ? (
                  <Text style={styles.price}>${price.toFixed(2)}</Text>
                ) : (
                  <Text style={[styles.count, {marginLeft: marginLeftFix}]}>{count}</Text>
                )}
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  FoodItemContainer: {
    // flex: 1,
    backgroundColor: "#fff",
    // borderWidth: 2,
    // borderColor: 'red'
  },
  entreeContainer: {
    width: "100%",
    height: 200,
    // borderColor: "black",
    // borderWidth: 3,
    justifyContent: "flex-end",
  },
  nameDescPriceContainer: {
    flexDirection: "row",
  },
  nameDescriptionContainer: {
    width: "100%",
    flex: 0.39,
    justifyContent: "flex-end",
    paddingBottom: 8,
    paddingLeft: 8,
    // opacity: .15
  },
  priceContainer: {
    // borderWidth: 4,
    // borderColor: 'white',
    flex: 0.35,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 5,
  },
  price: {
    color: Colors.primaryBlue,
    fontSize: 26,
    fontWeight: "bold",
  },
  count: {
    color: Colors.primaryBlue,
    fontSize: 26,
    fontWeight: "bold",
  },
  subContainer: {
    // backgroundColor: 'black',
    // opacity: .15
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primaryPink,
  },
  description: {
    // fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primaryPink,
  },
});

  // const image = {uri : 'https://someonline.site.com/1'};
