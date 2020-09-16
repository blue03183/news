import axios from 'axios';

// 사용자 정보 조회
export const getUsers = async () => {
  const res = await axios.get('http://localhost:4000/users');
  return res.data;
};