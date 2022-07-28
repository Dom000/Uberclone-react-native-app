import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../component/NavOptions';
import { Icon } from "@rneui/themed";
const image = {
  uri: 'https://img.freepik.com/free-vector/shiny-white-gray-background-with-wavy-lines_1017-25101.jpg',
};

const HomeScreen = () => {
  return (
    <View style={tw` bg-white` }>     
         <NavOptions />

      {/* <ImageBackground source={image} resizeMode="cover" style={tw`h-full`}>
        <View style={tw`flex-row bg-white shadow-lg shadow-gray-500 py-2 rounded-b-[45px]`}> 
          <Image
            style={{width: 130, height: 80, resizeMode: 'contain'}}
            source={require('../images/1200x600wa-removebg-preview.png')}
          />
         <View  style={tw`flex-row pt-1  `}>
         <TouchableOpacity>
            <Icon
             name='user'
             type='font-awesome'
             color='#000000' 
             style={tw`m-6`}
            />
           
            
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
             name='cog'
             type='font-awesome'
             color='#000000'
             style={tw`m-6`}

            />
            
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
             name='bell'
             type='font-awesome'
             color='#000000'
             style={tw`m-6`}

            />
            
          </TouchableOpacity>
         </View>
        </View>

      </ImageBackground> */}
    </View>
  );
};

export default HomeScreen;
