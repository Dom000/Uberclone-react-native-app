import React from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './Screens/HomeScreen';
import tw from 'twrnc';

import {Icon} from '@rneui/themed';
import RideScreen from './Screens/RideScreen';
import FoodScreen from './Screens/FoodScreen';

const imageb = {
  uri: 'https://img.freepik.com/free-vector/shiny-white-gray-background-with-wavy-lines_1017-25101.jpg',
};
const Stack = createNativeStackNavigator();
// const forFade = ({ current, next }) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: { opacity },
//     rightButtonStyle: { opacity },
//     titleStyle: { opacity },
//     backgroundStyle: { opacity },
//   };
// };
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <ImageBackground
          source={imageb}
          resizeMode="cover"
          style={tw`h-full`}>
          <SafeAreaView style={tw`h-full bg-white`}>
            <View
              style={tw`flex-row bg-white shadow-lg shadow-gray-500 py-2 z-50 rounded-b-[40px]`}>
              <Image
                style={{width: 130, height: 80, resizeMode: 'contain'}}
                source={require('./images/1200x600wa-removebg-preview.png')}
              />
              <View style={tw`flex-row pt-1  `}>
                <TouchableOpacity>
                  <Icon
                    name="user"
                    type="font-awesome"
                    color="#000000"
                    style={tw`m-6`}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="cog"
                    type="font-awesome"
                    color="#000000"
                    style={tw`m-6`}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="bell"
                    type="font-awesome"
                    color="#000000"
                    style={tw`m-6`}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Stack.Navigator
              >
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RideScreen"
                component={RideScreen}
                options={{headerShown: false,}}
              />
              <Stack.Screen
                name="FoodScreen"
                component={FoodScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </ImageBackground>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
