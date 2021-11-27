import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.3333 8.5H2.66667C1.74619 8.5 1 9.24619 1 10.1667V16C1 16.9205 1.74619 17.6667 2.66667 17.6667H14.3333C15.2538 17.6667 16 16.9205 16 16V10.1667C16 9.24619 15.2538 8.5 14.3333 8.5Z"
      stroke="#CCCCCC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.33331 8.5V5.16667C4.33331 4.0616 4.7723 3.00179 5.5537 2.22039C6.3351 1.43899 7.39491 1 8.49998 1C9.60505 1 10.6649 1.43899 11.4463 2.22039C12.2277 3.00179 12.6666 4.0616 12.6666 5.16667V8.5"
      stroke="#CCCCCC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
