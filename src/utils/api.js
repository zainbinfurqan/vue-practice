import helpers from './helpers'
import constant from '../config/constants'

const apis = {};


// login api
apis.login = function (body = null, authorization = null) {
    return helpers.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/auth/login`,
    );
};

// registration api
apis.registration = function (body = null, authorization = null) {
    return helpers.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/auth/registration`,
    );
};

// registration api
apis.createPost = function (body = null, authorization = null) {
    return helpers.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/post/`,
    );
};

// fetch message api
apis.fetchPosts = function (body = null, authorization = null, params) {
    return helpers.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/posts?userid=${params.userId}`,
    );
};

// fetch message api
apis.searchPost = function (body = null, authorization = null) {
    return helpers.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/posts`,
    );
};

export default apis