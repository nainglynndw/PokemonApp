import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  PokemonList: undefined;
  PokemonDetail: {id: number | string};
  Favourite: undefined;
  AddNewPokemon: undefined;
  Search: undefined;
};

export type TUseNavigation<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
