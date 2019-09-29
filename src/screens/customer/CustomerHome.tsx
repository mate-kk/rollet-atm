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

class CustomerHome extends React.Component {
  state = {
    withdrawalAmount: '',
    message: '',
  };

  onNumbPressed = (numPressed: string) => {
    let currentAmount = this.state.withdrawalAmount;
    if (currentAmount.length < 1 && numPressed == '0') {
      this.setState({message: t._('You cannot start with 0')});
      return;
    }
    if (currentAmount.length >= 6) {
      this.setState({message: t._('Maximum withdrawal limit is 999.999')});
      return;
    }

    let withdrawalAmount = `${this.state.withdrawalAmount}${numPressed}`;
    this.setState({
      message: '',
      withdrawalAmount,
    });
  };

  onBackspacePressed = () => {
    let value = this.state.withdrawalAmount;
    let withdrawalAmount = value.slice(0, value.length - 1);
    this.setState({withdrawalAmount});
  };

  onProceedPressed = () => {
    console.log(parseInt(this.state.withdrawalAmount) % 1000);
    if (!this.isValidAmount(parseInt(this.state.withdrawalAmount))) {
      this.setState({
        message: t._(
          'Smallest possible bank note is 2000. Please change to a valid amount!',
        ),
      });
    }
  };

  /**
   * Prevalidate give amount. It needs to be higher than 2000, and divisible by 1000.
   * @param amount User input, amount to withdraw.
   * @returns True if valid, false otherwise.
   */
  isValidAmount = (amount: number): boolean => {
    if (amount < 2000) return false;
    if (amount % 1000 != 0 && amount % 1000 < 1000) return false;
    return true;
  };

  amountText = (text: string) => {
    return (
      <Text style={{fontSize: 40, fontWeight: 'bold', color: colours.PRIMARY}}>
        {text}
      </Text>
    );
  };

  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <Header centerComponent={{text: t._('Home')}} />
        <ContainerView>
          <View>
            <Card title={t._('Enter Withdrawal Amount (HUF)')}>
              <CenteredView>
                {this.amountText(this.state.withdrawalAmount)}
              </CenteredView>
            </Card>
            <Message>{this.state.message}</Message>
          </View>
          <ButtonContainer>
            <Button
              title={t._('Proceed')}
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

export {CustomerHome};
