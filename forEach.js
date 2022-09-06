Array.prototype.ForEach = function(number) {
    for(let i=0; i<this.length; i++) {
        number(this[i], i)
    }
};

[3, 6, 9, 12, 15].ForEach(function(val, i){
   console.log(val);
});