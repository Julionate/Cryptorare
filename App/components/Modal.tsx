import { useState } from "react";
import { View, Text, Modal as ModalReact, Pressable } from "react-native";
import IconClose from "./svg/IconClose";
import { CurrencySelectorProps } from "./CurrencySelector";

interface ValuesProps {
  currency: string;
  name: string;
}

interface ModalProps extends Pick<CurrencySelectorProps, "setCurrentCurrency"> {
  visible: boolean;
  onClose: () => void;
  values: ValuesProps[];
}

export const Modal: React.FC<ModalProps> = ({
  values,
  visible,
  onClose,
  setCurrentCurrency,
}) => {
  const handleSetCurrency = (currency: string) => {
    setCurrentCurrency(currency);
    onClose();
  };

  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center">
        <Pressable className="absolute h-screen w-screen" onPress={onClose}>
          <View className="flex-1"></View>
        </Pressable>

        <View className="h-max w-5/6 bg-white flex rounded-xl pt-10">
          <Pressable className="absolute right-4 top-4" onPress={onClose}>
            <IconClose className="w-6 h-6 fill-gray-500"></IconClose>
          </Pressable>
          {values.map((value) => (
            <Pressable
              key={value.name}
              onPress={() => handleSetCurrency(value.currency)}
              className="flex flex-row py-8 px-8 active:bg-black/5 justify-between"
            >
              <Text className="text-xl">{value.currency}</Text>
              <Text className="text-xl text-gray-500">{value.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ModalReact>
  );
};
