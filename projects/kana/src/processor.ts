import { kana_aggregatorv1 } from './types/aptos/KanalabsV0'
import { KanalabsAggregatorV1, KanalabsRouterV1 } from './types/aptos/KanalabsAggregatorV1'
import { getPrice, getCoinInfo, whiteListed, scaleDown } from "@sentio-processor/common/aptos/coin"
import { AccountEventTracker, Counter, Gauge } from "@sentio/sdk"
import { type_info } from "@sentio/sdk/aptos/lib/builtin/0x1"

const commonOptions = { sparse: true }
export const volOptions = {
  sparse: true,
  aggregationConfig: {
    intervalInMinutes: [60],
    // discardOrigin: false
  }
}

const accountTracker = AccountEventTracker.register("users")
const totalTx = Counter.register("tx", commonOptions)
const volCounter = Counter.register("vol_counter", commonOptions)
const vol = Gauge.register("vol", commonOptions)
const routes = Gauge.register("routes", commonOptions)
const routesCounter = Counter.register("routes_counter", commonOptions)



// here starts the previous contract
kana_aggregatorv1.bind()
  .onEventSwapStepEvent(async (event, ctx) => {
    ctx.meter.Counter('swap_step_event_emit').add(1)
    const dexType = event.data_decoded.dex_type
    const poolType = event.data_decoded.pool_type
    const inputAmount = event.data_decoded.input_amount
    const outputAmount = event.data_decoded.output_amount
    const xType = extractTypeName(event.data_decoded.x_type_info)
    const yType = extractTypeName(event.data_decoded.y_type_info)

    const timestamp = event.data_decoded.time_stamp

    const coinXInfo = getCoinInfo(xType)
    const coinYInfo = getCoinInfo(yType)
    const symbolX = coinXInfo.symbol
    const symbolY = coinYInfo.symbol
    const priceX = await getPrice(xType, Number(timestamp))
    const priceY = await getPrice(yType, Number(timestamp))
    const pair = constructPair(xType, yType)
    const volume = scaleDown(inputAmount, coinXInfo.decimals).multipliedBy(priceX)
    const displayPair = constructDisplay(symbolX, symbolY)

    accountTracker.trackEvent(ctx, { distinctId: ctx.transaction.sender, address: '0x62fdfe47c9c37227be1f885e79be827be292fe1833ac63a2fe2c2c16c55ecb12', contract: 'kana_aggregatorv1' })
    totalTx.add(ctx, 1)
    if (whiteListed(xType)) {
      vol.record(ctx, volume, { dex: getDex(dexType), poolType: poolType.toString(), xType: xType, yType: yType, symbolX: symbolX, symbolY: symbolY, pair: displayPair })
      volCounter.add(ctx, volume, { dex: getDex(dexType), poolType: poolType.toString(), xType: xType, yType: yType, symbolX: symbolX, symbolY: symbolY, pair: displayPair })
    }

  })

// here starts the new contract
KanalabsAggregatorV1.bind()
  .onEventSwapStepEvent(async (event, ctx) => {
    ctx.meter.Counter('swap_step_event_emit').add(1)
    const dexType = event.data_decoded.dex_type
    const poolType = event.data_decoded.pool_type
    const inputAmount = event.data_decoded.input_amount
    const outputAmount = event.data_decoded.output_amount
    const xType = extractTypeName(event.data_decoded.x_type_info)
    const yType = extractTypeName(event.data_decoded.y_type_info)

    const timestamp = event.data_decoded.time_stamp

    const coinXInfo = getCoinInfo(xType)
    const coinYInfo = getCoinInfo(yType)
    const symbolX = coinXInfo.symbol
    const symbolY = coinYInfo.symbol
    const priceX = await getPrice(xType, Number(timestamp))
    const priceY = await getPrice(yType, Number(timestamp))
    const pair = constructPair(xType, yType)
    const volume = scaleDown(inputAmount, coinXInfo.decimals).multipliedBy(priceX)
    const displayPair = constructDisplay(symbolX, symbolY)

    accountTracker.trackEvent(ctx, { distinctId: ctx.transaction.sender, address: '0xcdca128119681f791ddc2283e8c7b364ae22d416c5be95b0faf6aa1818c7afd6', contract: 'KanalabsAggregatorV1' })
    totalTx.add(ctx, 1)
    if (whiteListed(xType)) {
      vol.record(ctx, volume, { dex: getDex(dexType), poolType: poolType.toString(), xType: xType, yType: yType, symbolX: symbolX, symbolY: symbolY, pair: displayPair })
      volCounter.add(ctx, volume, { dex: getDex(dexType), poolType: poolType.toString(), xType: xType, yType: yType, symbolX: symbolX, symbolY: symbolY, pair: displayPair })
    }

  })

KanalabsRouterV1.bind()
  .onEventRouteCount((async (event, ctx) => {
    const routeType = Number(event.data_decoded.type)
    routes.record(ctx, 1, { routeType: getRoute(routeType) })
    routesCounter.add(ctx, 1, { routeType: getRoute(routeType) })
  }))

function constructPair(xType: String, yType: String) {
  if (xType > yType) {
    return xType + "-" + yType
  } else {
    return yType + "-" + xType
  }
}

function constructDisplay(symbolX: String, symbolY: String) {
  if (symbolX > symbolY) {
    return symbolX + "-" + symbolY
  } else {
    return symbolY + "-" + symbolX
  }
}

function extractTypeName(typeInfo: type_info.TypeInfo) {
  var rawName = hex_to_ascii(typeInfo.struct_name)
  if (rawName.startsWith("Coin<")) {
    return rawName.substring(5, rawName.length - 1)
  } else {
    return rawName
  }
}

function hex_to_ascii(str1: String) {
  var hex = str1.toString();
  if (hex.startsWith("0x")) {
    hex = hex.substring(2)
  }
  var str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}


function getDex(dex: number) {
  if (DEX_MAP.has(dex)) {
    return DEX_MAP.get(dex)!
  } else {
    return 'dex_unk_' + dex.toString()
  }
}

const DEX_MAP = new Map<number, string>([
  [1, 'Liquidswap'],
  [2, 'Aptoswap'],
  [3, 'Basiq'],
  [4, 'PancakeSwap'],
  [5, 'Cetus'],
  [6, 'Animeswap'],
  [7, 'Aux'],
  [8, 'Orbic']
])

function getRoute(routeType: number) {
  if (ROUTE_MAP.has(routeType)) {
    return ROUTE_MAP.get(routeType)!
  } else {
    return 'route_unk_' + routeType.toString()
  }
}

const ROUTE_MAP = new Map<number, string>([
  [1, 'SWAP'],
  [2, 'STAKE'],
  [3, 'UNSTAKE'],
  [4, 'TRANSFER'],
  [5, 'CLAIM'],
  [6, 'SWAP_STAKE'],
  [7, 'STAKE_SWAP'],
  [8, 'UNSTAKE_SWAP'],
  [9, 'SWAP_TRANSFER'],
  [10, 'CLAIM_SWAP'],
  [11, 'CLAIM_SWAP_STAKE'],
  [12, 'STAKE_SWAP_TRANSFER'],
  [13, 'UNSTAKE_SWAP_TRANSFER'],
])