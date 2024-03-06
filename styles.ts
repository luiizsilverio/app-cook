import { StyleSheet } from "react-native";
import { theme } from "@/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 42,
  },
  subtitle: {
    fontSize: theme.fonts.size.body.md,

  }
});

export default styles;
