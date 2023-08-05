import { Participation } from "./participation"

test("toString", () => {
  const arisuStatus = Participation.in
  let result = Participation.toString(arisuStatus)
  let ok = "参加中"
  console.log(`toString (arisu): ${result}`)
  expect(result).toBe(ok)

  const bobStatus = Participation.will
  result = Participation.toString(bobStatus)
  ok = "参加予定"
  console.log(`toString (bob): ${result}`)
  expect(result).toBe(ok)
})


test("Merge", () => {
  const statusA = Participation.will
  const statusB = Participation.in

  const result = Participation.toString(Participation.mergeStatus(statusA, statusB))
  const ok = "参加中"

  console.log(`Merged status is ${result}`)
  expect(result).toBe(ok)
})


// test("enum", () => {
//   enum Enum {
//     zero,
//     one,
//     two,
//   }
//   const three: Enum = 3 // error
// })


// test("Union Type", () => {
//   type UnionType = 0 | 1 | 2
//   const four: UnionType = 4 // error
// })


// describe("hoge", () => {
//   test("fuga", () => {})
// })
