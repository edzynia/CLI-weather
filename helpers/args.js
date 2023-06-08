const getArgs = (args) => {
  const res = {};

  const [executer, file, ...rest] = args;
  rest.forEach((value, index, array) => {
    if (value.charAt(0) == '-') {
      if (index == array.length - 1) {
        res[value.substring(1)] = true; // -h = true
      } else if (array[index + 1].charAt(0) != '-') {
        res[value.substring(1)] = array[index + 1];
      } else {
        res[value.substring(1)] = true; // -h = true
      }
    }
  });
  return res;
};

export { getArgs };

// const getArgs = (args) => {
//   const res = {};
//   let index = 0;

//   while (index < args.length) {
//     const value = args[index];

//     if (value.charAt(0) === '-') {
//       const key = value.substring(1);

//       if (index === args.length - 1 || args[index + 1].charAt(0) === '-') {
//         res[key] = true;
//       } else {
//         res[key] = args[index + 1];
//         index++;
//       }
//     }

//     index++;
//   }

//   return res;
// };

// export { getArgs };
