class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
  }

  add(element) {
    return this.arr.push(element);
  }

  at(index) {
     return this.arr[index];
  }

  get length() {
     return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var temp = [];
    indices.sort();
    for (var i = 0; i < indices.length; i++) {
        temp.push(this.arr[indices[i]]);
    }
    temp.sort(this.comparator);
    for(var i = 0; i < indices.length; i++) {
        this.arr[indices[i]] = temp[0];
        temp.shift();
    }
  }

  setComparator(compareFunction) {
      this.comparator = compareFunction;
    }
}

module.exports = Sorter;
