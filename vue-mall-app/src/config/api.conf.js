import { getDataApi } from 'm2-core'

export default getDataApi({
  home: {
    multi: '/home/multidata',
    products: '/home/data'
  }
}, '/api/hy')
