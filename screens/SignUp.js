import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import Input from "../components/ui/Input";

export default function SignUp() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  let submitHandler = () => {
    return(
      {
        email: enteredEmail,
        confirmEmail: enteredPassword,
        password: enteredPassword,
      }
    )
    
  }
    //deconstruct, and rename properties
    let credentials = {
      email: '',
      password: '',
      confirmPassword: '',
    } 

  function updateInputValueHandler(inputType, enteredValue) {
    console.log(enteredValue, 'ENTERED VALUE', inputType, 'INPUT TYPE');
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);  
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
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
          {/** Camera Container*/}
          <View style={styles.imageContainer}>
            <View style={styles.cameraBackground}>
              <Ionicons
                name="camera"
                color={Colors.mediumLightGrey}
                size={60}
              />
            </View>
          </View>

          <View style={styles.inputTextContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputLabel}>Email Address</Text>
            </View>
            <TextInput
              style={[styles.standardInputStyles, styles.nameInput]}
              // maxLength={2}
              // keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="jsmith@gmail.com"
              placeholderTextColor={Colors.white}
              onUpdateValue={updateInputValueHandler.bind(
                this,
                "email"
              )}
              value={enteredEmail}
            />
          </View>

          <View style={styles.inputTextContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputLabel}>Password</Text>
            </View>
            <TextInput
              style={[styles.standardInputStyles, styles.nameInput]}
              placeholder="*************"
              placeholderTextColor={Colors.white}
              secureTextEntry={true}
              onUpdateValue={updateInputValueHandler.bind(
                this,
                "password"
              )}
              value={enteredPassword}
            />

           
          </View>

          <View style={styles.inputTextContainer}>
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            secure
            value={enteredConfirmPassword}
            placeholderText="*********"
            // isInvalid={passwordsDontMatch}
          />
          </View>
           {/* <View style={styles.textMsgContainer}>
              <Text style={styles.textMsgText}>
                We'll send you an activation code via sms
              </Text>
            </View> */}

          <View style={styles.termsContainer}>
            <Ionicons name="checkbox" color={Colors.primaryBlue} size={30} />
            <Text style={styles.termText1}>
              I agree with{" "}
              <Text style={styles.termText2}>Terms & Conditions</Text>
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer} >
              <PrimaryButton myStyles={styles.buttonText} onPress={submitHandler}>
                {/* <Ionicons name="md-add" size={24} color="white" /> */}
                SIGN UP
              </PrimaryButton>
            </View>
          </View>

          <View style={styles.accountTextContainer}>
            <Text style={styles.termText1}>
              I have <Text style={styles.termText2}>an account</Text>
            </Text>
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
    alignItems: "center",
    marginBottom: 75,
    marginTop: 50,
  },
  cameraBackground: {
    backgroundColor: Colors.darkGrey,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 125,
    borderWidth: 10,
    borderColor: Colors.primaryPink,
  },
  inputTextContainer: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
  },
  labelContainer: {
    width: "92%",
  },
  inputLabel: {
    color: Colors.primaryBlue,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  standardInputStyles: {
    height: 40,
    fontSize: 32,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    color: "white",
    textAlign: "left",
    width: "92%",
    paddingBottom: 7,
  },
  textMsgContainer: {
    width: "92%",
    marginTop: 8,
  },
  textMsgText: {
    color: Colors.white,
    fontWeight: "600",
  },
  termsContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 90,
    width: "92%",
    alignItems: "flex-start",
    paddingLeft: 44,
  },
  termText1: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 16,
    marginTop: 7,
    paddingLeft: 3,
  },
  termText2: {
    color: Colors.primaryBlue,
    textDecorationLine: "underline",
  },
  rootScreen: {
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  buttonsContainer: {
    borderColor: 10,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "90%",
  },
  buttonsContainerWide: {
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
  },
  mainScreenText: {
    color: Colors.primaryPink,
    fontWeight: "bold",
  },
  mainTextContainer: {
    alignItems: "center",
    marginBottom: "7%",
  },
  accountTextContainer: {
    textAlign: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
