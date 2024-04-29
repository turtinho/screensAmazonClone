import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./homescreen.js";
import Conta from "../screens/conta.js";
import Carrinho from "../screens/carrinho.js";
import Menu from "../screens/menu.js";
import Login from "../screens/login.js";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "black",
          headerTransparent: true,
          headerShown: false,
          tabBarStyle: {
            width: "100%",
            height: 60,
            lineHeight: 21,
          },
        }}
      >
        <Tab.Screen
          name="Home" component={Home} options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} /> ), }}/>
        <Tab.Screen
          name="Conta"
          component={Conta}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} /> // Ícone para a tela Conta
            ),
          }}
        />
        <Tab.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} /> // Ícone para a tela Carrinho
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={size} /> // Ícone para a tela Menu
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in" color={color} size={size} /> // Ícone para a tela Login
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
