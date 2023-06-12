import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";
import RideOptionsCard from "./components/RideOptionsCard";
import { KeyboardAvoidingView, Platform } from "react-native";
import NavFavourites from "./components/NavFavourites";
import NavigateCard from "./components/NavigateCard";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === 'ios'? -64 : 0}
          >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="MapScreen" component={MapScreen} />
              <Stack.Screen name="EatsScreen" component={EatsScreen} />
              <Stack.Screen name="NavigateCard" component={NavigateCard} />
              <Stack.Screen
                name="RideOptionsCard"
                component={RideOptionsCard}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
