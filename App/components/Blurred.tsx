import { View, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import { ReactNode } from "react";

export const Blurred: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BlurView
      experimentalBlurMethod="dimezisBlurView"
      intensity={20}
      tint="light"
      className="w-max h-max overflow-hidden rounded-xl"
    >
      <ImageBackground
        source={require("../../assets/filmgrain.jpg")}
        className="flex-1 w-full h-full object-cover absolute opacity-5"
      />
      <View className="w-max h-max border-x-2 border-b-2 border-white/5 rounded-xl">
        {children}
      </View>
    </BlurView>
  );
};
