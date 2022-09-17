function loadGrain(levels) {
  let result = 0;
  let higher = 0;
  let width = 0;
  let resultSegment = 0;
  for (let i = 1; i < levels.length ; i++) {

    if (i == levels.length - 1) {
      if (levels[higher] < levels[i]) {
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