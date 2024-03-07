import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { services } from "@/services";
import { Ingredient } from '@/components/Ingredient';
import { Selected } from '@/components/Selected';
import styles from './styles';

export default function AppView() {
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  const navigation = useNavigation();

  function ToggleSelectHandler(value: string) {
    if (selected.includes(value)) {
      setSelected((state) => state.filter(item => item !== value));
    } else {
      setSelected((state) => [...state, value]);
    }
  }

  function clearSelectedHandler() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) }
    ])
  }

  function searchHandler() {
    navigation.navigate("recipes", { ids: selected.join(",") });
  }

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients)
  }, [])

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Escolha</Text>
        <Text style={styles.subtitle}>os produtos</Text>
        <Text style={styles.message}>
          Descubra receitas baseadas nos produtos que você escolheu.
        </Text>

        <ScrollView 
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} 
              name={ingredient.name} 
              image={`${process.env.EXPO_PUBLIC_SUPABASE_BUCKET_URL}/${ingredient.image}`} 
              selected={selected.includes(ingredient.id)} 
              onPress={() => ToggleSelectHandler(ingredient.id)} />
          ))}
        </ScrollView>

        {selected.length > 0 && (
          <Selected 
            quantity={selected.length} 
            onClear={clearSelectedHandler} 
            onSearch={searchHandler} 
          />
        )}
      </View>
  );
}
