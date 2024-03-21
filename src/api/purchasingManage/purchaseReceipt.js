import axios from 'axios'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

const baseUrl = process.env.VUE_APP_BASE_API
const purchaseInUploadApi = baseUrl + '/api/purchaseIn/upload'
export function purchaseInUpload(file) {
  const data = new FormData()
  data.append('file', file)
  const config = {
    headers: {
      'Authorization': getToken(),
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(purchaseInUploadApi, data, config)
}

export function purchaseInQuery(params) {
  return request({
    url: 'api/purchaseIn',
    method: 'get',
    params
  })
}