import { SuiObjectChange } from "@mysten/sui.js/client"
import { SuiGlobalProcessor, SuiNetwork, SuiObjectChangeContext } from "@sentio/sdk/sui"

const LP_TOKEN_TYPE = "0xa0eba10b173538c8fecca1dff298e488402cc9ff374f8a12ca7758eebe830b66::spot_dex::KriyaLPToken<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>"

SuiGlobalProcessor.bind({
  network: SuiNetwork.MAIN_NET
})
  .onObjectChange(async (changes, ctx) => {

    for (let i = 0; i < changes.length; i++) {
      console.log("objectChanges", JSON.stringify(changes[i]))
      processObjectChanges(ctx, changes[i])
    }

  }, LP_TOKEN_TYPE)

//   .onTransactionBlock(async (tx, ctx) => {
//     const balanceChanges = ctx.transaction.balanceChanges

//     if (balanceChanges) {
//       for (let i = 0; i < balanceChanges.length; i++) {
//         const amount = balanceChanges[i].amount
//         const coinType = balanceChanges[i].coinType
//         const owner = balanceChanges[i].owner
//         ctx.eventLogger.emit("balanceChanges", {
//           amount,
//           coinType,
//           owner
//         })
//       }
//     }

//     const objectChanges = ctx.transaction.objectChanges
//     if (objectChanges) {
//       for (let i = 0; i < objectChanges.length; i++) {
//         console.log("objectChanges", JSON.stringify(objectChanges[i]))
//         await processObjectChanges(ctx, objectChanges[i])
//       }
//     }

//   }, {}, { resourceChanges: true })




async function processObjectChanges(ctx: SuiObjectChangeContext, objectChange: SuiObjectChange) {
  try {
    ctx.eventLogger.emit(objectChange.type, objectChange)
  }
  catch (e) {
    console.log(`fail to process object changes for ${JSON.stringify(objectChange)}`)
  }
}

