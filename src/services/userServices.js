import axiosKit from '../helpers/axiosKit'

/**
 * 获取首页列表
 */
export const login = ({queryKey}) => {
    console.log(queryKey);
    return axiosKit("get", "api/login",queryKey[0]);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
}