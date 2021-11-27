import React, { forwardRef } from 'react';
import {
  Dimensions, View, Text, ActivityIndicator
} from 'react-native';
import { LineChart, PieChart, BarChart } from 'react-native-chart-kit';
import { $background, $gray3A } from '@modules/colors';
import styles from './style';
import { getHexColorGraphic, getHexToRgbColor } from '../../../modules/utils';

const { height, width } = Dimensions.get('window');

const getGraphicByType = (tipo) => {
  switch (tipo) {
    case 0:
      return LineChart;
    case 2:
      return BarChart;
    case 4:
      return PieChart;
    default:
      return LineChart;
  }
};

const Graphic = ({ graphic, loadingShare }, ref) => {
  if (!graphic?.id) return <View style={styles.container} />;

  const color = getHexColorGraphic(graphic.cor);

  const GraphicElement = getGraphicByType(graphic.tipoGrafico);
  const rgb = getHexToRgbColor(color);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper} ref={ref} collapsable={false}>
        {loadingShare && (
          <Text
            style={{
              position: 'absolute',
              top: 15,
              zIndex: 20,
              width: width - 24,
              textAlign: 'center',
              color: $gray3A
            }}
          >
            {graphic?.titulo}
          </Text>
        )}
        <GraphicElement
          data={{
            labels: graphic.campos.split(','),
            datasets: [
              {
                data: graphic.valores.split(',')
              }
            ]
          }}
          width={width - 24}
          height={height / (loadingShare ? 2.5 : 1.9)}
          chartConfig={{
            backgroundColor: $background,
            backgroundGradientFrom: $background,
            backgroundGradientTo: $background,
            color: (opacity = 1) => `rgba(${rgb}, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(58, 58, 58, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              strokeWidth: graphic?.borda?.toString() || '2',
              stroke: color
            }
          }}
          bezier
          style={[styles.graphic, { paddingTop: loadingShare ? 60 : 0 }]}
        />
      </View>
      {loadingShare && (
        <View
          style={{
            backgroundColor: '#CCC',
            position: 'absolute',
            width: '90%',
            height: '85%',
            zIndex: 25,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
          }}
        >
          <ActivityIndicator size={60} color="#FFF" />
        </View>
      )}
    </View>
  );
};

export default forwardRef(Graphic);
