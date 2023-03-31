import { createNativeStackNavigator } from '@react-navigation/native-stack'

import welcome from '../pages/welcome'
import signin from '../pages/signin'
import signup from '../pages/signup'
import home from '../pages/home'

const Stack = createNativeStackNavigator()

export default function Routes() {  
    return (
        <Stack.Navigator initialRouteName="welcome">
            <Stack.Screen name="welcome" component={welcome} options={{ headerShown: false }}/>
            <Stack.Screen name="signin" component={signin}  options={{ headerShown: false }}/>
            <Stack.Screen name="signup" component={signup} options={{headerShown: false}}/>
            <Stack.Screen name="home" component={home} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
