// app/_layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider } from "@/context/ThemeContext"; // adjust path if needed
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <Stack />
    </ThemeProvider>
  );
}
