import React from 'react';
import {Icon, Header, Button} from 'react-native-elements';

interface HeaderProps {
  title: string;
  onBackPressed: () => {};
}

/**
 * Main tab screen of Operators use-case.
 * Operator may check and edit the notes in the atm.
 */
class CustomHeader extends React.Component<HeaderProps> {
  onBackPressed = () => {
    this.props.onBackPressed();
  };

  renderBackButton = () => {
    return (
      <Button
        type={'clear'}
        icon={<Icon name="chevron-left" size={30} color="white" />}
        onPress={() => this.onBackPressed()}
      />
    );
  };

  render() {
    return (
      <Header
        leftComponent={this.renderBackButton()}
        centerComponent={{text: this.props.title}}
      />
    );
  }
}

export {CustomHeader};
