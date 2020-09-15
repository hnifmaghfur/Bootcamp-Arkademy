const object = {
  methodOne: () => {
    console.log("Test");
  },
  methodTwo: () => {
    return this.methodOne();
  },
};
console.log(object.methodTwo());
