
import { ref } from 'vue';

import service from './juejin';

const userInfo = ref({});

const useGetUserInfo = () => {
  const getUserInfo = async () => {
    const res = await service.get('/user', {
      id: '4099422807393901',
    });
    console.log('🚀🚀 ~ res:', res);
  };
  return {
    userInfo,
    getUserInfo,
  };
};

export default useGetUserInfo;
