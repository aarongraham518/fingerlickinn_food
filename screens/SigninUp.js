import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";

export default function SigninUp({navigation}) {

  function pressLickinnHandler() {
    navigation.navigate("Menu");
  }

  function pressSignInHandler() {
    navigation.navigate("SignIn");
  }

  function pressSignUpHandler() {
    navigation.navigate("SignUp");
  }  

  return (
    <>
      <StatusBar style="auto" />

      <LinearGradient
        colors={[Colors.black, Colors.black]}
        style={styles.rootScreen}
      >
          <ImageBackground
            source={require("../assets/images/foodtable.jpg")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          >
          
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/logo.png")}
            />
          </View>

          <View style={styles.mainTextContainer}>
            <InstructionText  style={styles.mainScreenText}>
            Welcome to the Finger Lickinn Food
            </InstructionText>
            <InstructionText  style={styles.mainScreenText}>
            App. Order now, lick'em later!
            </InstructionText>
          </View>
          
          <View style={styles.buttonsContainer}>
           
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => pressSignInHandler()}>
                {/* <Ionicons name="md-add" size={24} color="white" /> */}
                SIGN IN
              </PrimaryButton>
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => pressSignUpHandler()}>
                {/* <Ionicons name="md-remove" size={24} color="white" /> */}
                SIGN UP
              </PrimaryButton>
            </View>
          </View>
         
          <View style={styles.buttonContainerLick} >
              <PrimaryButton onPress={() => pressLickinnHandler()}>
                {/* <Ionicons name="md-remove" size={24} color="white" /> */}
                GET TO LICKINN
              </PrimaryButton>
            </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.23,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // borderWidth: 10,
    // borderColor: 'black',
    flex: .6,
    alignItems: 'center',
    marginTop: '30%'
  },
  image: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 125,
    borderWidth: 10,
    borderColor: Colors.primaryPink
    // opacity: 0.6,
  },
  rootScreen: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    // borderColor: 10,
    paddingLeft: 10,
    paddingRight: 10,
    // paddingTop: "70%",
    flex: .15,
    // alignItems: "center",
    // justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerLick: {
    // borderWidth: 3,
    // borderColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    flex: .35
  },
  buttonsContainerWide: {
    // flexDirection: 'row',
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
  },
  mainScreenText:{
    color: Colors.primaryPink,
    fontWeight: 'bold',    
  },
  mainTextContainer: {
    flex: .1,
    alignItems: 'center',    
    marginBottom: '5%'
  }
});
