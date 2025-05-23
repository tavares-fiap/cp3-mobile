import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "@/Navigation/Home";
import PostDetailScreen from "@/Screens/PostDetailScreen";
import { RootStackParamList } from "@/types/navigation";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainTabs" component={HomeTab} />
        <RootStack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{
            headerShown: true,
            title: "Detalhes do Post",
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
