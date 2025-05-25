import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "@/Navigation/Home";
import PostDetail from "@/Screens/PostDetails";
import { RootStack } from "@/types/navigation";

const Stack = createNativeStackNavigator<RootStack>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={HomeTab} />
        <Stack.Screen
          name="PostDetails"
          component={PostDetail}
          options={{
            headerShown: true,
            title: "Detalhes do Post",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
