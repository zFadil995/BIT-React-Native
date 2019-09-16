import { Navigation } from 'react-native-navigation'
import Main from "./src/pages/main";
import Next from "./src/pages/next";


export default initialize = () => {
  Navigation.registerComponent(Main.routeName, () => Main);
  Navigation.registerComponent(Next.routeName, () => Next);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: Main.routeName,
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