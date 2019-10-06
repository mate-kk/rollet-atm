import React from 'react';
import { ThemeProvider, Button } from 'react-native-elements';
import styled from 'styled-components/native';

import { appTheme } from '../../styles/appTheme';
import * as colours from '../../styles/colours';
import t from '../../common/Translator';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

/**
 * Styled Components
 */
const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: ${colours.PRIMARY};
`;

const SubTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: ${colours.PRIMARY};
`;

const Space = styled.View`
  margin-bottom: 50px;
`;

/**
 * Interfaces
 */
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

/**
 * Screen to display feedback fot the user about the withdrawal.
 */
class CustomerStatus extends React.Component<Props> {
  onPress = () => {
    let goto = this.props.navigation.getParam('goto');
    if (!goto) {
      this.props.navigation.goBack();
    } else {
      this.props.navigation.navigate(goto);
    }
  };
  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <ContainerView>
          <Title>{this.props.navigation.getParam('title')}</Title>
          <SubTitle>{this.props.navigation.getParam('message')}</SubTitle>
          <Space />
          <Button onPress={() => this.onPress()} title={t._('Dismiss')} />
        </ContainerView>
      </ThemeProvider>
    );
  }
}

export { CustomerStatus };
