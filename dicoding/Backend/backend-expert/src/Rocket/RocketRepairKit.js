// class RocketRepairKit {
//     // imagine creating the instance of rocketRepairKit is complicated
//     // because need a lot of dependencies
//     constructor(objA, objB, objC) {
//         this.objA = objA
//         this.objB = objB
//         this.objC = objC
//     }
//
//     repair(rocket) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 return resolve(`${rocket.name} is repaired`)
//             }, 500);
//         });
//     }
// }
//
// module.exports = RocketRepairKit;