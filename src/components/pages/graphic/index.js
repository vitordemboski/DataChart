import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

import GraphicService from '@modules/api/api-graphic';

import Storage from '@modules/services/storage';
import EventBus from '@modules/services/EventBus';

import PageInput from '@components/templates/page-input';

import Button from '@components/atoms/button';
import Input from '@components/atoms/input';

import Dropdown from '@components/molecules/dropdown';
import InputTags from '@components/molecules/input-tags';

import styles from './style';
import { showMessageError } from '../../../modules/utils';
import { $gray3A } from '../../../modules/colors';

const items = [
  { label: 'Linha', value: 1 },
  { label: 'Barra', value: 2 },
  { label: 'Pizza', value: 4 }
];

export default function GraphicPage({ navigation, route }) {
  const [graphic, setGraphic] = useState(
    route.params.activeGraphic ? route.params.activeGraphic : { tipoGrafico: 1, cor: $gray3A }
  );

  const onRefresh = route.params?.onRefresh;

  const onChangeGraphic = useCallback((state) => {
    setGraphic(lastState => ({
      ...lastState,
      ...state
    }));
  }, []);

  const validGraphic = () => {
    if (
      !graphic.titulo
      || !graphic.campos
      || !graphic.valores
      || graphic.campos.split(',').length !== graphic.valores.split(',').length
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validGraphic()) {
      showMessageError('Preencha os campos');
      return;
    }
    const user = await Storage.getItem('user');
    const graphicPost = {
      ...graphic,
      borda: graphic.borda || 1,
      idUsuario: Number(user.UserId),
      tipoGrafico: graphic.tipoGrafico || 1,
      cor: graphic.cor && graphic.tipoGrafico === 1 ? graphic.cor.replace('#', '') : ''
    };

    try {
      await GraphicService.saveGraphic(graphicPost);
      navigation.goBack();
      if (onRefresh) onRefresh(!route.params.activeGraphic);
    } catch (e) {
      showMessageError('Dados inválidos');
      console.log(e);
    }
  };

  const getValuesString = (text, previusValues = '') => {
    let values = previusValues;
    if (previusValues) {
      values += `,${text}`;
    } else {
      values += text;
    }
    return values;
  };

  const removeValue = (index, previusValues) => {
    const values = previusValues.split(',');
    return values.filter((_, i) => index !== i).join(',');
  };

  return (
    <PageInput style={styles.container} isHeader>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}
      >
        <View style={styles.wrapper}>
          <View style={[styles.wrapperInput, { zIndex: 2 }]}>
            <Text style={styles.textInput}>Tipo de gráfico:</Text>
            <Dropdown
              items={items}
              value={graphic.tipoGrafico || 1}
              onChangeItem={item => onChangeGraphic({ tipoGrafico: item() })}
            />
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>Digite o nome para o gráfico:</Text>
            <Input
              placeholder="Finanças"
              value={graphic.titulo || ''}
              onChangeText={text => onChangeGraphic({ titulo: text })}
            />
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>Insira os campos:</Text>
            <InputTags
              onAddTag={text => onChangeGraphic({ campos: getValuesString(text, graphic.campos) })}
              values={graphic.campos ? graphic.campos.split(',') : []}
              onRemoveTag={index => onChangeGraphic({ campos: removeValue(index, graphic.campos) })}
              placeholder="Novo campo"
            />
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>Insira os valores:</Text>
            <InputTags
              onAddTag={text => onChangeGraphic({ valores: getValuesString(text, graphic.valores) })
              }
              values={graphic.valores ? graphic.valores.split(',') : []}
              onRemoveTag={index => onChangeGraphic({
                valores: removeValue(index, graphic.valores)
              })
              }
              keyboardType="numeric"
              placeholder="Novo valor"
            />
          </View>

          {graphic.tipoGrafico === 1 && (
            <>
              <View style={styles.wrapperInput}>
                <Text style={styles.textInput}>Digite um número para a largura da linha:</Text>
                <Input
                  placeholder="Largura"
                  value={graphic.borda?.toString() || ''}
                  keyboardType="numeric"
                  onChangeText={text => onChangeGraphic({ borda: text.replace(/[^0-9]/g, '') })}
                />
              </View>
              <View style={styles.wrapperInput}>
                <Text style={styles.textInput}>Selecione uma cor:</Text>
                <ColorPicker
                  discrete
                  thumbSize={40}
                  sliderSize={40}
                  color={graphic.cor}
                  onColorChangeComplete={cor => onChangeGraphic({ cor })}
                  swatchesLast={false}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <Button style={styles.button} text="SALVAR" onClick={handleSubmit} />
    </PageInput>
  );
}
