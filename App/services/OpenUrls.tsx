import { Linking, Alert } from "react-native";
export const OpenUrl = {
  Playstore: async (url: string) => {
    try {
      const isSupported = await Linking.canOpenURL(url);
      if (isSupported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "No se pudo abrir el link hacia la PlayStore");
      }
    } catch (err) {
      console.error("Error al intentar abrir la Play Store:", err);
    }
  },

  Appstore: async (url: string) => {
    try {
      const isSupported = await Linking.canOpenURL(url);
      if (isSupported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "No se pudo abrir el link hacia la App Store");
      }
    } catch (err) {
      console.error("Error al intentar abrir la App Store:", err);
    }
  },

  Website: async (url: string) => {
    try {
      const isSupported = await Linking.canOpenURL(url);
      if (isSupported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "No se pudo abrir el link hacia el navegador");
      }
    } catch (err) {
      console.error("Error al intentar abrir el navegador:", err);
    }
  },
};
