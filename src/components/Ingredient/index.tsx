import { Image, Pressable, PressableProps, Text } from "react-native";
import styles from "./styles";

interface IngredientProps extends PressableProps {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({name, image, selected = false, ...rest}: IngredientProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image style={styles.image} source={require("../../images/apple.png")} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  )
}