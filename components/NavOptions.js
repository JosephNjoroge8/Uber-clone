import { Text, View, FlatList, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data =  [
    {
     id: "123",
     title:" Get a ride",
     image: "https://links.papareact.com/3pn",
     sreen: "MapScreen",
    },
    {
     id: "456",
     title:" Order food",
     image: "https://links.papareact.com/28w",
     screen: "EatScreen",
    },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <View>
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
         <TouchableOpacity 
         onPress={() => navigation.navigate(item.screen)}
         style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
             
            <View>
              <Image 
              source={{ uri: item.image }} 
              style={{ width: 120, height:120, resizeMode: "contain"}} />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon 
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright" color="white" type="antdesign"/>
            </View>
         </TouchableOpacity>
       )}
      />
    </View>
  )
}

export default NavOptions
