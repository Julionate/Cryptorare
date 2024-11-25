import { View, Text, Pressable } from "react-native";
import { Blurred } from "@components/Blurred";
import { Modal } from "@components/Modal";
import { useState } from "react";
import VALUES from "@data/Currencies.json";

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
