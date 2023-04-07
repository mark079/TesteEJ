import { useContext, useState } from 'react';
import { TouchableOpacity, View, TextInput, Text } from 'react-native';
import { styles } from '../../styles/form';
import { GlobalContext } from '../../../contexts/App';
import Button from '../../components/Button';

export default function Name({ navigation }) {
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const context = useContext(GlobalContext);
    const { state, setState } = context;
    const handleValidate = () => {
        setError(null);
        if (!name) {
            setError('Nome é um campo obrigatório');
        } else if (name.length < 3) {
            setError('Necessário, pelo menos, 3 caracteres');
        } else {
            setState({ ...state, name });
            navigation.navigate('Cpf');
        }
    };
    return (
        <View style={styles.container}>
            <View></View>
            <View>
                <Text style={styles.title}>Nome:</Text>
                <TextInput style={styles.input} value={name} onChangeText={nameText => setName(nameText)} placeholder='Digite seu nome...' placeholderTextColor="#909090" />
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
            <Button title={'Continuar'} handleFunction={handleValidate}/>
            {/* <TouchableOpacity style={styles.button} onPress={handleValidate}>
                <Text style={styles.buttonTitle}>Continuar</Text>
            </TouchableOpacity> */}
        </View>
    )
}
