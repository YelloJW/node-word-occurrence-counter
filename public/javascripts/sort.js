// sorting methods
const ByCountHighToLow = (wordCountArr) => {
  wordCountArr = wordCountArr.sort(function Comparator(a, b) {
     if (a[1] < b[1]) return 1;
     if (a[1] > b[1]) return -1;
     return 0;
    });
  return wordCountArr
}

const ByCountLowToHigh = (wordCountArr) => {
  wordCountArr = wordCountArr.sort(function Comparator(a, b) {
     if (a[1] > b[1]) return 1;
     if (a[1] < b[1]) return -1;
     return 0;
    });
  return wordCountArr
}

const ByWordAZ = (wordCountArr) => {
  wordCountArr = wordCountArr.sort(function Comparator(a, b) {
     if (a[0] < b[0]) return 1;
     if (a[0] > b[0]) return -1;
     return 0;
    });
  return wordCountArr
}

const ByWordZA = (wordCountArr) => {
  wordCountArr = wordCountArr.sort(function Comparator(a, b) {
     if (a[0] > b[0]) return 1;
     if (a[0] < b[0]) return -1;
     return 0;
    });
  return wordCountArr
}

const sort = (wordCountArr, sortMethod) => {
  if (sortMethod === "Word count DESC") return ByCountHighToLow(wordCountArr)
  if (sortMethod === "Word count ASC") return ByCountLowToHigh(wordCountArr)
  if (sortMethod === "Words A-Z") return ByWordAZ(wordCountArr)
  if (sortMethod === "Words Z-A") return ByWordZA(wordCountArr)
}

exports.ByCountHighToLow = ByCountHighToLow;
exports.sort = sort
