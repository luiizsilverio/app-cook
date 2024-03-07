import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';

import { Recipe } from "@/components/Recipe";
import styles from "./styles";
import { services } from "@/services";
import { Ingredient } from "@/components/Ingredient";

interface Params {
  ids: string;
}

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])
  const navigation = useNavigation();
  const route = useRoute();

  const { ids } = route.params as Params;
  const ingredientsIds = ids?.split(",") || [];

  useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients);
  }, [])

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons 
          name="arrow-back" 
          size={32} 
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <ScrollView
        horizontal
        style={styles.scrollview}
        contentContainerStyle={styles.ingredientsContent}
        showsHorizontalScrollIndicator={false}
      >
        {ingredients.map((ingredient) => (
          <Ingredient
            key={ingredient.name}
            name={ingredient.name}
            image={`${process.env.EXPO_PUBLIC_SUPABASE_BUCKET_URL}/${ingredient.image}`} 
          />
        ))}
      </ScrollView>

      <FlatList 
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Recipe 
            recipe={item} 
            onPress={() => navigation.navigate("recipe", { id: item.id })} 
          />
        )}
        style={styles.recipes}
        contentContainerStyle={styles.recipesContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
      />
    </View>
  )
}