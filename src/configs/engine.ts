import { Engine } from 'json-rules-engine'
import { getVendorDetail } from './almanac'

export const engine = new Engine([], {})

engine.addFact(getVendorDetail)

export default engine
