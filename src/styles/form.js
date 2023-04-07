import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        width: 200,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        color: '#000'
    },
    title: {
        color: '#000',
        paddingLeft: 10
    },
    error: {
        color: 'red',
        marginLeft: 10,
        fontSize: 10
    }
});