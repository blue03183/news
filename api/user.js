import axios from 'axios';

// 사용자 정보 조회
export const getUsers = async () => {
  const res = await axios.get('http://localhost:4000/users');
  return res.data;
};

// 사용자 등록 api 추가
export const createUser = async (userInfo) => {
  try {
		await axios.post('http://localhost:4000/users', userInfo);
  } catch (error) {
    throw error;
  }
};