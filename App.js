import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,AntDesign,SimpleLineIcons,FontAwesome,MaterialIcons} from '@expo/vector-icons';

//components
import Home from './components/Home';
import Search from './components/Search';
import Add from './components/Add';
import Activity from './components/Activity';
import Profile from './components/Profile';

export default function App() {
  const Container = NavigationContainer;
  //stack navigator
  const Stack = createStackNavigator();
  //tab navigator
  const Tab = createBottomTabNavigator();

  const TabNavigator = ()=>{
    return(
      <Tab.Navigator tabBarOptions={{
        showLabel:false, 
        inactiveTintColor:"#4d4d4d",
        }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon : ({focused,color,size})=>{
            size = 30;
            return(
              <Entypo name="home" color={color} size={size}/>
            )
            
          }
        }}/>

        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon : ({focused,color,size})=>{
            size = 30;
            if (focused=true){
              return(
                <AntDesign name="search1" color={color} size={size}/>
              )
            }
          }
        }}/>

        <Tab.Screen name="Add" component={Add} options={{
          tabBarIcon : ({focused,color,size})=>{
            size = 36;
            if (focused=true){
              return(
                <FontAwesome name="plus-square-o" color={color} size={size}/>
              )
            }
          }
        }}
        
        />
        <Tab.Screen name="Activity" component={Activity} options={{
          tabBarIcon : ({focused,color,size})=>{
            size = 30;
            if (focused=true){
              return(
                <SimpleLineIcons name="heart" color={color} size={size}/>
              )
            }
          }
        }}
        
        />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon : ({focused,color,size})=>{
            size = 40;
            if (focused=true){
              return(
                <MaterialIcons name="person-outline" color={color} size={size}/>
              )
            }
          }
        }} 
        
        />
      </Tab.Navigator>
    )
  }

  return (
    <Container>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator}
          options={{title:null, 
            headerLeft: ()=>{
              return(
                <Image source={require("./assets/instagram.png")} style={{width:140,height:90}} />
              )
            },
            headerRight:()=>{
              return(
                <Image source={require("./assets/instaArrow.png")} style={{width:30, height:30, marginRight:20}}/>
              )
            }
          
          }}
        
        />  
        <Stack.Screen name = "Search" component={TabNavigator}
          options = {{title:"Screen"}
          
          }
        
        />
      </Stack.Navigator>
    </Container>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
