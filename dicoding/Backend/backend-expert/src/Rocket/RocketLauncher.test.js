// const Rocket = require('./Rocket')
// const RocketLauncher = require('./RocketLauncher')
// const RocketRepairKit = require('./RocketRepairKit')
//
// describe('A RocketLauncher', () => {
//     // Arrange
//     it('should launch all rockets', () => {
//         const nasaRocket = new Rocket('nasa')
//         const spaceXRocket = new Rocket('spaceX')
//
//     // Dummy
//         const rocketLauncher = new RocketLauncher({},[nasaRocket, spaceXRocket])
//
//     // Action
//         rocketLauncher.launchAllRocket()
//
//     // Assert
//         expect(nasaRocket.engineStatus).toEqual('active')
//         expect(spaceXRocket.engineStatus).toEqual('active')
//         expect(rocketLauncher.rockets.length).toEqual(0);
//     });
//
//     it('should launch rocket by queue', () => {
//         // Arrange
//         const nasaRocket = new Rocket('nasa')
//         const spaceXRocket = new Rocket('spaceX')
//
//         // Dummy
//         const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket])
//
//         //Action
//         rocketLauncher.launchByQueue()
//
//         // Assert
//         expect(nasaRocket.engineStatus).toEqual('active')
//         expect(spaceXRocket.engineStatus).toEqual('inactive')
//         expect(rocketLauncher.rockets.length).toEqual(1)
//     });
//
//     // Stub Example
//     it('should return correct result when repair kit cannot repair the rocket', async () => {
//         // Arrange
//         /* STUB!, we need to change the implementation of function to create situation of test scenario
//         * but we don't even test anything about function that change*/
//         const fakeRocketRepairKit = {
//             repair: () => Promise.reject('failed to repair the rocket')
//         }
//
//         const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [{}])
//
//         // Action
//         const result = await rocketLauncher.repairAllRocket()
//
//         // Assert
//         expect(result).toEqual('there was a 1 of 1 rocket fail to repair')
//     });
//
//   // Mock Example
//     it('should repair some repairable rocket when repair kit cannot repair some the rocket', async () => {
//         // Arrange
//         const repairableRocket = new Rocket('repairableRocket')
//         const unrepairableRocket = new Rocket('unrepairableRocket')
//
//         // Mock. we need to change the implementation of function to create a result base on our test scenario
//         // we need to test either function how the function is being treated
//         const fakeRocketRepairKit = {
//             repair: jest.fn().mockImplementation((rocket) => {
//                 if(rocket.name === 'repairableRocket') {
//                     return Promise.resolve()
//                 }
//
//                 return Promise.reject('failed to repair the rocket')
//             }),
//         }
//
//         const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [repairableRocket, unrepairableRocket])
//
//         // Action
//         const result = await rocketLauncher.repairAllRocket()
//
//         // Assert
//         expect(result).toEqual(`there was a 1 of 2 rocket fail to repair`)
//
//         // making sure that function repair is being called
//         expect(fakeRocketRepairKit.repair()).toBeCalled()
//         expect(fakeRocketRepairKit.repair()).toBeCalledWith(repairableRocket)
//     });
//
//     // Spy example
//     it('should repair all rockets with repair kit correctly', async () => {
//         // Arrange
//         const nasaRocket = new Rocket('nasa')
//         const spaceXRocket = new Rocket('spaceX')
//
//         // using the real object
//         const rocketRepairKit = new RocketRepairKit({}, {}, {})
//
//         // Spy!, please spying the repair function on RocketRepairKit Object
//         // the aim is to make sure that repair function is being run
//         const spyRepair = jest.spyOn(rocketRepairKit, 'repair')
//         const rocketLauncher = new RocketLauncher(rocketRepairKit, [nasaRocket, spaceXRocket])
//
//         // Action
//         const result = await rocketLauncher.repairAllRocket()
//
//         // Assert
//         expect(spyRepair).toBeCalledTimes(2)
//         expect(spyRepair).toBeCalledWith(nasaRocket)
//         expect(spyRepair).toBeCalledWith(spaceXRocket)
//         expect(result).toEqual('all rocket have been repaired')
//     });
// })