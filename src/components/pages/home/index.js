import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import {
  FlatList, View, Text, TouchableOpacity, Alert
} from 'react-native';

import EventBus from '@modules/services/EventBus';

import GraphicService from '@modules/api/api-graphic';

import GraphicItem from '@components/molecules/graphic-item';

import Graphic from '@components/organisms/graphic';

import Page from '@components/templates/page';

import styles from './style';
import ShareGraphic from '../../organisms/share-graphic';
import Icon from '../../atoms/icon';
import { $primaryColor } from '../../../modules/colors';

export default function Home({ navigation }) {
  const [graphics, setGraphics] = useState([]);
  const [activeGraphic, setActiveGraphic] = useState({});
  const [indexGraphic, setIndexGraphic] = useState(0);
  const [loadingShare, setLoadingShare] = useState(false);

  const graphicRef = useRef();

  useEffect(() => {
    loadGraphics();
    EventBus.subscribe('reloadGraphics', loadGraphics);

    return () => EventBus.unsubscribe('reloadGraphics', loadGraphics);
  }, []);

  const loadGraphics = async () => {
    try {
      const { data } = await GraphicService.getGraphics();
      setGraphics(data);
      if (data.length) {
        setActiveGraphic(data[indexGraphic < 0 ? 0 : indexGraphic]);
      } else setActiveGraphic();
    } catch (e) {
      console.log(e.message);
    }
  };

  const onClickAdd = () => {
    navigation.navigate('Graphic');
  };

  const onRemove = useCallback(async (data, index) => {
    try {
      Alert.alert('', 'Você realmente deseja deletar esse gráfico ?', [
        { text: 'Não' },
        {
          text: 'Sim',
          onPress: async () => {
            await GraphicService.removeGraphic(data);
            if (index === indexGraphic) setIndexGraphic(indexGraphic - 1);
            loadGraphics();
          }
        }
      ]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onEdit = () => {
    setIndexGraphic();
    navigation.navigate('Graphic', { activeGraphic });
  };

  const onClickGraphic = (item, i) => {
    setActiveGraphic(item);
    setIndexGraphic(i);
  };

  return (
    <Page style={styles.container} isLogout>
      <View style={styles.header}>
        <Text numberOfLines={2} style={styles.title}>
          {activeGraphic?.titulo}
        </Text>
        {activeGraphic && (
          <View style={styles.headerRight}>
            <ShareGraphic
              viewRef={graphicRef}
              title={activeGraphic?.titulo}
              setLoadingShare={setLoadingShare}
            />
            <TouchableOpacity style={styles.buttonEdit} onPress={onEdit}>
              <Text style={styles.textEdit}>Editar</Text>
              <Icon name="chevronRight" color={$primaryColor} height={11} width={9} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Graphic graphic={activeGraphic} ref={graphicRef} loadingShare={loadingShare} />

      <FlatList
        data={graphics}
        style={styles.list}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={props => (
          <GraphicItem
            onRemove={onRemove}
            activeGraphic={activeGraphic}
            onClick={onClickGraphic}
            {...props}
          />
        )}
      />
      <TouchableOpacity onPress={onClickAdd} activeOpacity={0.8} style={styles.buttonAdd}>
        <Icon name="plus" color="#FFF" />
      </TouchableOpacity>
    </Page>
  );
}
