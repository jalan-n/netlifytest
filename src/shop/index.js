import Huckleberry from "../assets/images/Huckleberry.jpg"
//import Huckleberry from "https://shellysjellys.com/wp-content/uploads/2019/05/Huckleberry.jpg"
import HuckleberryJalapeno from "../assets/images/Huckleberry-Jalapeno.jpg"
import HuckleberryChocolate from "../assets/images/Huckleberry-Chocolate.jpg"
import AppleMaple from "../assets/images/Apple-Maple.jpg"
import FlatheadCherry from "../assets/images/Flathead-Cherry.jpg"
import FlatheadCherryJalapeno from "../assets/images/Flathead-cherry-jalapeno-w.jpg"
import FlatheadCherryChocolate from "../assets/images/Flathead-Cherry-Chocolate.jpg"
import PineappleCoconut from "../assets/images/Pineapple-Coconut.jpg"
import PineappleJalapeno from "../assets/images/Pineapple-Jalapeno.jpg"
import Raspberry from "../assets/images/Raspberry.jpg"
import RaspberryJalapeno from "../assets/images/Raspberry-Jalapeno.jpg"
import RedPepperJalapenoHot from "../assets/images/Red-Pepper-Jalapeno-Hot.jpg"
import RedPepperJalapenoMild from "../assets/images/Red-Pepper-Jalapeno-Mild.jpg"

