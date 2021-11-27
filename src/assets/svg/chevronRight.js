import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.70697 19.707L0.292969 18.293L8.58597 10L0.292969 1.707L1.70697 0.292999L11.414 10L1.70697 19.707Z"
      fill={props.color || '#CCC'}
    />
  </Svg>
);

export default SvgComponent;
