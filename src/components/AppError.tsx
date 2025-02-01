import {StyleSheet} from 'react-native';
import React, {memo, type FC} from 'react';
import AppContainer from './AppContainer';
import AppText from './AppText';
import AppButton from './AppButton';

interface Props {
  onReload?: () => void;
}

const AppError: FC<Props> = ({onReload}) => {
  return (
    <AppContainer style={styles.container}>
      <AppText>Something went wrong</AppText>
      <AppButton onPress={onReload} label="Reload" />
    </AppContainer>
  );
};

export default memo(AppError);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
