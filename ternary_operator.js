let a = 10,
  b = 7,
  c = 12,
  d = 9;

let max =
  a > b
    ? a > c
      ? a > d
        ? a
        : d
      : c
    : b > c
    ? b > d
      ? b
      : d
    : c > d
    ? c
    : d > a
    ? d
    : a;
console.log(max);

let e = 10,
  f = 20,
  u = 89,
  k = 7;
let max1 =
  e > f
    ? e > u
      ? e > k
        ? e
        : k
      : u
    : f > u
    ? f > k
      ? f
      : k
    : u > k
    ? u
    : k;
console.log(max1);
