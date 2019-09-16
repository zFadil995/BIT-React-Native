import { Navigation } from 'react-native-navigation'
import Main from "./src/pages/main";
import Next from "./src/pages/next";


export default initialize = () => {
  Navigation.registerComponent(`com.abc-techgroup.Main`, () => Main);
  Navigation.registerComponent(`com.abc-techgroup.Next`, () => Next);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'com.abc-techgroup.Main',
              options: {
                topBar: {
                  title: {
                    text: 'Main'
                  },
                }
              }
            }
          }]
        }
      }
    });
  });
}