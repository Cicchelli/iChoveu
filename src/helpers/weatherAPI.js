const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (TERMO_DE_BUSCA) => {
  const API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`;

  try {
    const response = await fetch(API);
    const data = await response.json();
    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
