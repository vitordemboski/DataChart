import React from 'react';
import icons from '../../../assets/svg';

const Icon = ({ name, ...props }) => {
  const Component = icons[name];
  return <Component {...props} />;
};

export default Icon;
