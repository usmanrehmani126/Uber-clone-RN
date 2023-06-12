import { SafeAreaView, StyleSheet, Text, View ,ScrollView} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../redux/navSlices";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-black text-xl text-center py-4">
        Good Morning, Usman
      </Text>

      <View className="border-t border-gray-200 flex-shrink">
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            enablePoweredByContainer={false}
            styles={toInputBoxStyles}
            minLength={3}
            nearbyPlacesAPI="GooglePlacesSearch"
            fetchDetails={true}
            returnKeyType={"search"}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            query={{
              key: "your api key",
              language: "en",
            }}
          />
        <NavFavourites />
      </View>
      <View className="flex-row items-center justify-evenly bg-white mt-auto border-t border-gray-100 mb-4 ">
        <TouchableOpacity
          className="flex-row bg-black w-24 px-4 py-3 rounded-full items-center mt-1"
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-center text-white ml-3">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row mt-1 w-24 px-4 py-3 rounded-full items-center">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-center text-black ml-3">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
