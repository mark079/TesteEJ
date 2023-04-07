import { useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/form';
import { cpfMask } from '../../common/mask';
import { validationCPF } from '../../common/validationCpf';
import { GlobalContext } from '../../../contexts/App';
import Button from '../../components/Button';
export default function Cpf({ navigation }) {
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState(null);
    const context = useContext(GlobalContext);
    const { state, setState } = context;
    const handleValidation = () => {
        setError(null);
        if (!cpf) {
            setError('CPF é um campo obrigatório');
        } else if (!validationCPF(cpf)) {
            setError('Digite um CPF válido');
        } else {
            setState({ ...state, cpf });
            navigation.navigate('Email');
        }
    };
    return (
        <View style={styles.container}>
            <View></View>
            <View>
                <Text style={styles.title}>CPF:</Text>
                <TextInput style={styles.input} keyboardType='numeric' value={cpf} onChangeText={e => setCpf(cpfMask(e))} placeholder='***.***.***-**' placeholderTextColor={'#909090'} />
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
            <Button title='Continuar' handleFunction={handleValidation} />
        </View>
    )
}
