import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from "@rneui/themed";
import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavOptions = () => {
  const navigation = useNavigation();

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

  return (
    <FlatList
      style={tw`mt-18`}
      data={datas}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View  style={tw`p-1.5 justify-center items-center flex`}>
          <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
            <Image
              style={{
                width: 300,
                height: 200,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={{uri: item.image}}
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: 'black',
              padding: 20,
              position: 'relative',
              bottom: 58.7,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              width: 300,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {item.title}
            </Text>
            <Icon name="long-arrow-right" type="font-awesome" color="#ffffff" />
          </View>
        </View>
      )}
    />
  );
};

export default NavOptions;
