import React from 'react';
import {View} from 'react-native';
import {Card, ThemeProvider, Header, Text, Button} from 'react-native-elements';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {appTheme} from '../../styles/appTheme';
import * as colours from '../../styles/colours';
import {NumberPad} from '../../components/NumberPad';
import t from '../../common/Translator';

const ContainerView = styled.View`
  flex: 2;
  justify-content: space-between;
`;

const CenteredView = styled.View`
  align-items: center;
`;

const ButtonContainer = styled.View`
  padding: 15px;
`;

const Message = styled.Text`
  margin: 10px;
  margin-left: 15px;
  font-size: 15;
  color: red;
`;

/**
 * Main tab screen of Operators use-case.
 * Operator may check and edit the notes in the atm.
 */
class OperatorHome extends React.Component {
  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <Header centerComponent={{text: t._('Home')}} />
        <Text>OPERATOR HOME</Text>
      </ThemeProvider>
    );
  }
}

export {OperatorHome};
