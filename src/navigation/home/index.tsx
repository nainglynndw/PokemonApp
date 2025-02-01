import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonList from '../../screens/PokemonList';
import PokemonDetail from '../../screens/PokemonDetail';
import type {RootStackParamList} from '../RootStackParamList';
import Profile from '../../screens/Profile';
import ProfileHeader from './components/profileHeader';
import {useTheme} from '@react-navigation/native';
import AddNewPokemmon from '../../screens/AddNewPokemon';

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
          headerRight: () => <ProfileHeader navigation={navigation} />,
        })}
        name="PokemonList"
        component={PokemonList}
      />
      <HomeStack.Screen
        options={({navigation}) => ({
          title: 'Detail',
          headerRight: () => <ProfileHeader navigation={navigation} />,
        })}
        name="PokemonDetail"
        component={PokemonDetail}
      />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen
        options={{title: 'Add New Pokemon'}}
        name="AddNewPokemon"
        component={AddNewPokemmon}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
