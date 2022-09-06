const age = [ 13, 8, 32, 86, 51, 48, 63 ];
const age1 = [];
for(let i = 0; i < age.length; i++) {
    if(i >= 18) {
    age1.push(i);
    }
  }
  console.log(age1);

  //with Using a Higher-Order Function (Filter)

  function adultOrNot(age){
    return age >= 18;
  }

const age2  = age.filter(adultOrNot);
console.log(age2);