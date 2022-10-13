
      function countCats(matrix) {
        console.log('init')
        console.log(typeof matrix)
        let cat = "^^";
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
         
console.log(typeof matrix[i] == 'object')
          if (typeof matrix[i] == 'object') {
            console.log('hello');
            count = count + countCats(matrix[i])
          } else {
            if(matrix[i] == cat) {
              count++
            } 
          }
        }
        return count;
      }
      console.log('Result of function:   '+countCats([
        ['##', 'dd', '00'],
        ['^^', '..', 'ss'],
        ['AA', 'dd', 'Oo'],
      ]))

      // describe('base requirements', () => {
      //   it.optional('level 0.1', () => {
      //     assert.equal(countCats([
      //       ['##', 'dd', '00'],
      //       ['^^', '..', 'ss'],
      //       ['AA', 'dd', 'Oo'],
      //     ]), 1);
      //   });
