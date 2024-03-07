import { theme } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 12,
  },
  header: {
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22
  },
  scrollview: {
    height: 58,
    maxHeight: 58,
    marginVertical: 12,
  },
  ingredientsContent: {
    gap: 12,
  },
  recipes: {
  },
  recipesContent: {
    gap: 16,
    
  }
});

export default styles;
