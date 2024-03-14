import request from '@/utils/request'

const base_api = '/admin/product/category'

// 根据parentId获取下级节点
export const FindCategoryByParentId = parentId => {
  return request({
    url: `${base_api}/findByParentId/${parentId}`,
    method: 'get',
  })
}

// 导出方法
export const ExportCategoryData = () => {
  return request({
    url: `${base_api}/exportData`,
    method: 'get',
    responseType: 'blob'  // // 这里指定响应类型为blob类型,二进制数据类型，用于表示大量的二进制数据
  })
}
