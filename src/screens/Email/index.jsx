import { useContext, useState } from 'react';
import { Button, View, TextInput, Text, StyleSheet } from 'react-native';
import { styles } from '../../styles/form';
import { GlobalContext } from '../../../contexts/App';
export default function Email({ navigation }) {
    const [email, setEmail] = useState();
    const [error, setError] = useState(null);
    const context = useContext(GlobalContext);
    const { state, setState } = context;
    const handleValidate = () => {
        setError(null);
        if (!email) {
            setError('Email é um campo obrigatório');
        } else {
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!reg.test(email) === true) {
                setError('Digite um Email válido');
            }
            else {
                setState({ ...state, email });
                navigation.navigate('Result');
            }
        }
    };
    return (
        <View style={styles.container}>
            <View></View>
            <View>
                <Text style={styles.title}>Email:</Text>
                <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} placeholder='exemplo@email.com' placeholderTextColor="#909090" />
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
            <Button title='Cadastrar' onPress={handleValidate} />
        </View>
    )
}
