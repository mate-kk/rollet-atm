import React from 'react';
import { View } from 'react-native';
import { Card, Text, Button, Divider, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import * as Colors from '../styles/colours';

const CardTitle = styled.Text`
  font-size: 30;
`;

const SmallText = styled.Text`
  font-size: 16;
  margin-top: 5;
`;

interface AtmCardProps {
  title: string;
  contentLeft: string;
  contentRight: string;
  contolrs?: boolean;
  onIncPressed?: () => {};
  onDecPressed?: () => {};
}

const AtmCard = (props: AtmCardProps) => {
  return (
    <Card
      //containerStyle={{ marginBottom: 0 , paddingBottom: 0}}
      title={props.title}
      titleStyle={{ fontSize: 30 }}
      dividerStyle={{ backgroundColor: Colors.PRIMARY }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>{props.contentLeft}</Text>
          <SmallText>{'of notes'}</SmallText>
        </View>

        <Divider style={{ height: '100%', width: 1 }} />

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>{props.contentRight}</Text>
          <SmallText>{'in total'}</SmallText>
        </View>
      </View>

      <Divider
        style={{
          width: '100%',
          height: 0.5,
          backgroundColor: Colors.PRIMARY,
          marginTop: 20,
          marginBottom: 20,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button
            containerStyle={{ flex: 1, marginRight: 20 }}
            type="outline"
            icon={<Icon name="minus" size={15} color={Colors.PRIMARY} />}
          />
          <Button
            containerStyle={{ flex: 1, marginLeft: 20 }}
            type="outline"
            icon={<Icon name="plus" size={15} color={Colors.PRIMARY} />}
          />
        </View>
      </View>
    </Card>
  );
};

export { AtmCard };
