import React from 'react';
import {Divider, ThemeProvider} from 'react-native-elements';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  NavigationInjectedProps,
} from 'react-navigation';

import {ContainerView} from '../components/ContainerView';
import {OnBoardingButton} from '../components/OnBoardingButton';
import {appTheme} from '../styles/appTheme';
import t from '../common/Translator';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class OnBoarding extends React.Component<Props> {
  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <ContainerView>
          <OnBoardingButton
            title={t._('For Customers')}
            onPress={() => this.props.navigation.navigate('CustomerRoute')}
          />
          <Divider style={{backgroundColor: 'blue'}} />
          <OnBoardingButton
            title={t._('For Operators')}
            onPress={() => this.props.navigation.navigate('OperatorRoute')}
          />
        </ContainerView>
      </ThemeProvider>
    );
  }
}

export {OnBoarding};
