import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress, myStyles, backgroundReset}) {
  
  // onPress()

  /*
  note! children is anything inside the Pressable component
  pressed is part of the Pressable component
  onPress on the left is part of the Pressable component and 
  onPress on the right is our own function passed in.
  */
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer, backgroundReset]
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.buttonText, myStyles]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primaryBlue,
    paddingVertical: 20,
    // paddingHorizontal: 5,
    elevation: 2,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
