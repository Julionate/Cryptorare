import { Comparer } from "@screens/Comparer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Recommendations } from "@screens/Recommendations";
import { Results } from "@screens/Results";
import { RootStackParamList } from "types/navigation";
import IconHome from "@svg/IconHome";
import IconBulb from "@svg/IconBulb";
import "./global.css";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <IconHome width={size} height={size} fill={color} />;
            } else if (route.name === "Recommendations") {
              return <IconBulb width={size} height={size} fill={color} />;
            }
          },
          tabBarActiveTintColor: "#c13a91",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Comparer}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "black",
              position: "absolute",
              borderColor: "transparent",
            },
          }}
        />
        <Tab.Screen
          name="Recommendations"
          component={Recommendations}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "black",
              borderColor: "transparent",
              position: "absolute",
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resultados"
          component={Results}
          options={{
            animation: "none",
            headerTransparent: true,
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
