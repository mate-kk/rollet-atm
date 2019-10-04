import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, ThemeProvider, Text, Button } from 'react-native-elements';
import styled from 'styled-components/native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { appTheme } from '../../styles/appTheme';
import * as colours from '../../styles/colours';
import { NumberPad, CustomHeader } from '../../components';
import t from '../../common/Translator';
import * as Utils from '../../common/Utils';
import { approveAmount } from '../../store/actions';

/**
 * Styled Components
 */
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
 * Interfaces
 */
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  approveAmount: typeof approveAmount;
}

/**
 * Main screen of Customers use-case.
 * User may enter the amount to withdraw.
 * Basic validations are performed,
 */
class CustomerHomeComponent extends React.Component<Props> {
  state = {
    withdrawalAmount: '',
    message: '',
  };

  /**
   * Numeric button onPress handler.
   * @param amount User input, amount to withdraw.
   */
  onNumbPressed = (numPressed: string) => {
    let currentAmount = this.state.withdrawalAmount;
    let message = '';
    if (currentAmount.length < 1 && numPressed == '0') {
      message = t._('You cannot start with 0');
    } else if (currentAmount.length >= 6) {
      message = t._('Maximum withdrawal limit is 999.999');
    }

    let withdrawalAmount = `${this.state.withdrawalAmount}${numPressed}`;
    this.setState({
      message,
      withdrawalAmount,
    });
  };

  /**
   * Backspace button onPress handler.
   */
  onBackspacePressed = () => {
    let value = this.state.withdrawalAmount;
    let withdrawalAmount = value.slice(0, value.length - 1);
    this.setState({ withdrawalAmount });
  };

  /**
   * Proceed button onPress handler.
   * Prevalidates amount.
   */
  onProceedPressed = () => {
    if (!Utils.isValidAmount(parseInt(this.state.withdrawalAmount))) {
      this.setState({
        message: t._(
          'mallest possible bank note is 2000. Please Schange to a valid amount!',
        ),
      });
    } else {
      //this.props.navigation.navigate('CustomerPreview');
      this.props.approveAmount(parseInt(this.state.withdrawalAmount));
    }
  };

  /**
   * Renders given text (amount)
   * @param amount User input, amount to withdraw.
   */
  renderAmountText = (amount: string) => {
    return (
      <Text
        style={{ fontSize: 40, fontWeight: 'bold', color: colours.PRIMARY }}>
        {amount}
      </Text>
    );
  };

  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <CustomHeader
          title={t._('Cash Withdrawal')}
          onBackPressed={() => this.props.navigation.navigate('OnBoarding')}
        />
        <ContainerView>
          <View>
            <Card title={t._('Enter Withdrawal Amount (HUF)')}>
              <CenteredView>
                {this.renderAmountText(this.state.withdrawalAmount)}
              </CenteredView>
            </Card>
            <Message>{this.state.message}</Message>
          </View>
          <ButtonContainer>
            <Button
              title={t._('Approve Amount')}
              onPress={() => this.onProceedPressed()}></Button>
          </ButtonContainer>
        </ContainerView>
        <NumberPad
          onPress={numPressed => this.onNumbPressed(numPressed)}
          onBackSpace={() => this.onBackspacePressed()}
        />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const CustomerHome = connect(
  mapStateToProps,
  { approveAmount },
)(CustomerHomeComponent);

export { CustomerHome };
