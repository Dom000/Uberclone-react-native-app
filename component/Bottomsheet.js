// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   StyleSheet,
//   Animated,
//   Dimensions,
// } from 'react-native';
// import {useCallback, useMemo, useRef, useState, useEffect} from 'react';
// import {PanGestureHandler} from 'react-native-gesture-handler';
// import tw from 'twrnc';

// export default function Bottomsheet({show, onDismiss, children}) {
//   const bottomsheetHight = Dimensions.get('window').height * 0.1;
//   const devicewidth = Dimensions.get('window').width;
//   const bottom = useRef(new Animated.Value(-bottomsheetHight)).current;
//   // [styles.container,styles.elevation,{height:bottomsheetHight,bottom:bottom}]

//   const [open, setOpen] = useState(show);
//   const onGesture = (event) => {

//     if(event.nativeEvent.translationY>0){
//       bottom.setValue(-event.nativeEvent.translationY);
//     }
//   };
//   const onGestureEnd = (event) => {
//     if(event.nativeEvent.translationY>bottomsheetHight/2){
//       onDismiss()
//     }else{
//       bottom.setValue(0)
//     }
//   };




//   useEffect(() => {
//     if (show) {
//       setOpen(show);
//       Animated.timing(bottom, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: false,
//       }).start();
//     } else {
//       Animated.timing(bottom, {
//         toValue: -bottomsheetHight,
//         duration: 500,
//         useNativeDriver: false,
//       }).start(() => setOpen(false));
//     }
//   }, [show]);

//   if (!open) {
//     return null;
//   }

//   return (
//     <Animated.View
//       style={tw`rounded-t-[30px] shadow-gray-500 shadow-2xl bottom-0 bg-white absolute left-0 right-0  bottom-${bottom} h-${bottomsheetHight}`}>
//       <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
//         <View>
//           <View
//             style={tw`bg-gray-500 w-[50px] h-[5px] rounded-md flex justify-center self-center mt-5`}></View>
//           <View>
//             <Text style={tw`text-black`}>hello</Text>
//           </View>
//         </View>
//       </PanGestureHandler>

//       {/* {children} */}
//     </Animated.View>
//   );
// }

// // const styles= StyleSheet.create({
// //   container:{
// //     left:0,
// //     right:0,
// //     borderTopLeftRadius:20,
// //     borderTopRightRadius:20,
// //     backgroundColor:"#fff",
// //     position:"absolute",
// //     bottom:0,
// //     shadowProp: {
// //       shadowColor: '#171717',
// //       shadowOffset: {width: -2, height: 4},
// //       shadowOpacity: 0.2,
// //       shadowRadius: 3,
// //     },
// //     elevation: {
// //       elevation: 20,
// //       shadowColor: '#52006A',
// //     },
// //     zIndex:100

// //   }
// // })
