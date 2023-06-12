import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../redux/navSlices";

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const data = [
    {
      id: 1,
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: 2,
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              key={index}
              className="w-40 h-56 bg-slate-100 m-1"
              disabled={!origin}
            >
              <View className={`p-4 ${!origin && "opacity-25"}`}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 90, width: 90, resizeMode: "contain" }}
                />
                <Text className="my-4 text-lg font-semibold ">
                  {item.title}
                </Text>
                <FontAwesome5
                  name="arrow-circle-right"
                  size={28}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
