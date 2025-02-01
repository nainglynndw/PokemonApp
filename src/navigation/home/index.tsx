import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonList from '../../screens/PokemonList';
import PokemonDetail from '../../screens/PokemonDetail';
const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="PokemonList" component={PokemonList} />
      <HomeStack.Screen name="PokemonDetail" component={PokemonDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
