
import Axios from './../../utils/diyaxios';
const API_CONFIG = '/api';

/**
 * [getAllMessage 获取某个用户的好友和群]
 * @param  {[type]} userId [用户id]
 * @return {[type]}        [消息]
 */
export const get_new_list = () => {
	const url = `${API_CONFIG}/news`;
	console.log(url);
	return Axios({ method:"GET",url:url});
}
