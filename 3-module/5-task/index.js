function getMinMax(str) {
  let filtered = str.split(' ')
                    .filter( item => isFinite(item) == true && isNaN(item) == false)
                    .sort ( (a, b) => a - b);
                  
  let result = {
    min: +filtered[0],
    max: +filtered[filtered.length - 1],
  };

return result
}
