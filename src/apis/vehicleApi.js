export const getVehicles = async () => {
  const baseURL = `https://rywe6a9co8.execute-api.ap-southeast-1.amazonaws.com/api/matching`;

  const data = fetch(`${baseURL}/vehicle-type`).then((res) => res.json());
  return data;
};

export const getVehicle = async ({ uid }) => {
  const baseURL = `https://rywe6a9co8.execute-api.ap-southeast-1.amazonaws.com/api/matching`;
  const data = await fetch(`${baseURL}/vehicle-type/${uid}`).then((res) =>
    res.json()
  );
  return data;
};
