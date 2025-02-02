import {Alert, Image, TextInput, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import AppContainer from '../../components/AppContainer';
import AppText from '../../components/AppText';
import {useStyle} from './styles';
import AppButton from '../../components/AppButton';
import {
  launchCamera,
  launchImageLibrary,
  type ImageLibraryOptions,
} from 'react-native-image-picker';

const AddNewPokemmon = () => {
  const styles = useStyle();
  const [pokemonName, setPokemonName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const onPressSubmit = useCallback(() => {
    Alert.alert(
      'Submission failed',
      'Pokemon API does not support to submit a new pokemon !_!.',
    );
  }, []);

  const imagePickerOptions: ImageLibraryOptions = useMemo(
    () => ({
      mediaType: 'photo',
      quality: 1,
    }),
    [],
  );

  const onChooseGallery = useCallback(async () => {
    const result = await launchImageLibrary(imagePickerOptions);
    if (result?.assets) {
      setImage(result.assets[0]?.uri ?? null);
    }
  }, [imagePickerOptions]);

  const onChooseCamera = useCallback(async () => {
    const result = await launchCamera(imagePickerOptions);
    if (result?.assets) {
      setImage(result.assets[0]?.uri ?? null);
    }
  }, [imagePickerOptions]);

  const onPressChooseImage = useCallback(() => {
    Alert.alert('Choose image', 'Please choose image source', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Camera',
        onPress: onChooseCamera,
      },
      {
        text: 'Gallery',
        onPress: onChooseGallery,
      },
    ]);
  }, [onChooseCamera, onChooseGallery]);

  return (
    <AppContainer>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{uri: image}} style={styles.img} />
        ) : (
          <AppText>Image! ...</AppText>
        )}
        <AppButton label="Choose image" onPress={onPressChooseImage} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon name"
        value={pokemonName}
        onChangeText={setPokemonName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon weight"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon height"
        value={height}
        onChangeText={setHeight}
      />

      <AppButton onPress={onPressSubmit} label="Submit" />
    </AppContainer>
  );
};

export default AddNewPokemmon;
