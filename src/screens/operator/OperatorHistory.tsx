import React from 'react';
import { FlatList } from 'react-native';
import { connect, ThunkDispatch } from 'react-redux';
import { ThemeProvider, Header } from 'react-native-elements';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { appTheme } from '../../styles/appTheme';
import { HistoryCard, CustomHeader } from '../../components';
import t from '../../common/Translator';
import * as Utils from '../../common/Utils';
import {
  increaseNoteAmount,
  decreaseNoteAmount,
} from '../../store/notes/Actions';
import { ValidNote } from '../../store/notes/Types';
import { TransactionState, Transaction } from '../../store/transactions/Types';
import { AppState } from '../../store';

/**
 * Interfaces
 */
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  increaseNoteAmount: typeof increaseNoteAmount;
  decreaseNoteAmount: typeof decreaseNoteAmount;
  transactions: TransactionState;
}

/**
 * Main tab screen of Operators use-case.
 * Operator may check and edit the notes in the atm.
 */
class OperatorHistoryComponent extends React.Component<Props> {
  renderItem = (key: string) => {
    let currentTransaction: Transaction = this.props.transactions[key];
    return (
      <HistoryCard
        status={currentTransaction.status}
        amount={`${Utils.numberWithSeparator(currentTransaction.amount)} Ft`}
        timeStamp={currentTransaction.dateTime}
        onPress={() =>
          this.props.navigation.navigate('OperatorHistoryDetails', {
            transaction: currentTransaction,
          })
        }
      />
    );
  };

  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <CustomHeader
          title={t._('Transaction history')}
          onBackPressed={() => this.props.navigation.navigate('OnBoarding')}
        />
        <FlatList
          data={Object.keys(this.props.transactions)}
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
    notes: state.noteState.notes,
    transactions: state.transactionState.transactions,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    increaseNoteAmount: (note: ValidNote) => dispatch(increaseNoteAmount(note)),
    decreaseNoteAmount: (note: ValidNote) => dispatch(decreaseNoteAmount(note)),
  };
};

const OperatorHistory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorHistoryComponent);

export { OperatorHistory };
