import React from 'react';
import { FlatList } from 'react-native';
import { connect, ThunkDispatch } from 'react-redux';
import { Card, ThemeProvider, Text, Button } from 'react-native-elements';
import styled from 'styled-components/native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import { appTheme } from '../../styles/appTheme';
import { CustomHeader } from '../../components/AtmHeader';
import t from '../../common/Translator';
import { AppState } from '../../store';
import { ValidNote, Notes } from '../../store/notes/Types';
import * as Utils from '../../common/Utils';
import { AtmCard } from '../../components';
import { Transaction } from '../../store/transactions/Types';
import { addTransaction } from '../../store/transactions/Actions';
import { setNewNotes } from '../../store/notes/Actions';

/**
 * Styled Components
 */
const CenteredView = styled.View`
  align-items: center;
`;

const ButtonContainer = styled.View`
  padding-top: 15px;
`;

/**
 * Interfaces
 */
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  transaction: Transaction;
  notes: Notes;
  addTransaction: typeof addTransaction;
  setNewNotes: typeof setNewNotes;
}

/**
 * Main screen of Customers use-case.
 * User may enter the amount to withdraw.
 * Basic validations are performed,
 */
class CustomerPreviewComponent extends React.Component<Props> {
  /**
   * Proceed button onPress handler.
   */
  onProceedPressed = () => {
    let { amount, notes } = this.props.transaction;
    let remainingNotes = Utils.subtractNotes(this.props.notes, notes);
    this.props.addTransaction(amount, notes, remainingNotes);
    this.props.setNewNotes(remainingNotes);
    this.props.navigation.navigate('CustomerStatus', {
      message: 'Transaction Accepted',
      goto: 'OnBoarding',
    });
  };

  renderItem = (key: string) => {
    let bankNote = parseInt(key) as ValidNote;
    let piece = this.props.transaction.notes[key];
    return (
      <AtmCard
        title={`${Utils.numberWithSeparator(bankNote)} Ft`}
        contentLeft={`${piece} pc`}
        contentRight={`${Utils.numberWithSeparator(bankNote * piece)} Ft`}
      />
    );
  };

  renderSum = () => {
    return (
      <Card
        title={t._('TOTAL AMOUNT (HUF)')}
        containerStyle={{ marginBottom: 10 }}>
        <CenteredView>
          <Text>{this.props.transaction.amount}</Text>
        </CenteredView>
        <ButtonContainer>
          <Button
            title={t._('Accept and Withdraw')}
            onPress={() => this.onProceedPressed()}></Button>
        </ButtonContainer>
      </Card>
    );
  };

  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <CustomHeader
          title={t._('Bank notes')}
          onBackPressed={() => this.props.navigation.goBack()}
        />
        {this.renderSum()}
        <FlatList
          data={Object.keys(this.props.transaction.notes)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item: any, index: any) => `${item.amount}${index}`}
        />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    transaction: state.transactionState.currentTransaction,
    notes: state.noteState.notes,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    addTransaction: (amount: number, notes: Notes, remainingNotes: Notes) =>
      dispatch(addTransaction(amount, notes, remainingNotes)),
    setNewNotes: (notes: Notes) => dispatch(setNewNotes(notes)),
  };
};

const CustomerPreview = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerPreviewComponent);

export { CustomerPreview };
