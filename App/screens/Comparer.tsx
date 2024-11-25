import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Blurred } from "@components/Blurred";
import { CurrencySelector } from "@components/CurrencySelector";
import background from "@assets/holy.jpg";
import { RootStackParamList } from "../../types/navigation";

type NavigationProps = StackNavigationProp<RootStackParamList, "Resultados">;

export const Comparer = () => {
  const navigation = useNavigation<NavigationProps>();
  const [loading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState<string | number>(0);
  const [currentCurrency, setCurrentCurrency] = useState<string | null>("clp");

  return (
    <View className="flex-1 justify-center items-center flex gap-2">
      <ImageBackground
        source={background}
        onLoadEnd={() => setTimeout(() => setLoading(false), 500)}
        className="flex-1 w-full h-full object-cover absolute"
      />

      <Text className="text-5xl text-white font-bold">Cryptorare</Text>
      <Text className="text-xl text-white pb-10">
        Comparador sencillo de criptomonedas
      </Text>

      <View className="flex flex-row justify-center items-center gap-2">
        <Blurred>
          <TextInput
            onChangeText={(text) => setTextInput(text)}
            onSubmitEditing={() => console.log("subiendo")}
            keyboardType="numeric"
            className="text-white w-80 h-16 flex px-2 text-xl placeholder:text-white/50"
            placeholderTextColor="white"
            placeholder="Ingrese un valor"
          ></TextInput>
        </Blurred>

        <CurrencySelector
          currency={currentCurrency}
          setCurrentCurrency={setCurrentCurrency}
        />
      </View>

      <Blurred>
        <Pressable
          className="w-56 h-16 rounded-xl flex  justify-center items-center"
          onPress={() =>
            navigation.navigate("Resultados", {
              toConvert: textInput,
              currency: currentCurrency,
            })
          }
        >
          <Text className="text-xl text-white">Comparar</Text>
        </Pressable>
      </Blurred>

      <StatusBar style="light" />

      {loading ? (
        <View className="flex-1 items-center justify-center h-full w-full absolute bg-white z-50">
          <Text className="text-5xl text-black font-bold pb-10">
            Cryptorare
          </Text>
          <ActivityIndicator color="black" size="large" />
        </View>
      ) : null}
    </View>
  );
};
