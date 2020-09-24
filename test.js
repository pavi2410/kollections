import { listOf } from "./kollections.js"

const klist = listOf(1,2,3,4,5);

console.log(klist)
console.log(klist.toString())

console.log(klist[0])
console.log(klist.get(0))

console.log(klist.length)
console.log(klist.size)

console.log(klist.contains(3))
console.log(3 in klist)

console.log(klist.reverse())

console.log(klist.filter(k => k % 2 === 0))
klist.forEach(k => console.log(k * 2))
console.log(klist.map(k => k * 2))

for (const val of klist) {
  console.log(val); // '1' '2' '3' '4' '5' 
}

klist.add(6)
console.log(klist)

klist.remove(4)
console.log(klist)
