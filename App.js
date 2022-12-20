/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Wallet from './screens/Wallet';
import Withdrawal from './screens/Withdrawal';
import Review from './screens/Review';
import AddBank from './screens/AddBank';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            options={{headerShown: false}}
            name="Wallet"
            component={Wallet}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Withdrawal"
            component={Withdrawal}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Review"
            component={Review}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AddBank"
            component={AddBank}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
