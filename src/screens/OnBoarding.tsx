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

class OnBoarding extends React.Component<NavigationInjectedProps> {
  render() {
    return (
      //@ts-ignore
      <ThemeProvider theme={appTheme}>
        <ContainerView>
          <OnBoardingButton
            title={t._('For Customers')}
            onPress={() => this.props.navigation.navigate('CustomerHome')}
          />
          <Divider style={{backgroundColor: 'blue'}} />
          <OnBoardingButton
            title={t._('For Operators')}
            onPress={() => console.log('OPERATORS')}
          />
        </ContainerView>
      </ThemeProvider>
    );
  }
}

export {OnBoarding};