const SHOP_DATA = [
  {
    catId: 1,
    category: "Huckleberry",
    description: "Huckleberry is the favorite of many.",
    imageUrl:
      "https://shellysjellys.com/wp-content/uploads/2019/05/Huckleberry.jpg",
    flavorDetails: [
      {
        id: "11",
        imageUrl:
          "https://shellysjellys.com/wp-content/uploads/2019/05/Huckleberry.jpg",
        category: "Huckleberry",
        description: "Huckleberry is the favorite of many.",
        size: "4oz",
        price: 8,
      },
      {
        id: 12,
        imageUrl: Huckleberry,
        category: "Huckleberry",
        size: "8oz",
        price: 12,
      },
      {
        id: 13,
        imageUrl: Huckleberry,
        category: "Huckleberry",
        size: "12oz",
        price: 15,
      },
    ],
  },

  {
    catId: 2,
    category: "Huckleberry Jalapeno",
    imageUrl: HuckleberryJalapeno,
    description: "Huckleberry jala is the spicy best.",
    flavorDetails: [
      {
        id: 21,
        imageUrl: HuckleberryJalapeno,
        category: "Huckleberry Jalapeno",
        size: "4oz",
        price: 8,
      },
      {
        id: 22,
        imageUrl: HuckleberryJalapeno,
        category: "Huckleberry Jalapeno",
        size: "8oz",
        price: 12,
      },
      {
        id: 23,
        imageUrl: HuckleberryJalapeno,
        category: "Huckleberry Jalapeno",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 3,
    category: "Huckleberry Chocolate",
    imageUrl: HuckleberryChocolate,
    description: "If you like chocolate...",
    flavorDetails: [
      {
        id: 31,
        imageUrl: HuckleberryChocolate,
        category: "Huckleberry Chocolate",
        size: "4oz",
        price: 8,
      },
      {
        id: 32,
        imageUrl: HuckleberryChocolate,
        category: "Huckleberry Chocolate",
        size: "8oz",
        price: 12,
      },
      {
        id: 33,
        imageUrl: HuckleberryChocolate,
        category: "Huckleberry Chocolate",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 4,
    category: "Apple Maple",
    imageUrl: AppleMaple,
    description: "Here's to healthier breakfasts.",
    flavorDetails: [
      {
        id: 41,
        imageUrl: AppleMaple,
        category: "Apple Maple",
        size: "4oz",
        price: 8,
      },
      {
        id: 42,
        imageUrl: AppleMaple,
        category: "Apple Maple",
        size: "8oz",
        price: 12,
      },
      {
        id: 43,
        imageUrl: AppleMaple,
        category: "Apple Maple",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 5,
    category: "Flathead Cherry",
    imageUrl: FlatheadCherry,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 51,
        imageUrl: FlatheadCherry,
        category: "Flathead Cherry",
        size: "4oz",
        price: 8,
      },
      {
        id: 52,
        imageUrl: FlatheadCherry,
        category: "Flathead Cherry",
        size: "8oz",
        price: 12,
      },
      {
        id: 53,
        imageUrl: FlatheadCherry,
        category: "Flathead Cherry",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 6,
    category: "Flathead Cherry Jalapeño",
    imageUrl: FlatheadCherryJalapeno,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 61,
        imageUrl: FlatheadCherryJalapeno,
        category: "Flathead Cherry Jalapeño",
        size: "4oz",
        price: 8,
      },
      {
        id: 62,
        imageUrl: FlatheadCherryJalapeno,
        category: "Flathead Cherry Jalapeño",
        size: "8oz",
        price: 12,
      },
      {
        id: 63,
        imageUrl: FlatheadCherryJalapeno,
        category: "Flathead Cherry Jalapeño",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 7,
    category: "Flathead Cherry Chocolate",
    imageUrl: FlatheadCherryChocolate,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 71,
        imageUrl: FlatheadCherryChocolate,
        category: "Flathead Cherry Chocolate",
        size: "4oz",
        price: 8,
      },
      {
        id: 72,
        imageUrl: FlatheadCherryChocolate,
        category: "Flathead Cherry Chocolate",
        size: "8oz",
        price: 12,
      },
      {
        id: 73,
        imageUrl: FlatheadCherryChocolate,
        category: "Flathead Cherry Chocolate",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 8,
    category: "Pineapple Coconut",
    imageUrl: PineappleCoconut,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 81,
        imageUrl: PineappleCoconut,
        category: "Pineapple Coconut",
        size: "4oz",
        price: 8,
      },
      {
        id: 82,
        imageUrl: PineappleCoconut,
        category: "Pineapple Coconut",
        size: "8oz",
        price: 12,
      },
      {
        id: 83,
        imageUrl: PineappleCoconut,
        category: "Pineapple Coconut",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 9,
    category: "Pineapple Jalapeño",
    imageUrl: PineappleJalapeno,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 91,
        imageUrl: PineappleJalapeno,
        category: "Pineapple Jalapeño",
        size: "4oz",
        price: 8,
      },
      {
        id: 92,
        imageUrl: PineappleJalapeno,
        category: "Pineapple Jalapeño",
        size: "8oz",
        price: 12,
      },
      {
        id: 93,
        imageUrl: PineappleJalapeno,
        category: "Pineapple Jalapeño",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 10,
    category: "Raspberry",
    imageUrl: Raspberry,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 101,
        imageUrl: Raspberry,
        category: "Raspberry",
        size: "4oz",
        price: 8,
      },
      {
        id: 102,
        imageUrl: Raspberry,
        category: "Raspberry",
        size: "8oz",
        price: 12,
      },
      {
        id: 103,
        imageUrl: Raspberry,
        category: "Raspberry",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 11,
    category: "Raspberry Jalapeño",
    imageUrl: RaspberryJalapeno,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 111,
        imageUrl: RaspberryJalapeno,
        category: "Raspberry Jalapeño",
        size: "4oz",
        price: 8,
      },
      {
        id: 112,
        imageUrl: RaspberryJalapeno,
        category: "Raspberry Jalapeño",
        size: "8oz",
        price: 12,
      },
      {
        id: 113,
        imageUrl: RaspberryJalapeno,
        category: "Raspberry Jalapeño",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 12,
    category: "Red Pepper Jalapeno - Hot",
    imageUrl: RedPepperJalapenoHot,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 121,
        imageUrl: RedPepperJalapenoHot,
        category: "Red Pepper Jalapeno - Hot",
        size: "4oz",
        price: 8,
      },
      {
        id: 122,
        imageUrl: RedPepperJalapenoHot,
        category: "Red Pepper Jalapeno - Hot",
        size: "8oz",
        price: 12,
      },
      {
        id: 123,
        imageUrl: RedPepperJalapenoHot,
        category: "Red Pepper Jalapeno - Hot",
        size: "12oz",
        price: 15,
      },
    ],
  },
  {
    catId: 13,
    category: "Red Pepper Jalapeno - Mild",
    imageUrl: RedPepperJalapenoMild,
    description: "Nothing flat about it.",
    flavorDetails: [
      {
        id: 131,
        imageUrl: RedPepperJalapenoMild,
        category: "Red Pepper Jalapeno - Mild",
        size: "4oz",
        price: 8,
      },
      {
        id: 132,
        imageUrl: RedPepperJalapenoMild,
        category: "Red Pepper Jalapeno - Mild",
        size: "8oz",
        price: 12,
      },
      {
        id: 133,
        imageUrl: RedPepperJalapenoMild,
        category: "Red Pepper Jalapeno - Mild",
        size: "12oz",
        price: 15,
      },
    ],
  },
]

export default SHOP_DATA
