import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholderText
}) {
  return (
    <View style={styles.inputTextContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
      </View>
      <TextInput
        style={[styles.standardInputStyles, styles.nameInput]}
        // autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholderText}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputTextContainer:{
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  labelContainer: {
    width: "100%",
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
    width: "100%",
    paddingBottom: 7,
  },
});
