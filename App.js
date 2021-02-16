import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStory from './components/ReadStory'
import WriteStory from './components/WriteStory'
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'

export default function App() {
  return (
      <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:WriteStory,
  ReadStory:ReadStory,
},{
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcon:({color}) => {
      const routeName = navigation.state.routeName
      if(routeName === "WriteStory"){
        return(
          <MaterialCommunityIcons name="typewriter" size={24} color="black" />
        )
      }else if(routeName === "ReadStory"){
        return(
          <FontAwesome5 name="book-reader" size={24} color="black" />
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)
