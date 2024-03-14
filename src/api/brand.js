import request from '@/utils/request'

const base_api = '/admin/product/brand'

// 分页列表
export const GetBrandPageList = (page, limit) => {
  return request({
    url: `${base_api}/${page}/${limit}`,
    method: 'get'
  })
}

// 保存品牌
export const SaveBrand = brand => {
  return request({
    url: `${base_api}/save`,
    method: 'post',
    data: brand,
  })
}

// 修改信息
export const UpdateBrandById = brand => {
  return request({
    url: `${base_api}/updateById`,
    method: 'put',
    data: brand,
  })
}

// 根据id删除品牌
export const DeleteBrandById = id => {
  return request({
    url: `${base_api}/deleteById/${id}`,
    method: 'delete',
  })
}
