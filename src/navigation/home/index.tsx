import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonList from '../../screens/PokemonList';
import PokemonDetail from '../../screens/PokemonDetail';
import type {RootStackParamList} from '../RootStackParamList';
import Favourite from '../../screens/Favourite';
import HeaderRight from './components/HeaderRight';
import {useTheme} from '@react-navigation/native';
import AddNewPokemmon from '../../screens/AddNewPokemon';
import Search from '../../screens/Search';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.background},
      }}>
      <HomeStack.Screen
        options={({navigation}) => ({
          title: 'Pokomons',
          headerStyle: {backgroundColor: colors.primary},
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
        name="PokemonList"
        component={PokemonList}
      />
      <HomeStack.Screen
        options={{
          title: 'Details',
        }}
        name="PokemonDetail"
        component={PokemonDetail}
      />
      <HomeStack.Screen name="Favourite" component={Favourite} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen
        options={{title: 'Add New Pokemon'}}
        name="AddNewPokemon"
        component={AddNewPokemmon}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
