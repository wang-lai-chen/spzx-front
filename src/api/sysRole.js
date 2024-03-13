import request from '@/utils/request'

const base_api = '/admin/system/sysRole'

// 分页查询角色数据
export const GetSysRoleListByPage = (current, limit, queryDto) => {
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


// 保存修改
export const UpdateSysRole = (sysRole) => {
  return request({
    url: `${base_api}/updateSysRole`,
    method: 'put',
    data: sysRole,
  })
}


// 删除角色
export const DeleteSysRoleById = (roleId) => {
  return request({
    url: `${base_api}/deleteById/${roleId}`,
    method: 'delete',
  })
}


// 查询一个用户的所有的角色数据
export const GetAllRoleList = (userId) => {
  return request({
    url: `/admin/system/sysRole/findAllRoles/${userId}`,
    method: 'get'
  })
}
