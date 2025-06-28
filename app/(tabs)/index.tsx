import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const dummyTodos = [
  { id: "1", task: "Finish calculus assignment" },
  { id: "2", task: "Review circuits notes" },
  { id: "3", task: "Gym at 6 PM" },
];

export default function HomePage() {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerBox}>
          <Text style={styles.headerTitle}>GPAi</Text>
          <Text style={styles.headerSubtitle}>Stay sharp. Stay on track.</Text>
        </View>

        <Text style={styles.sectionTitle}>Today's To-Do List</Text>
        <FlatList
          data={dummyTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Ionicons
                name="ellipse-outline"
                size={16}
                color="#90CAF9"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.todoText}>{item.task}</Text>
            </View>
          )}
          scrollEnabled={false}
        />

        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.grid}>
          {(
            [
              { icon: "calendar", label: "Calendar" },
              { icon: "stats-chart", label: "Grades" },
              { icon: "flame", label: "Habits" },
              { icon: "book", label: "Study Tools" },
              { icon: "timer", label: "Pomodoro" },
              { icon: "school", label: "Courses" },
            ] as const
          ).map(({ icon, label }, idx) => (
            <Pressable
              key={idx}
              style={({ pressed }) => [styles.card, pressed && styles.pressed]}
              onPress={() => console.log(`${label} pressed`)}
            >
              <Ionicons name={icon} size={26} color="#90CAF9" />
              <Text style={styles.cardText}>{label}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0A0F1C",
  },
  container: {
    padding: 20,
  },
  headerBox: {
    marginBottom: 20,
    backgroundColor: "#121A2C",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#E3F2FD",
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#B0BEC5",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#90CAF9",
    marginBottom: 12,
    marginTop: 20,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1B2332",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  todoText: {
    color: "#E1F5FE",
    fontSize: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#121A2C",
    width: "47%",
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1E2A3A",
  },
  pressed: {
    opacity: 0.85,
  },
  cardText: {
    color: "#E1F5FE",
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
  },
});
