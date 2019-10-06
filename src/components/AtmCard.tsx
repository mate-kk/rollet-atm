import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Card, Text, Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import * as Colors from '../styles/colours';

const SmallText = styled.Text`
  font-size: 16;
  margin-top: 5;
`;

interface AtmCardProps {
  title: string;
  contentLeft: string;
  contentRight: string;
  controls?: boolean;
  onIncPressed?: any;
  onDecPressed?: any;
}

const AtmCard: FunctionComponent<AtmCardProps> = ({
  title,
  contentLeft,
  contentRight,
  controls = false,
  onIncPressed,
  onDecPressed,
}) => {
  const renderControls = () => {
    if (!controls) return null;
    return (
      <View>
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
              onPress={onDecPressed}
            />
            <Button
              containerStyle={{ flex: 1, marginLeft: 20 }}
              type="outline"
              icon={<Icon name="plus" size={15} color={Colors.PRIMARY} />}
              onPress={onIncPressed}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <Card
      //containerStyle={{ marginBottom: 0 , paddingBottom: 0}}
      title={title}
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
          <Text>{contentLeft}</Text>
          <SmallText>{'of notes'}</SmallText>
        </View>

        <Divider style={{ height: '100%', width: 1 }} />

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>{contentRight}</Text>
          <SmallText>{'in total'}</SmallText>
        </View>
      </View>
      {renderControls()}
    </Card>
  );
};

export { AtmCard };
