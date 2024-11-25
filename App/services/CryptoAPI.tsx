import axios from "axios";

// Define la fachada como un objeto exportado
export const ApiFacade = {
  API: "https://api.coingecko.com/api/v3/simple/price",

  // Método compareResults
  compareResults: async (id: string, currency: string) => {
    try {
      const response = await axios.get(ApiFacade.API, {
        params: {
          ids: id,
          vs_currencies: currency,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data from API:", error);
      throw error;
    }
  },
};
