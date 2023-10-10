import { StatusBar } from "expo-status-bar";
import Navigation from "./src/components/navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="dark-content" />
    </NavigationContainer>
  );
}
