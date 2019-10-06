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
import {
  addTransaction,
  setTransaction,
  insufficientAmount,
} from '../../store/transactions/Actions';
import { Notes } from '../../store/notes/Types';
import { AppState } from '../../store';
import { getNotes } from '../../store/notes/Actions';

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
  addTransaction: typeof addTransaction;
  setTransaction: typeof setTransaction;
  insufficientAmount: typeof insufficientAmount;
  getNotes: typeof getNotes;
  notes: Notes;
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
    let withdrawalAmount = `${this.state.withdrawalAmount}`;
    if (currentAmount.length < 1 && numPressed == '0') {
      message = t._('You cannot start with 0');
    } else if (currentAmount.length >= 6) {
      message = t._(
        `Maximum withdrawal limit is ${Utils.numberWithSeparator(999999)} Ft`,
      );
    } else {
      withdrawalAmount = `${this.state.withdrawalAmount}${numPressed}`;
    }

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
    this.setState({ withdrawalAmount, message: '' });
  };

  /**
   * Proceed button onPress handler.
   * Prevalidates amount.
   */
  onProceedPressed = () => {
    let value = parseInt(this.state.withdrawalAmount) || 0;
    let notes = Utils.getBankNotes(value, this.props.notes);
    if (!notes) {
      this.props.insufficientAmount(value, this.props.notes);
      this.props.navigation.navigate('CustomerStatus', {
        title: 'Insufficient Amount',
        message: 'Please adjust the withdrawal amount!',
      });
    } else {
      this.props.setTransaction(value, notes);
      this.props.navigation.navigate('CustomerPreview');
    }
  };

  /**
   * Renders given text (amount)
   * @param amount User input, amount to withdraw.
   */
  renderAmountText = (amount: string) => {
    let text = amount === '' ? '' : Utils.numberWithSeparator(parseInt(amount));
    return (
      <Text
        style={{ fontSize: 40, fontWeight: 'bold', color: colours.PRIMARY }}>
        {text}
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

const mapStateToProps = (state: AppState) => {
  return {
    notes: state.noteState.notes,
    transactionState: state.transactionState.transactions,
  };
};

const CustomerHome = connect(
  mapStateToProps,
  {
    addTransaction,
    getNotes,
    setTransaction,
    insufficientAmount,
  },
)(CustomerHomeComponent);

export { CustomerHome };
