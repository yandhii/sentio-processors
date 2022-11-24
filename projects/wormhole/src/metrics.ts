import { AccountEventTracker, Gauge } from "@sentio/sdk";

export const commonOptions = { sparse:  true }
export const totalValue = Gauge.register("total_value", commonOptions)
export const tvlAll = Gauge.register("tvl_all", commonOptions)
export const tvlByPool = new Gauge("tvl_by_pool", commonOptions)
// export const tvlByPoolNew = new Gauge("tvl_by_pool_new", commonOptions)
export const tvl = Gauge.register("tvl", commonOptions)
export const volume = Gauge.register("vol", commonOptions)

export const inputUsd = [100, 1000, 10000, 100000]
export const priceImpact = Gauge.register("price_impact", commonOptions)
//
// export const priceGauge = new Gauge("price", commonOptions)
// export const priceGaugeNew = new Gauge("price_new", commonOptions)

// export const accountTracker = AccountEventTracker.register("users")
// export const lpTracker = AccountEventTracker.register("lp")

export const auxTvlAll = Gauge.register("aux_tvl_all", commonOptions)
export const auxVolume = Gauge.register("aux_vol", commonOptions)
export const auxTvlByPool = Gauge.register("aux_tvl_by_pool", commonOptions)
export const auxTvl = Gauge.register("aux_tvl", commonOptions)

export const pancakeTvlAll = new Gauge("pancake_tvl_all", commonOptions)
export const pancakeVolume = new Gauge("pancake_vol", commonOptions)
export const pancakeTvlByPool = new Gauge("pancake_tvl_by_pool", commonOptions)
export const pancakeTvl = new Gauge("pancake_tvl", commonOptions)