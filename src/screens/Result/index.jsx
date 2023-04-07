
import { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { GlobalContext } from '../../../contexts/App';
import { CommonActions } from '@react-navigation/native';
export default function Result({ navigation }) {
    const context = useContext(GlobalContext);
    const { state: { name, cpf, email }, setState } = context;
    return (
        <View style={styles.container}>
            <View></View>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>Nome: </Text>
                    <Text style={{color: '#000'}}>{name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>CPF: </Text>
                    <Text style={{color: '#000'}}>{cpf}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>Email: </Text>
                    <Text style={{color: '#000'}}>{email}</Text>
                </View>
            </View>
            <Button title='Cadastrar Novamente' onPress={() => {
                setState({ name: '', cpf: '', email: '' });
                const resetAction = CommonActions.reset({
                    index: 1,
                    routes: [{ name: "Name" }]
                });
                navigation.dispatch(resetAction);
            }} />
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        fontWeight: 'bold'
    },
});