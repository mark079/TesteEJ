import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Screen, Navigator } = createNativeStackNavigator();
import Name from './src/screens/Name';
import Email from './src/screens/Email';
import Cpf from './src/screens/Cpf';
import Result from './src/screens/Result';
import { AppContext } from './contexts/App';

function App() {
  return (
    <NavigationContainer>
      <AppContext>
        <Navigator initialRouteName='Name' screenOptions={{ animation: 'slide_from_right', headerShown: false }}>
          <Screen name={'Name'} component={Name} />
          <Screen name={'Email'} component={Email} />
          <Screen name={'Cpf'} component={Cpf} />
          <Screen name={'Result'} component={Result} />
        </Navigator>
      </AppContext>
    </NavigationContainer>
  );
}

export default App;
