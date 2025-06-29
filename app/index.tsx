import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const products = [
  {
    id: "1",
    name: "Modern Chair",
    image: require("../assets/chair.png"),
  },
  {
    id: "2",
    name: "Wooden Table",
    image: require("../assets/bed.png"),
  },
];

export default function ProductList() {
  const { isDark } = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#121212" : "#fff" }]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDark ? "#1e1e1e" : "#f9f9f9" }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.name, { color: isDark ? "#fff" : "#000" }]}>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push(`/ar-view?id=${item.id}`)}
            >
              <Text style={styles.buttonText}>View in AR</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  list: {
    gap: 20,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    resizeMode: "contain",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#10B981",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
