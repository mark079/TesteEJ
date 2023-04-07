import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, handleFunction }) {
    return (
            <TouchableOpacity style={styles.button} onPress={handleFunction}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    button: {
        backgroundColor: '#383a59',
        padding: 15,
        borderRadius: 5
    },
    buttonTitle: {
        color: '#fff',
        fontWeight: 'bold'
    }
});