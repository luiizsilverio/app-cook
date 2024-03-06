import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppView from "@/views/app";

const Stack = createNativeStackNavigator();

export default function StacksRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="app"
                component={AppView}
            />
        </Stack.Navigator>
    )
}