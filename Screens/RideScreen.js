import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  FlatList,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {GOOGLE_MAPS_APIKEY} from '../secr';
// import {Icon} from '@rneui/themed';
// import Bottomsheet from '../component/Bottomsheet';
import {useCallback, useMemo, useRef, useState} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const datas = [
  {
    id: 234,
    title: 'Get a ride now',
    image:
      'https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg',
    screen: 'RideScreen',
  },
  {
    id: 2345,
    title: 'Order Your Meal now',
    image:
      'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg',
    screen: 'FoodScreen',
  },
];
export default function RideScreen() {
  const [message, setMessage] = useState(true);
  const bottomSheetModalRef = useRef(null);

  const openModal = () => {
    bottomSheetModalRef.current?.present();
  };
  const closeModal = () => {
    bottomSheetModalRef.current?.close();
  };
  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(true)

  const imageb = {
    uri: 'https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg',
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <KeyboardAvoidingView>
          <View style={tw` bg-white `}>
            <ImageBackground
              source={imageb}
              resizeMode="cover"
              style={tw`h-full `}>
              <View>
                {show ? (
                  <>
                    <View style={tw` m-2 bg-white flex-row justify-between`}>
                      <TextInput
                        onChangeText={e => {
                          setMessage(e);
                        }}
                        placeholder="Where from?"
                        placeholderTextColor="#000"
                        style={tw`h-[40px] text-black w-[80%] m-2 rounded-full pl-3 bg-gray-200`}
                      />
                      {/* <GooglePlacesAutocomplete
                        placeholder="Where from?"
                        
                        styles={{
                          container: {
                            flex: 0,
                            padding: 7,
                            width: '80%',
                            justifyContent: 'center',
                            color: 'grey',
                          },
                          textInput: {
                            fontSize: 18,
                            color: 'grey',
                            backgroundColor: '#F0F2F5',
                            borderRadius: 10,
                            fontStyle: 'italic',
                          },
                        }}
                        // query={{
                        //   key: GOOGLE_MAPS_APIKEY,
                        //   language: 'en',
                        // }}
                        // nearbyPlacesAPI="GooglePlacesSearch"
                        // debounce={400}
                      /> */}
                      {message === '' ? (
                        <TouchableOpacity
                          onPress={() => {
                            setShow(false), closeModal();
                          }}>
                          <Icon
                            style={tw`m-4`}
                            name="times"
                            type="font-awesome"
                            color="#000000"
                            size={20}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            openModal();
                            Keyboard.dismiss();
                          }}>
                          <Icon
                            style={tw`m-4`}
                            name="paper-plane"
                            size={20}
                            color="#000000"
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </>
                ) : (
                  <>
                    <View style={tw`bg-white rounded-full w-10 m-3`}>
                      <TouchableOpacity
                        onPress={() => {
                          setShow(true);
                        }}>
                        <Icon
                          style={tw`m-2`}
                          name="search"
                          size={20}
                          color="#000000"
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
              <BottomSheetModal
                enablePanDownToClose={true}
                // enableHandlePanningGesture={true}
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}>
                <ScrollView>
                <Text style={tw`text-black`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
                </ScrollView>
              </BottomSheetModal>
            </ImageBackground>
          </View>
        </KeyboardAvoidingView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
