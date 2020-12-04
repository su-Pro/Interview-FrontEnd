// const promise = new Promise();
// promise.finally(() => {
//     // ...
// })
// promise.then(value => {
// //    ...
//       return value
//   }, reason => {
//       //  ...
//       throw reason
//   }
// )


Promise.prototype._finally = cb => this.then(
  value => Promise.resolve(cb()).then(() => value),
  reason => Promise.resolve(cb()).then(() => {
      throw reason
  })
)




