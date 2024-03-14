import request from '@/utils/request'

const base_api = '/admin/product/category'

// 根据parentId获取下级节点
export const FindCategoryByParentId = parentId => {
  return request({
    url: `${base_api}/findByParentId/${parentId}`,
    method: 'get',
  })
}
