import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomePage() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#6FB1FC", dark: "#112B45" }}
      headerImage={
        <LinearGradient
          colors={["#6FB1FC", "#4364F7"]}
          style={styles.headerGradient}
        >
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.logo}
          />
        </LinearGradient>
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.welcomeText}>
          Welcome to GPAi
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Your personal academic assistant
        </ThemedText>

        <View style={styles.grid}>
          {(
            [
              { icon: "calendar", label: "Calendar" },
              { icon: "checkmark-done", label: "To-Do" },
              { icon: "stats-chart", label: "Grades" },
              { icon: "flame", label: "Habits" },
              { icon: "book", label: "Study Tools" },
              { icon: "timer", label: "Pomodoro" },
            ] as {
              icon: React.ComponentProps<typeof Ionicons>["name"];
              label: string;
            }[]
          ).map(({ icon, label }, idx) => (
            <Pressable
              key={idx}
              style={({ pressed }) => [styles.card, pressed && styles.pressed]}
              onPress={() => console.log(`${label} pressed`)}
            >
              <Ionicons name={icon} size={24} color="#fff" />
              <Text style={styles.cardText}>{label}</Text>
            </Pressable>
          ))}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerGradient: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  container: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  card: {
    backgroundColor: "#4364F7",
    width: "47%",
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  cardText: {
    color: "#fff",
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
  },
});
