import MOCK_DATA from "../data/MOCK_DATA.json";

export const dataRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 1500);
  });
};

export const dataRequestforId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA.find((prod) => prod.id === id));
    }, 1500);
  });
};
