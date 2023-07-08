import { useContext, createContext, useState } from 'react';

const AppContext = createContext();

const data = [
  {
    id: 1,
    title: 'Bourbon Maple Banana',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/bourbon_maple_banana.jpg',
  },
  {
    id: 2,
    title: 'Candy Cane',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/candy_cane.jpg',
  },
  {
    id: 3,
    title: 'Carrot Cake',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/carrot_cake.jpg',
  },
  {
    id: 4,
    title: 'Chai Tea Latte',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/chai_tea_latte.jpg',
  },
  {
    id: 5,
    title: 'Chocolate Birthday',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/chocolate_birthday.jpg',
  },
  {
    id: 6,
    title: 'Churro',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/churro.png',
  },
  {
    id: 7,
    title: 'Dreamsicle',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/dreamsicle.png',
  },
  {
    id: 8,
    title: 'Elderflower Blossom',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/elderflower_blossom.jpg',
  },
  {
    id: 9,
    title: 'Funfetti',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/funfetti.png',
  },
  {
    id: 10,
    title: 'Lavender Earl Gray',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/lavender_earl_gray.png',
  },
  {
    id: 11,
    title: 'Lemon Blossom',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/lemon_blossom.png',
  },
  {
    id: 12,
    title: 'Mexican Hot Chocolate',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/mexican_hot_chocolate.jpg',
  },
  {
    id: 13,
    title: 'Mocha Madness',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/mocha_madness.jpg',
  },
  {
    id: 14,
    title: 'Peppermint Chocolate',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/peppermint_chocolate.jpg',
  },
  {
    id: 15,
    title: 'Pink Velvet',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/pink_velvet.jpg',
  },
  {
    id: 16,
    title: 'Red Velvet',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/red_velvet.jpg',
  },
  {
    id: 17,
    title: 'Rose Garden',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/rose_garden.jpg',
  },
  {
    id: 18,
    title: 'Snickerdoodle',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/snickerdoodle.jpg',
  },
  {
    id: 19,
    title: 'Snowball',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/snowball.jpg',
  },
  {
    id: 20,
    title: 'Toasted Coconut',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/toasted_coconut.jpg',
  },
  {
    id: 21,
    title: 'Tuxedo',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/tuxedo.jpg',
  },
  {
    id: 22,
    title: 'Vanilla Birthday',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/vanilla_birthday.jpg',
  },
  {
    id: 23,
    title: 'White Velvet',
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 5,
    stock: 10,
    image: '/images/white_velvet.jpg',
  },
];

export const AppProvider = ({ children }) => {
  const [cupcakes, setCupcakes] = useState(data);
  return (
    <AppContext.Provider value={{ cupcakes }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
