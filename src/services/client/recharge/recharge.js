import request from '@/utils/request';

export async function index() {
  return request('/api/recharge/index');
}
