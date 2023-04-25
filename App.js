import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// import EntreePage from "./components/entrees/EntreePage";/
import Colors from "./constants/colors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { Settings } from "./screens/Settings";
import { MenuScreen } from "./screens/MenuScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import EntreePage from "./components/entrees/EntreePage";
import SigninUp from "./screens/SigninUp";
import { ItemDetailScreen } from "./screens/ItemDetailScreen";
import { Cart } from "./screens/Cart";
import { Support } from "./screens/Support";
import SignUp from "./screens/SignUp";
import EnterCode from "./screens/EnterCode";
import SignIn from "./screens/SignIn";
import MenuCatorgyOptionsScreen from "./screens/MenuCatorgyOptionsScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
import CartContextProvider from "./store/context/cart-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    // {/**contentStyle needs to be sceneContainerStyle within Drawer.Navigator */}
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: Colors.primaryBlue,
        sceneContainerStyle: { backgroundColor: "black" },
        drawerContentStyle: { backgroundColor: "#212020" },
        drawerInactiveTintColor: Colors.primaryBlue,
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: Colors.primaryPink,
      }}
    >
      <Drawer.Screen
        name="SignInUp"
        component={SigninUp}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="enter" color={color} size={size} />
          ),
        }}
      />
            <Drawer.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: "Menu",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="enter" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="enter" color={color} size={size} />
          ),
        }}
      />

    <Drawer.Screen
        name="EnterCode"
        component={EnterCode}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="enter" color={color} size={size} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Entrees Screen"
        component={EntreePage}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="fast-food" color={color} size={size} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbox-ellipses" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <EntreePage /> */}
      <CartContextProvider>      
      <FavoritesContextProvider>      
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: Colors.primaryBlue,
            contentStyle: { backgroundColor: "black" },        
          }}
        >
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />

        <Stack.Screen
            name="MenuCatorgyOptionsScreen"
            component={MenuCatorgyOptionsScreen}
            options={{
                title: "Categories",
                headerShown: true,  
            }}
          />

        <Stack.Screen
            name="ItemDetailScreen"
            component={ItemDetailScreen}
            options={{
                title: "Item Options",
                headerShown: true,  
            }}
          />

        <Stack.Screen
            name="MyCart"
            component={Cart}
            options={{
                title: 'My Cart',
                headerShown: true,  
            }}
          />

          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>        
      </NavigationContainer>
      </FavoritesContextProvider>
      </CartContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
