import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#282a36'
    },
    input: {
        width: 200,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#000',
        backgroundColor: '#fff',
        marginTop: 10
    },
    title: {
        color: '#fff',
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    error: {
        color: '#ff5555',
        marginLeft: 10,
        fontSize: 10,
        marginTop: 5,
        textAlign: 'center'
    },
});