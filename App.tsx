import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, StackHeaderProps } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { View, Text } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

interface HamburgerMenuProps {
  navigation: StackNavigationProp;
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  navigation
}: HamburgerMenuProps) => {
  return (
    <Icon
      color="#fff"
      name="menu"
      onPress={() => {
        navigation.dispatch(
          DrawerActions.openDrawer()
        )
      }}
    />
  );
}

const MyHeader: React.FC<StackHeaderProps> = ({
  navigation,
  styleInterpolator
}: StackHeaderProps) => {
  return (
    <Header
      leftComponent={<HamburgerMenu navigation={navigation} />}
      centerComponent={{ text: 'expo-expo', style:{ color: '#fff' }}}
    />
  );
}

const Screen1: React.FC = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Screen1</Text>
    </View>
  );
}

const Screen2: React.FC = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Screen2</Text>
    </View>
  );
}

const Stack1 = createStackNavigator(
  {
    Stack1: {
      screen: Screen1,
      navigationOptions: {
        title: "Screen1",
        header: MyHeader
      }
    }
  }
)

const Stack2 = createStackNavigator(
  {
    Stack2: {
      screen: Screen2,
      navigationOptions: {
        title: "Screen2",
        header: MyHeader
      }
    }
  }
)

const Drawer = createDrawerNavigator(
  {
    Screen1: {screen: Stack1},
    Screen2: {screen: Stack2},
  },
  {
    initialRouteName: 'Screen1'
  }
);

const App: React.FC = () => {
  const Layout = createAppContainer(Drawer);
  return (
    <Layout />
  );
}

export default App;
