import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={[{ transform: [{ rotate: '45deg' }] }, props.style]}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.65702 27.658L0.343018 26.342L26.343 0.34198L27.657 1.65798L1.65702 27.658Z"
      fill={props.color || '#CCC'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.343 27.658L0.343018 1.65798L1.65702 0.34198L27.657 26.342L26.343 27.658Z"
      fill={props.color || '#CCC'}
    />
  </Svg>
);

export default SvgComponent;
