function largestNumber(a, b) {
 if (a > b) return a
 if (b > a) return b
 if (a == null || b == null) return 0
 return null
}

const biggest = largestNumber(5, 8)
