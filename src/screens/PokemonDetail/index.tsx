import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, type FC} from 'react';
import {usePokemonDetailsQuery} from '../../api/usePokemonApi';
import {AppSkeletonDetailLoading} from '../../components/AppSkeletonLoading';
import AppError from '../../components/AppError';
import type {RootStackParamList} from '../../navigation/RootStackParamList';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppText from '../../components/AppText';
import {useStyle} from './styles';
import {getItem, removeItem, setItem} from '../../utils/storage';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'PokemonDetail',
  'HomeStack'
>;

const PokemonDetail: FC<Props> = Props => {
  const styles = useStyle();
  const [isFav, setIsFav] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const {data, isLoading, isError, refetch} = usePokemonDetailsQuery(
    Props.route.params.id,
  );

  useEffect(() => {
    if (data?.name) {
      setIsFav(getItem(`fav_${data.name}`) === 'true');
    }
  }, [data?.name]);

  if (isLoading) {
    return <AppSkeletonDetailLoading />;
  }

  if (isError || !data) {
    return <AppError onReload={refetch} />;
  }

  const name = data.name;
  const imageUrl =
    data.sprites.other.home.front_default ?? data.sprites.front_default;
  const statsMap = new Map(
    data.stats.map(stat => [stat.stat.name, stat.base_stat]),
  );
  const hpStat = statsMap.get('hp') ?? 'Hidden';
  const attackStat = statsMap.get('attack') ?? 'Hidden';
  const defenseStat = statsMap.get('defense') ?? 'Hidden';
  const speedStat = statsMap.get('speed') ?? 'Hidden';
  const specialDefenseStat = statsMap.get('special-defense') ?? 'Hidden';
  const specialAttackStat = statsMap.get('special-attack') ?? 'Hidden';
  const cp =
    Number(hpStat) +
    Number(attackStat) +
    Number(defenseStat) +
    Number(speedStat) +
    Number(specialAttackStat) +
    Number(specialDefenseStat);
  const cpStat = isNaN(cp) ? 'Hidden' : cp;

  const favIcon = isFav
    ? require('../../assets/images/favourite-fill.png')
    : require('../../assets/images/favourite-outline.png');

  const onChangeFav = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setIsFav(prev => {
      if (prev) {
        removeItem(`fav_${name}`);
      } else {
        setItem(`fav_${name}`, 'true');
      }
      return !prev;
    });
    setTimeout(() => setIsProcessing(false), 500);
  };

  return (
    <ScrollView>
      <View style={styles.innerContainer}>
        <View style={styles.contentSheet}>
          <AppText style={styles.name}>{name}</AppText>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <AppText style={styles.stat}>HP = {hpStat}</AppText>
            </View>
            <View style={styles.statBox}>
              <AppText style={styles.stat}>ATTACK = {attackStat}</AppText>
            </View>
            <View style={styles.statBox}>
              <AppText style={styles.stat}>DEFENSE = {defenseStat}</AppText>
            </View>
            <View style={styles.statBox}>
              <AppText style={styles.stat}>SPEED = {speedStat}</AppText>
            </View>
            <View style={styles.statBox}>
              <AppText style={styles.stat}>
                S-ATTACK = {specialAttackStat}
              </AppText>
            </View>
            <View style={styles.statBox}>
              <AppText style={styles.stat}>
                S-DEFENSE = {specialDefenseStat}
              </AppText>
            </View>
          </View>
        </View>

        <AppText style={styles.cpStat}>CP - {cpStat}</AppText>
        {imageUrl && <Image style={styles.image} source={{uri: imageUrl}} />}
        <TouchableOpacity
          disabled={isProcessing}
          style={styles.favIconContainer}
          onPress={onChangeFav}>
          <Image style={styles.favIcon} source={favIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PokemonDetail;
