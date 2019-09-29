import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

const ContainerView = (props: any) => {
  return <Container style={props.style}>{props.children}</Container>;
};

export {ContainerView};
