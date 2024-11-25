import { Text, View, ScrollView, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "../components/Recommendations/Card";
import background from "@assets/holy.jpg";
import recommendationsData from "@data/Recommendations.json";
import { TypesRecommendations } from "@components/Recommendations/TypeRecommendations";

export const Recommendations = () => {
  const typedRecommendations: TypesRecommendations[] = recommendationsData;
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 w-screen h-screen justify-center items-center bg-slate-950"
      style={{ paddingTop: insets.top }}
    >
      <ImageBackground
        source={background}
        className="flex-1 w-full h-full object-cover absolute"
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        className="w-full h-full"
      >
        <Text className="text-2xl text-white -mb-2 mt-16 font-medium">
          RECOMENDACIONES
        </Text>
        <Text className="text-lg text-white mb-16">cryptowallets</Text>
        {typedRecommendations.map((r, i) => (
          <Card
            key={i}
            product={r.product}
            brand={r.brand}
            description={r.description}
            urlLogo={r.urlLogo}
            urlAppStore={r.urlAppStore}
            urlPlayStore={r.urlPlayStore}
            urlWebsite={r.urlWebsite}
          />
        ))}
        <Text className="text-white/50 text-sm px-16 pt-10 pb-6">
          *Estas recomendaciones son por parte de Sebastián Antonio Luengo.
        </Text>
      </ScrollView>
    </View>
  );
};
