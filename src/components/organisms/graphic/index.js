import React from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart, PieChart, BarChart } from 'react-native-chart-kit';
import { $primaryColor, $background } from '@modules/colors';
import styles from './style';

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

const Graphic = ({ graphic }) => {
  if (!graphic?.id) return <View style={styles.container} />;

  const GraphicElement = getGraphicByType(graphic.tipoGrafico);

  return (
    <View style={styles.container}>
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
        height={height / 1.8}
        chartConfig={{
          backgroundColor: $background,
          backgroundGradientFrom: $background,
          backgroundGradientTo: $background,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: $primaryColor
          }
        }}
        bezier
        style={styles.graphic}
      />
    </View>
  );
};

export default Graphic;
