import request from '@/utils/request'

const base_api = '/admin/product/brand'

// 分页列表
export const GetBrandPageList = (page, limit) => {
  return request({
    url: `${base_api}/${page}/${limit}`,
    method: 'get'
  })
}
