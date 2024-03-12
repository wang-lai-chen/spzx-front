import request from '@/utils/request'

const base_api = '/admin/system/sysRole'

// 分页查询角色数据
export const GetSysRoleListByPage = (current , limit , queryDto) => {
  return request({
    // ``模版字符串
    url: `${base_api}/findByPage/${current}/${limit}`,  // 路径
    method: 'post', // 提交方式
    // 接口@RequestBody 前端data：名称，以json格式传输
    // 接口没有注解，前端params：名称
    data: queryDto, // 其它参数
  })
}


// 添加角色请求方法
export const SaveSysRole = (sysRole) => {
  return request({
    url: `${base_api}/saveSysRole`,
    method: 'post',
    data: sysRole,
  })
}
