import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/navSlices";
import NavFavourites from "../components/NavFavourites";
const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-4">
        <Image
          source={{
            uri: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
          }}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <GooglePlacesAutocomplete
          placeholder="Search for city"
          debounce={400}
          enablePoweredByContainer={false}
          minLength={3}
          nearbyPlacesAPI="GooglePlacesSearch"
          fetchDetails={true}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
                setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          query={{
            key: "your api key",
            language: "en",
          }}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
