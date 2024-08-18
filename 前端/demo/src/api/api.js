import service from '@/http/request.js'
export function add(data) {
  return service.request({
    url: '/add',
    method: 'post',
    data
  })
}
export function getDelete() {
  return service.request({
    url: '/get/delete',
    method: 'get',
  })
}
export function getUnDelete() {
  return service.request({
    url: '/get/undelete',
    method: 'get',
  })
}
export function deleteItem(data) {
  return service.request({
    url: '/delete',
    method: 'post',
    data
  })
}
export function deleteTotallyItem(data) {
  return service.request({
    url: '/deleteTotally',
    method: 'post',
    data
  })
}