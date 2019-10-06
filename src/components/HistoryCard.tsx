import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import styled from 'styled-components/native';

import * as Colors from '../styles/colours';
import * as Utils from '../common/Utils';
import { TransactionStatus } from '../store/transactions/Types';

const ContainerView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SmallText = styled.Text`
  font-size: 14;
  margin-top: 5;
`;

interface HistoryCardProps {
  amount?: string;
  timeStamp: number;
  onPress?: any;
  status?: TransactionStatus;
}

const HistoryCard: FunctionComponent<HistoryCardProps> = ({
  amount,
  timeStamp,
  onPress,
  status = TransactionStatus.SUCCESS,
}) => {
  const renderTitle = () => {
    return (
      <ContainerView>
        <SmallText>{Utils.timeStamp2ReadableFormat(timeStamp)}</SmallText>
        <SmallText>{amount}</SmallText>
      </ContainerView>
    );
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Card
        containerStyle={{
          borderColor: status === TransactionStatus.SUCCESS ? 'green' : 'red',
        }}
        title={renderTitle()}
        dividerStyle={{ backgroundColor: Colors.PRIMARY }}></Card>
    </TouchableOpacity>
  );
};

export { HistoryCard };
