import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import GraphicService from '@modules/api/api-graphic';
import GraphicItem from '@components/molecules/graphic-item';
import Page from '@components/templates/page';
import Graphic from '@components/organisms/graphic';
import styles from './style';

/*
{
    "borda": 5,
    "campos": "Janeiro,Fevereiro",
    "cor": "9e9e9e",
    "id": 8,
    "idUsuario": 2,
    "tipoGrafico": 1,
    "borda": 5,
    "campos": "Janeiro,Fevereiro,março",
    "cor": "",
    "id": 3,
    "idUsuario": 2,
    "tipoGrafico": 2,
    "titulo": "Resultados",
    "valores": "100,121,40",
  }
*/

export default function Home() {
  const [graphics, setGraphics] = useState([]);
  const [activeGraphic, setActiveGraphics] = useState({});

  useEffect(() => {
    const load = async () => {
      const { data } = await GraphicService.getGraphics();
      setGraphics(data);
      if (data.length) {
        setActiveGraphics(data[0]);
      }
    };
    load();
  }, []);

  return (
    <Page style={styles.container}>
      <View style={styles.header}>
        <Text numberOfLines={2} style={styles.title}>
          {activeGraphic?.titulo}
        </Text>
      </View>

      <Graphic graphic={activeGraphic} />

      <FlatList
        data={graphics}
        style={styles.list}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={props => (
          <GraphicItem activeGraphic={activeGraphic} onClick={setActiveGraphics} {...props} />
        )}
      />
    </Page>
  );
}
