// //Rocket Launcher
// class RocketLauncher {
//     constructor(repairKit, rockets = []) {
//         this.repairKit = repairKit
//         this.rockets = rockets;
//     }
//
//     //Launching all rockets
//     launchAllRocket() {
//         this.rockets.forEach((rocket) => {
//             rocket.engineStatus = 'active';
//         })
//
//         this.rockets = []
//     }
//
//     // Launching by Queue
//     launchByQueue() {
//         const rocket = this.rockets.shift()
//         rocket.engineStatus = 'active'
//     }
//
//     async repairAllRocket() {
//         let failedRepairCount = 0;
//
//         for(const rocket of this.rockets) {
//             try {
//                 await this.repairKit.repair(rocket)
//             }
//             catch {
//                 failedRepairCount++
//             }
//         }
//
//         if(!failedRepairCount) {
//             return 'all rocket have been repaired'
//         }
//
//         return `there was a ${failedRepairCount} of ${this.rockets.length} rocket fail to repair`
//     }
// }
//
// module.exports = RocketLauncher;