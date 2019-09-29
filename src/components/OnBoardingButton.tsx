import React from 'react';
import {Text} from 'react-native-elements';
import styled from 'styled-components/native';

const CustomButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
`;

interface OnBoardingButtonProps {
  title: string;
  onPress: () => void;
}

const OnBoardingButton = (props: OnBoardingButtonProps) => {
  return (
    <CustomButton onPress={props.onPress}>
      <Text>{props.title}</Text>
    </CustomButton>
  );
};

export {OnBoardingButton};
