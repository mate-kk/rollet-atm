import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, Header } from 'react-native-elements';
import styled from 'styled-components/native';

import { appTheme } from '../../styles/appTheme';
import * as colours from '../../styles/colours';
import { AtmCard } from '../../components/';
import t from '../../common/Translator';
import * as Utils from '../../common/Utils';
import {
  increaseNoteAmount,
  decreaseNoteAmount,
} from '../../store/notes/Actions';
import { NoteState } from '../../store/notes/Types';
import { TransactionState } from '../../store/transactions/Types';
import { AppState } from '../../store';

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

interface Props {
  //navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  increaseAmount: typeof increaseNoteAmount;
  decreaseAmount: typeof decreaseNoteAmount;
  notes: NoteState;
}
/**
 * Main tab screen of Operators use-case.
 * Operator may check and edit the notes in the atm.
 */
class OperatorHomeComponent extends React.Component<Props> {
  render() {
    let { notes } = this.props;
    console.log('TUKK', this.props.notes);
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <Header centerComponent={{ text: t._('Home') }} />
        {Object.keys(notes).map((key, index) => {
          let amount = parseInt(key);
          let piece = notes[key];
          return (
            <AtmCard
              title={`${Utils.numberWithCommas(amount)} Ft`}
              contentLeft={`${piece} pc`}
              contentRight={`${Utils.numberWithCommas(amount * piece)} Ft`}
            />
          );
        })}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  console.log('OP HOME STATE', state);
  //console.log('NOTES', state);
  return {
    notes: state.noteState.notes,
    transactions: state.transactionState.transactions,
  };
};

const mapDispatchToProps = () => {
  return {
    increaseNoteAmount,
    decreaseNoteAmount,
  };
};

const OperatorHome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorHomeComponent);

export { OperatorHome };
