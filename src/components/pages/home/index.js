import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import {
  FlatList, View, Text, TouchableOpacity, Alert
} from 'react-native';

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
  const [idLastGraphic, setIdLastGraphic] = useState();
  const [loadingShare, setLoadingShare] = useState(false);

  const graphicRef = useRef();

  useEffect(() => {
    loadGraphics();
  }, []);

  const setActiveGraphicById = useCallback((array, isNew) => {
    if (isNew) {
      setActiveGraphic(array[array.length - 1]);
      setIdLastGraphic(array[array.length - 1].id);
      return;
    }
    if (idLastGraphic) {
      const item = array.filter(a => a.id === idLastGraphic)[0];
      if (item) {
        setActiveGraphic(item);
      } else setActiveGraphic(array[0]);
    } else setActiveGraphic(array[0]);
  }, [idLastGraphic]);

  const loadGraphics = useCallback(
    async (isNew) => {
      try {
        const { data } = await GraphicService.getGraphics();
        setGraphics(data);
        if (data.length) {
          setActiveGraphicById(data, isNew);
        } else setActiveGraphic({});
      } catch (e) {
        console.log(e.message);
      }
    },
    [idLastGraphic]
  );

  const onClickAdd = () => {
    navigation.navigate('Graphic', { onRefresh: loadGraphics });
  };

  const onRemove = useCallback(async (data) => {
    try {
      Alert.alert('', 'Você realmente deseja deletar esse gráfico ?', [
        { text: 'Não' },
        {
          text: 'Sim',
          onPress: async () => {
            await GraphicService.removeGraphic(data);
            loadGraphics();
          }
        }
      ]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onEdit = () => {
    navigation.navigate('Graphic', { activeGraphic, onRefresh: loadGraphics });
  };

  const onClickGraphic = (item) => {
    setActiveGraphic(item);
    setIdLastGraphic(item.id);
  };

  return (
    <Page style={styles.container} isLogout>
      <View style={styles.header}>
        <Text numberOfLines={2} style={styles.title}>
          {activeGraphic?.titulo}
        </Text>
        {activeGraphic && activeGraphic.titulo && (
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
