export const BACKEND_URL = 'http://localhost:4000';
export const AUTH_URL = 'http://localhost:5000/user';

export const LOGIN_URL = {
  url: 'login',
  method: 'post',
};

export const REGISTER_URL = {
  url: 'register',
  method: 'post',
};

export const VALIDATE_TOKEN_URL = {
  url: '/token/validate',
  method: 'get',
};

export const CREATE_CONTENT_TYPE_URL = {
  url: 'record/save',
  method: 'post',
};
export const UPDATE_CONTENT_TYPE_URL = {
  url: 'record/update',
  method: 'post',
};
export const ADD_FIELD_CONTENT_URL = {
  url: 'record/field',
  method: 'post',
};
export const EDIT_FIELD_CONTENT_URL = {
  url: 'record/save',
  method: 'patch',
};
export const DELETE_FIELD_CONTENT_URL = {
  url: 'record/save',
  method: 'delete',
};
export const GET_CONTENT_DETAIL_URL = {
  url: 'record/details',
  method: 'get',
};

