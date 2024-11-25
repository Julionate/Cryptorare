import { Text, View, ImageBackground, ActivityIndicator } from "react-native";
import { Stats } from "@components/Stats";
import { ApiFacade } from "App/services/CryptoAPI";
import { useEffect, useState } from "react";
import background from "@assets/holy.jpg";

interface ResultsProps {
  route: {
    params: {
      toConvert?: number;
      currency?: string;
    };
  };
}

interface TransformedData {
  name: string;
  price: number;
  converted: number;
}

type CryptoValue = { [key: string]: number };

export const Results = ({ route }: ResultsProps) => {
  const { toConvert = 0, currency = "clp" } = route.params || {};
  const [data, setData] = useState<TransformedData[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(currency);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await ApiFacade.compareResults(
          "bitcoin,ethereum,litecoin,bitcoin-cash,",
          currency
        );
        const transformedData = Object.entries(response).map(([key, value]) => {
          const price = Object.values(value as CryptoValue)[0];

          return {
            name: key,
            price,
            converted: toConvert / price,
          };
        });

        setData(transformedData);
      } catch (error) {
        console.error("Error cargando los datos:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-slate-950">
      <ImageBackground
        source={background}
        onLoadEnd={() => setTimeout(() => setLoading(false), 500)}
        className="flex-1 w-full h-full object-cover absolute"
      />
      <Text className="text-3xl text-white font-bold">Resultados</Text>
      <Text className="mb-4 text-white">
        Implementado gracias a <Text className="font-semibold">CoinGecko</Text>
      </Text>
      <View>
        {loading ? (
          <>
            <Text className="text-lg text-white font-medium mb-1">
              Cargando datos
            </Text>
            <ActivityIndicator color="white" />
          </>
        ) : data.length > 0 ? (
          <Stats
            data={data}
            currency={currency}
            initialConvertValue={toConvert}
          />
        ) : (
          <Text className="text-lg font-bold text-red-500">
            No se encontraron datos.
          </Text>
        )}
      </View>
    </View>
  );
};
