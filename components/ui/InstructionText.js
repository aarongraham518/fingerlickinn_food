import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

/* merging our own style prop for additional styles to be added. */
function InstructionText({children, style}){
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        // fontFamily: 'open-sans',
        color: Colors.primaryBlue,
        fontSize: 24
      },
});