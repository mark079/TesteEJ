
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalContext } from '../../../contexts/App';
import { CommonActions } from '@react-navigation/native';
import Button from '../../components/Button';
export default function Result({ navigation }) {
    const context = useContext(GlobalContext);
    const { state: { name, cpf, email }, setState } = context;
    function registerAgain() {
        setState({ name: '', cpf: '', email: '' });
        const resetAction = CommonActions.reset({
            index: 1,
            routes: [{ name: "Name" }]
        });
        navigation.dispatch(resetAction);
    }
    return (
        <View style={styles.container}>
            <View></View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>Nome: </Text>
                    <Text style={{ color: '#fff' }}>{name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>CPF: </Text>
                    <Text style={{ color: '#fff' }}>{cpf}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>Email: </Text>
                    <Text style={{ color: '#fff' }}>{email}</Text>
                </View>
            </View>
            <Button title='Cadastrar Novamente' handleFunction={registerAgain} />
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#282a36'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold'
    },
});