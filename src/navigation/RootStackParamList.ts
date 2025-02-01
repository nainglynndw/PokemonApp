import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  PokemonList: undefined;
  PokemonDetail: {id: number | string};
  Profile: undefined;
  AddNewPokemon: undefined;
};

export type TUseNavigation<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
