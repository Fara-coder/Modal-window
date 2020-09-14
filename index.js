const fruits = [
  {
    id: 1,
    title: "Apple",
    price: 20,
    img: "http://www.pngplay.com/image/3662",
  },
  {
    id: 2,
    title: "PineApple",
    price: 30,
    img: "http://www.pngplay.com/image/69066",
  },
  {
    id: 3,
    title: "Mango",
    price: 50,
    img: "http://www.pngplay.com/image/68854",
  },
];

const modal = $.modal({
  title: "First modal",
  closable: true,
  content: `
   <p>lorem ipsum dolor sit</p>
      <p>lorem ipsum dolor sit</p>
      `,
  width: "400px",
});
