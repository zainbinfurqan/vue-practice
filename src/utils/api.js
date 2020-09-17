import helpers from './helpers'
import constant from '../config/constants'

const apis = {};


// fetch message api
apis.fetchPosts = function (body = null, authorization = null) {
    return helpers.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/posts`,
    );
};

export default apis