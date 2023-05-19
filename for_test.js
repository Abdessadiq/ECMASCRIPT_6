//  By ABDESSADIQ BABA HAMOU

const getObject = () => {
  age: 10;
  fullName: "John";
};

const incrementNumber = {
  fullName: "John",
  increment() {
    setTimeout(() => {
      console.log(this.increment);
    }, 1000);
  },
};
