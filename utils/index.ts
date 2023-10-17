export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'bbcb45e303msh4f29df3f1cc27d2p16d570jsnb518ec72480b',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const resp = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers })

  const data = await resp.json()
  return data
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
