import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";

export default function EnterCode() {
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
          {/** Primary Text Container*/}
          <View style={styles.primaryTextHeadingContainer}>
              <Text style={styles.primaryTextHeading}>SIGN IN</Text>
              <Text style={styles.primaryTextSubHeading}>enter credentials below</Text>
          </View>
          
          <View style={styles.inputTextContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.inputLabel}>Phone</Text>
                </View>
                <TextInput
                style={[styles.standardInputStyles, styles.nameInput]}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Phone Number"
                placeholderTextColor={Colors.white} 
                />
                
          </View>

          <View style={[styles.inputTextContainer, {marginBottom: 15}]}>
                <View style={styles.labelContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                </View>
                <TextInput
                style={[styles.standardInputStyles, styles.nameInput]}
                // maxLength={2}
                // keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="*********"
                secureTextEntry={true}
                placeholderTextColor={Colors.white} 
                // onChangeText={numberInputHandler}
                // value={enteredNumber}
                />
          </View>

          <View style={styles.termsContainer}>
               <Text style={styles.termText2}>Forget Password?</Text>
            </View>

          <View style={styles.buttonsContainer}>           
            <View style={styles.buttonContainer}>
              <PrimaryButton myStyles={styles.buttonText}>
                {/* <Ionicons name="md-add" size={24} color="white" /> */}
                SIGN IN
              </PrimaryButton>
            </View>
          </View>
        <Text style={styles.orText}>OR</Text>
          <View style={styles.buttonsContainer}>           
            <View style={styles.buttonContainer}>
              <PrimaryButton myStyles={styles.buttonText} backgroundReset={{backgroundColor: Colors.twitBlue}}>
                {/* <Ionicons name="md-add" size={24} color="white" /> */}
                Sign in with Twitter
              </PrimaryButton>
              <PrimaryButton myStyles={styles.buttonText} backgroundReset={{backgroundColor: Colors.faceBlue}}>
                {/* <Ionicons name="md-add" size={24} color="white" /> */}
                Sign in with Facebook
              </PrimaryButton>
            </View>
          </View>

          <View style={styles.accountTextContainer}>
                <Text style={styles.termText1}>New here? <Text style={styles.termText2}>Sign Up</Text></Text>
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
  primaryTextHeadingContainer:{
    alignItems: 'center',
    marginBottom: 55,
    marginTop: 70,
  },
  primaryTextHeading: {
    color: Colors.primaryBlue,
    fontWeight: '500',
    fontSize: 26,
    letterSpacing: '2'
  },
  primaryTextSubHeading: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
  cameraBackground: {
    backgroundColor: Colors.darkGrey,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 125,
    borderWidth: 10,
    borderColor: Colors.primaryPink
  },  
  inputTextContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    paddingLeft: 25,
    paddingRight: 25
  },
  labelContainer: {
    width: '92%',
  },
  inputLabel: {
    color: Colors.primaryBlue,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  standardInputStyles:{
    height: 40,
    fontSize: 32,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    color: 'white',
    textAlign: "left",
    width: '92%',
    paddingBottom: 7,    
  },
  textMsgContainer: {
    width: '92%',
    marginTop: 8
  },
  textMsgText: {
    color: Colors.white,
    fontWeight: '600'
  },
  termsContainer: {
    marginBottom: 50,
    width: '92%',
    alignItems: 'flex-end',
  },
  termText1: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
    marginTop: 7,
    paddingLeft: 3
  },
  termText2: {
    color: Colors.primaryBlue,
    textDecorationLine: 'underline', 
    fontSize: 18,
    fontWeight: '500'   
  },
  rootScreen: {
    flex: 1,
  },
  orText: {
    color: Colors.white,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  buttonsContainer: {
    borderColor: 10,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 100
  },
  buttonContainer: {
    width: '90%',
  },
  buttonsContainerWide: {
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
  },
  mainScreenText:{
    color: Colors.primaryPink,
    fontWeight: 'bold',    
  },
  mainTextContainer: {
    alignItems: 'center',    
    marginBottom: '7%'
  },
  accountTextContainer: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});
