import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps203762Navigator from '../features/Maps203762/navigator';
import Additem203761Navigator from '../features/Additem203761/navigator';
import Maps203757Navigator from '../features/Maps203757/navigator';
import UserProfile203753Navigator from '../features/UserProfile203753/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps203762: { screen: Maps203762Navigator },
Additem203761: { screen: Additem203761Navigator },
Maps203757: { screen: Maps203757Navigator },
UserProfile203753: { screen: UserProfile203753Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
