import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
const NavFavourites = () => {
  const data = [
    {
      id: "1",
      icon: "home",
      location: "Home",
      destination: "Code Street, BWN, PK",
    },
    {
      id: "12",
      icon: "briefcase",
      location: "Work",
      destination: "City Chowk , BWN, PK",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        ItemSeparatorComponent={()=>
            <View className="bg-gray-200 h-[0.5px]" />
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity className="flex-row items-center p-5">
              <Icon
                name={item.icon}
                className="mr-3 rounded-full bg-gray-300 p-2"
                type="ionicon"
                color="white"
                size={18}
              />
              <View>
                <Text className="font-semibold text-lg">{item.location}</Text>
                <Text className="text-gray-500">{item.destination}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
