import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Icon} from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import Edit from './screens/Edit';
import PostScreenFirestore from './screens/PostScreenFirestore';
import HomeScreenFirestore from './screens/HomeScreenFirestore';
import EditFirestore from './screens/EditFirestore';
import { DrawerContent } from './screens/DrawerContent';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={DrawerScreen} hideNavBar />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const RealtimeStack = createStackNavigator();
function RealtimeStackScreen() {
  return (
    <RealtimeStack.Navigator initialRouteName="HomeScreen" headerMode="none">
      <RealtimeStack.Screen name="HomeScreen" component={HomeScreen} />
      <RealtimeStack.Screen name="Edit" component={Edit} />
    </RealtimeStack.Navigator>
  );
}
const PostRealtimeStack = createStackNavigator();
function PostRealtimeStackScreen() {
  return (
    <PostRealtimeStack.Navigator initialRouteName="PostScreen" headerMode="none">
      <PostRealtimeStack.Screen name="PostScreen" component={PostScreen} />
    </PostRealtimeStack.Navigator>
  );
}
const FirestoreStack = createStackNavigator();
function FirestoreStackScreen() {
  return (
    <FirestoreStack.Navigator initialRouteName="HomeScreenFirestore" headerMode="none">
      <FirestoreStack.Screen
        name="HomeScreenFirestore"
        component={HomeScreenFirestore}
      />
      <FirestoreStack.Screen name="EditFirestore" component={EditFirestore} />
    </FirestoreStack.Navigator>
  );
}

const PostFirestoreStack = createStackNavigator();
function PostFirestoreStackScreen() {
  return (
    <PostFirestoreStack.Navigator initialRouteName="PostScreenFirestore" headerMode="none">
      <PostFirestoreStack.Screen
        name="PostScreenFirestore"
        component={PostScreenFirestore}
      />
    </PostFirestoreStack.Navigator>
  );
}

const RealtimeTab = createBottomTabNavigator();
function RealtimeTabScreen() {
  return (
    <RealtimeTab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#f9c46b',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#f9c46b',
        activeTintColor: '#8a00d4',
      }}>
      <RealtimeTab.Screen
        name="RealtimeStackScreen"
        component={RealtimeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <RealtimeTab.Screen
        name="PostRealtimeStackScreen"
        component={PostRealtimeStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="plus-square"
              type="font-awesome"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </RealtimeTab.Navigator>
  );
}

const FirestoreTab = createBottomTabNavigator();
function FirestoreTabScreen() {
  return (
    <FirestoreTab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: '#DDA15E',
        inactiveTintColor: '#FEFAE0',
        activeBackgroundColor: '#DDA15E',
        activeTintColor: '#606C38',
      }}>
      <FirestoreTab.Screen
        name="FirestoreStackScreen"
        component={FirestoreStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <FirestoreTab.Screen
        name="PostFirestoreStackScreen"
        component={PostFirestoreStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="plus-square"
              type="font-awesome"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </FirestoreTab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Realtime" headerMode="none" drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Realtime" component={RealtimeTabScreen} />
    <Drawer.Screen name="Firestore" component={FirestoreTabScreen} />
  </Drawer.Navigator>
);

export default AppNavigator;
