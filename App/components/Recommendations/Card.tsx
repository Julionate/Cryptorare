import { View, Text, Pressable, Image } from "react-native";
import ReadMore from "@fawazahmed/react-native-read-more";
import IconWeb from "@svg/IconHome";
import IconPlayStore from "@svg/IconPlayStore";
import IconAppstore from "@svg/IconAppStore";
import { TypesRecommendations } from "./TypeRecommendations";

export const Card = ({
  product = "Nombre del Producto",
  description = "Descripción básica",
  brand = "Nombre de la marca",
  urlLogo = "https://static.bookinghealth.com/assets/images/placeholder_256.webp",
  urlWebsite = null,
  urlPlayStore = null,
  urlAppStore = null,
}: TypesRecommendations) => {
  const handleUrlPress = (url: string, site: string) => {
    alert(`Te dirijirás hacia ${site}: ${url}`);
  };

  return (
    <View className="w-full max-w-md h-max min-h-48 bg-white/10 border-[1.5px] border-white/10 mb-6 rounded-lg p-4">
      <View className="flex-row justify-between mb-2">
        <View>
          <Text numberOfLines={3} className="text-white">
            {brand}
          </Text>
          <Text numberOfLines={3} className="text-xl font-medium text-white">
            {product}
          </Text>
        </View>
        <Image
          source={{
            uri: urlLogo ? urlLogo : undefined,
          }}
          className="w-14 h-14 rounded-md"
        />
      </View>
      <ReadMore
        style={{ color: "white" }}
        numberOfLines={3}
        seeMoreText="Leer más"
        seeMoreStyle={{ color: "#f9cffc", fontWeight: "600" }}
        seeLessText="Leer menos"
        seeLessStyle={{ color: "#f9cffc", fontWeight: "600" }}
      >
        {description}
      </ReadMore>
      <View className="mt-auto pt-2 self-end flex-row gap-3">
        {urlWebsite ? (
          <Pressable onPress={() => handleUrlPress(urlWebsite, "Website")}>
            <IconWeb className="w-9 h-9 fill-gray-200" />
          </Pressable>
        ) : null}
        {urlPlayStore ? (
          <Pressable onPress={() => handleUrlPress(urlPlayStore, "PlayStore")}>
            <IconPlayStore className="w-9 h-9 fill-gray-200" />
          </Pressable>
        ) : null}
        {urlAppStore ? (
          <Pressable onPress={() => handleUrlPress(urlAppStore, "App Store")}>
            <IconAppstore className="w-9 h-9 fill-gray-200" />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
