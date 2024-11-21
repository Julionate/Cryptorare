import { View, Text, Pressable } from "react-native";
import { Blurred } from "./Blurred";
import { Modal } from "./Modal";
import { useState } from "react";

export interface CurrencySelectorProps {
  currency: React.ComponentState;
  setCurrentCurrency: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currency,
  setCurrentCurrency,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const VALUES = [
    { currency: "clp", name: "Pesos Chilenos" },
    { currency: "usd", name: "Dólares Estadounidenses" },
    { currency: "btc", name: "BitCoin" },
    { currency: "eth", name: "Etherium" },
    { currency: "doge", name: "Doge Coin" },
  ];

  return (
    <>
      <Blurred>
        <Pressable onPress={openModal}>
          <View className="w-16 h-16 flex justify-center items-center">
            <Text className="text-xl text-white">{currency}</Text>
          </View>
        </Pressable>
      </Blurred>
      <Modal
        values={VALUES}
        visible={modalVisible}
        onClose={closeModal}
        setCurrentCurrency={setCurrentCurrency}
      />
    </>
  );
};
