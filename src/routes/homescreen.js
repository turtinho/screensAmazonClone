import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/index.js";

const Stack = createStackNavigator();

export default function Home(){
    return(
             <Stack.Navigator
                screenOptions={{
                    headerTransparent:true,
                    headerShown:false,
                }}> 
                    <Stack.Screen name='Index' component={Index}/>
                </Stack.Navigator>
                )
}   

