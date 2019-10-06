import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as colours from '../styles/colours';
import * as dim from '../styles/dim';

const RowView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

const ContainerView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const NumberView = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  border-color: ${colours.PRIMARY};
  border-width: 0.5;
`;

const EmptyView = styled.View`
  flex: 1;
  border-color: ${colours.PRIMARY};
  border-width: 0.5;
`;

const NumberText = styled.Text`
  font-size: ${dim.NUMPAD_BUTTON_FONT_SIZE};
  font-weight: bold;
  color: ${colours.PRIMARY};
`;

interface NumberButtonProps {
  onPress: (numPressed: string) => void;
  value: string;
}
const NumberButton = (props: NumberButtonProps) => {
  return (
    <NumberView onPress={() => props.onPress(props.value)}>
      <NumberText>{props.value}</NumberText>
    </NumberView>
  );
};

interface NumberPadProps {
  onPress: (numPressed: string) => void;
  onBackSpace: () => void;
}

const NumberPad = (props: NumberPadProps) => {
  const onPress = (numPressed: string) => {};

  return (
    <ContainerView>
      <RowView>
        <NumberButton value={'1'} onPress={() => props.onPress('1')} />
        <NumberButton value={'2'} onPress={() => props.onPress('2')} />
        <NumberButton value={'3'} onPress={() => props.onPress('3')} />
      </RowView>
      <RowView>
        <NumberButton value={'4'} onPress={() => props.onPress('4')} />
        <NumberButton value={'5'} onPress={() => props.onPress('5')} />
        <NumberButton value={'6'} onPress={() => props.onPress('6')} />
      </RowView>
      <RowView>
        <NumberButton value={'7'} onPress={() => props.onPress('7')} />
        <NumberButton value={'8'} onPress={() => props.onPress('8')} />
        <NumberButton value={'9'} onPress={() => props.onPress('9')} />
      </RowView>
      <RowView>
        <EmptyView />
        <NumberButton value={'0'} onPress={() => props.onPress('0')} />
        <NumberView onPress={() => props.onBackSpace()}>
          <Icon name="backspace" size={30} color={colours.PRIMARY} />
        </NumberView>
      </RowView>
    </ContainerView>
  );
};

export { NumberPad };
