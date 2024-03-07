import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppView from "@/views/app";
import Recipes from "@/views/recipes";
import RecipeView from "@/views/recipe";

const Stack = createNativeStackNavigator();

export default function StacksRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="app"
                component={AppView}
            />
            <Stack.Screen
                name="recipes"
                component={Recipes}
            />
            <Stack.Screen
                name="recipe"
                component={RecipeView}
            />
        </Stack.Navigator>
    )
}