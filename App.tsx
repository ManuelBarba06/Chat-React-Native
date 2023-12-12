import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import PrincipalNavigation from './src/navigation/PrincipalNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <PrincipalNavigation/>
    </NavigationContainer>
  )
}

export default App