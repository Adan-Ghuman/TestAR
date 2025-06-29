import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ARView() {
    const { isDark } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: isDark ? "#121212" : "#fff" }]}>
            <Text style={[styles.text, { color: isDark ? "#fff" : "#000" }]}>
                AR View Placeholder 📱 (Phase 2 will render model here)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    text: {
        fontSize: 18,
        textAlign: "center",
    },
});
