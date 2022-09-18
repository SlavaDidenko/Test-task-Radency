function loadGrain(levels) {
  let result = 0;
  let higher = 0;
  let width = 0;
  let resultSegment = 0;


  let finish = levels.length;

  for (let k = levels.length - 1; k > 1; k--) {

    if (levels[k] < levels[k - 1]) {

      if (levels[k - 1] > levels[k - 2]) {
        finish -= 1;
        
        if (levels[levels.length - 1] <= levels[k - 1]) {
          result = resultSegment;
          break;
        } 
        result = resultSegment - (levels[levels.length - 1] - levels[k - 1]) * width;
        break;
      }

      finish -= 1;
      continue;
    }

    finish -= 1;
    resultSegment += levels[levels.length - 1] - levels[k - 1];
    width++;
  }

  resultSegment = 0;
  width = 0;


  for (let i = 1; i < finish ; i++) {
    if (i == finish - 1) {
      if (levels[higher] <= levels[i]) {
        result += resultSegment;
        break;
      } else {
        result += resultSegment - (levels[higher] - levels[i]) * width;
      }
    } 

    if (levels[higher] <= levels[i]) {
      higher = i;
      result += resultSegment;
      resultSegment = 0;
      width = 0;
      continue;
    }

    resultSegment += levels[higher] - levels[i];
    width++;
  }
  return result;
}
