import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../redux/navSlices";

const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const travelTimeInformation=useSelector(selectTravelTimeInformation)
  const data = [
    {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
      price:435.00

    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
      price:246.00
    },
    {
      id: "Uber-LUX-786",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
      price:688.00

    },
  ];
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-grow bg-white">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-6 left-3 z-50 rounded-full "
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <ScrollView className="h-38 mb-20">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={()=>setSelected(item)}
              className={`flex-row items-center justify-between px-8`}
            >
              <Image
                style={{ height: 100, width: 100, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <View className="-ml-4">
                <Text className="text-lg font-semibold">{item.title}</Text>
                <Text>{travelTimeInformation?.duration?.text} </Text>
              </View>
              <Text className="text-lg">{item.price}$ </Text>
            </TouchableOpacity>
          )}
        />
        <View>
          <TouchableOpacity disabled={!selected}  className={`bg-black py-3 m-3 items-center justify-center ${!selected && 'bg-gray-400 text-black'}  `}>
            <Text className="text-xl text-white font-semibold">
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
