import React from 'react';
import { View, FlatList } from 'react-native';
import {
  ThemeProvider,
  Header,
  Card,
  Text,
  Button,
} from 'react-native-elements';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import styled from 'styled-components/native';

import { appTheme } from '../../styles/appTheme';
import t from '../../common/Translator';
import { Transaction } from '../../store/transactions/Types';
import * as Utils from '../../common/Utils';
import * as colours from '../../styles/colours';

/**
 * Styled Components
 */
const ContainerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: ${colours.PRIMARY};
`;

const CardContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
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
}

/**
 * Screen to display the details of the given historical transaction.
 */
class OperatorHistoryDetails extends React.Component<Props> {
  render() {
    let tr: Transaction = this.props.navigation.getParam('transaction');
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <View style={{ flex: 1 }}>
          <Header centerComponent={{ text: t._('Transaction Details') }} />
          <ContainerView>
            <Title>{Utils.timeStamp2ReadableFormat(tr.dateTime)}</Title>
            <Title>{`${tr.amount} Ft`}</Title>
            <Title>{`Status: ${tr.status}`}</Title>
          </ContainerView>
          <View>
            <View style={{ margin: 10 }}>
              <Text>Remaining notes</Text>
              <FlatList
                data={Object.keys(tr.remainingNotes)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Card>
                    <CardContent>
                      <Text>{`${item} Ft`}</Text>
                      <Text>{`${tr.remainingNotes[item]} pcs`}</Text>
                    </CardContent>
                  </Card>
                )}
                keyExtractor={(item: any, index: any) =>
                  `${item.amount}${index}`
                }
              />
            </View>
          </View>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      </ThemeProvider>
    );
  }
}

export { OperatorHistoryDetails };
