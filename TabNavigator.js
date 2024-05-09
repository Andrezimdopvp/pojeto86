import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
    <Tab.Navigator
    barStyle={styles.bottomTabStyle}
    screenOptions={({ route }) => ({
      tabBaricon: ({ focused, color, size }) => {
        let iconName;
        if (route.name == 'Feed') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.nome == 'Criar História') {
          iconName = focused ? 'create' : 'create-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} 
        style={styles.icons} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Criar História" component={CreateStory} />
  </Tab.Navigator>
   
  );
}
export default BottomTabNavigator;