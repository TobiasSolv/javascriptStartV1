function out(s) {console.log(s)}

let a = 5 ; let b = 6
console.log(a)

console.log("hej" + 5)

console.log(5 + "hej")

console.log("hej" - 5)

out(("jeg er i out" + 4)>"5")
out("g">5)

const c = "hej"
const d = 5
let f
let g = null

if (c>d) {out("c større end d")}
if (c) out("c er noget")

out(f)
out(g)
if (f) out("jeg er undefined")
if (g) out("jeg er null")

let arr = [5, 5.5, "hej", 5>4, f, g, [1,"array2"], {"erik" : 5}, 0/0]

arr.forEach(out)
arr.forEach(s => console.log(s))



