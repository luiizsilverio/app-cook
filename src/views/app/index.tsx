import { ScrollView, Text, View } from 'react-native';

import styles from './styles';
import { Ingredient } from '@/components/Ingredient';
import { useState } from 'react';
import { Selected } from '@/components/Selected';

export default function AppView() {
  const [selected, setSelected] = useState<string[]>([]);

  function ToggleSelectHandler(value: string) {
    if (selected.includes(value)) {
      setSelected((state) => state.filter(item => item !== value));
    } else {
      setSelected((state) => [...state, value]);
    }
  }

  function clearSelectedHandler() {
    setSelected([]);
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Escolha {"\n"}
          <Text style={styles.subtitle}>os produtos</Text>
        </Text>
        <Text style={styles.message}>
          Descubra receitas baseadas nos produtos que você escolheu.
        </Text>

        <ScrollView 
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <Ingredient key={index} 
              name='maçã' image='' 
              selected={selected.includes(String(index))} 
              onPress={() => ToggleSelectHandler(String(index))} />
          ))}
        </ScrollView>

        <Selected 
          quantity={selected.length} 
          onClear={clearSelectedHandler} 
          onSearch={() => {}} 
        />
      </View>
  );
}
