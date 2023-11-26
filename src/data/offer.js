import img from "../Asset/housejap.jpg";
import img6 from "../Asset/korearent.jpg";
import img7 from "../Asset/rent1.jpg";
import img8 from "../Asset/thairent.jpg";

export const offerInformation = [
  {
    id: 1,
    imgSrc: [img, img6, img7, img8],
    location: "Japan",
    beforeDiscount: "15.000.000",
    price: "4.500.000",
    discount: 30,
    rate: 4,
    facilities: {
      livingroom: "1 livingroom",
      kitchen: "1 kitchen",
      bed: "2 Beds",
      bath: "1 Bath",
      wifi: "Wi-Fi",
      shuttel: "Shuttel",
    },
  },
  {
    id: 2,
    imgSrc: [img6, img, img7, img8],
    location: "Korea",
    beforeDiscount: "15.000.000",
    price: "6.500.000",
    discount: 40,
    rate: 5,
    facilities: {
      livingroom: "1 livingroom",
      kitchen: "1 kitchen",
      bed: "2 Beds",
      bath: "1 Bath",
      wifi: "Wi-Fi",
      shuttel: "Shuttel",
    },
  },
  {
    id: 3,
    imgSrc: [img7, img6, img, img8],
    location: "Singapore",
    beforeDiscount: "15.000.000",
    price: "7.000.000",
    discount: 20,
    rate: 4.5,
    facilities: {
      livingroom: "1 livingroom",
      kitchen: "1 kitchen",
      bed: "2 Beds",
      bath: "1 Bath",
      wifi: "Wi-Fi",
      shuttel: "Shuttel",
    },
  },
  {
    id: 4,
    imgSrc: [img8, img6, img7, img],
    location: "Thailand",
    beforeDiscount: "15.000.000",
    price: "4.000.000",
    discount: 50,
    rate: 5,
    facilities: {
      livingroom: "1 livingroom",
      kitchen: "1 kitchen",
      bed: "2 Beds",
      bath: "1 Bath",
      wifi: "Wi-Fi",
      shuttel: "Shuttel",
    },
  },
];

