import * as colours from './colours';
import * as dim from './dim';

const appTheme = {
  Button: {
    raised: true,
    titleStyle: {
      color: colours.WHITE,
      fontSize: dim.DEFAULT_BUTTON_FONT_SIZE,
    },
  },
  Text: {
    style: {
      fontSize: dim.DEFAULT_BUTTON_FONT_SIZE,
      fontWeight: 'bold',
      color: colours.PRIMARY,
    },
  },
  Header: {
    containerStyle: {
      backgroundColor: colours.PRIMARY,
      justifyContent: 'space-around',
    },
    centerComponent: {style: {color: colours.WHITE}},
    statusBarProps: {
      barStyle: 'light-content',
      translucent: true,
      backgroundColor: 'transparent',
    },
    barStyle: 'light-content',
  },
};

export {appTheme};
