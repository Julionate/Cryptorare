import { View, Text } from "react-native";

interface Item {
  name: string;
  price: number;
  converted: number;
}

interface StatsProps {
  data: Item[];
  initialConvertValue: number;
  currency: string;
}

export const Stats = ({ data, initialConvertValue, currency }: StatsProps) => {
  const capitalize = (word: string) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  };

  return (
    <View className="w-max h-max rounded-xl overflow-hidden mx-4">
      <View className="bg-indigo-900/20 w-full flex-row p-2 items-center">
        <Text className="w-1/3 text-white text-lg font-semibold">Divisa</Text>
        <Text className="w-1/3 text-white text-lg font-semibold">
          Precio actual{"\n"}
          <Text className="text-sm font-medium">
            ({currency.toUpperCase()})
          </Text>
        </Text>
        <Text className="w-1/3 text-white text-lg font-semibold">
          Conversión{"\n"}
          <Text className="text-sm font-medium">
            {`($${initialConvertValue || 0} ${currency.toUpperCase()})`}
          </Text>
        </Text>
      </View>
      {data.map((item, index) => (
        <View key={index} className="bg-white/15 w-full flex-row p-2">
          <Text className="w-1/3 text-lg text-white">
            {capitalize(item.name)}
          </Text>
          <Text className="w-1/3 text-lg text-white">
            $
            {item.price.toLocaleString("es-CL", {
              maximumFractionDigits: 3,
            })}
          </Text>
          <Text className="w-1/3 text-lg text-white">
            $
            {item.converted.toLocaleString("es-CL", {
              maximumSignificantDigits: 3,
            })}
          </Text>
        </View>
      ))}
    </View>
  );
};
