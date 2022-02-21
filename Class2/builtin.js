        // String and Boolean are both built-in Objects


        const first = 'this is a string';
        const second = String('this is a string');
      // console.log('this is my string'.toUpperCase());
      // console.log(first === second);
      
      console.groupCollapsed('Primitives vs Objects');
          console.log(first === second); // true
          console.log(
              typeof first,
              typeof String('this is a string'),
              typeof new String()
          );
      console.groupEnd();

      // strings
      const sentence = 'this is my sentence';

      console.groupCollapsed('String');
          console.log(first.toUpperCase()); // THIS IS A STRING
          console.log(second.toLowerCase()); // this is a string
          console.log(sentence.startsWith('this is')); // true
          console.log('X '.repeat(20));
          console.log('look at me goo     '.trim());
      console.groupEnd();

      console.groupCollapsed('Numbers and Math');
          console.log(1..toString()); // 1
          console.log((1).toString()); // 1
          console.log(Number.isInteger(5)); // true
          console.log(Number.isInteger(5.43)); // false
          console.log((1.562342).toFixed(2)); // 1.56
          console.log(
              Math.random().toFixed(2), // random
              Math.ceil(1.56), // 2
              Math.floor(6.3) // 6
          );
     console.groupEnd();

      // arrays
      const myArr = ['chris', 'nick', 'holly'];
      console.group('Arrays');
          console.log(myArr.length); // 3
          console.log(myArr.join('-')); // chris-nick-holly
          console.log(myArr.push('ado'), myArr); //4 (4) ['chris', 'nick', 'holly', 'ado']
          console.log(myArr.pop(), myArr); // ado (3) ['chris', 'nick', 'holly']

          // myArr.forEach(function(user) {
          //     console.log(user);
          // });

          // same as above, but with arrow notation
          myArr.forEach((user) => console.log(user));


      console.groupEnd();