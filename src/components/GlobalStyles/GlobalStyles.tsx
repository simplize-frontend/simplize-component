import React from 'react';
import '../../styles/_global.scss';

interface Props {
  children: React.ReactNode;
}

const GlobalStyles: React.FC<Props> = (props): JSX.Element => {
  const { children } = props;

  return <>{children}</>;
};

export default GlobalStyles;
