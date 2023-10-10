import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useMyContext } from "../../context";
import { AddTask, List } from "../../screens/index";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const navigation = useNavigation();
  const { user } = useMyContext();
  console.log(user);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
      }}>
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddTask"
        component={AddTask}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
