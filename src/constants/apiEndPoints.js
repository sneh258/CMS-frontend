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
  url: 'record/create',
  method: 'post',
};
export const UPDATE_CONTENT_TYPE_URL = {
  url: 'record/update',
  method: 'post',
};
export const ADD_FIELD_CONTENT_URL = {
  url: 'record/column',
  method: 'post',
};
export const EDIT_FIELD_CONTENT_URL = {
  url: 'record/column',
  method: 'patch',
};
export const DELETE_FIELD_CONTENT_URL = {
  url: 'record/column',
  method: 'delete',
};
export const GET_CONTENT_DETAIL_URL = {
  url: 'record/details',
  method: 'get',
};

export const GET_CONTENT_BY_ID_URL = {
  url: 'record/details',
  method: 'post',
};

export const GET_COLLECTION_DETAILS = {
  url: 'collection/details',
  method: 'get',
};
export const GET_DATA_OF_COLLECTION = {
  url: 'collection/details',
  method: 'post',
};
export const DELETE_ENTRY_OF_COLLECTION= {
  url: 'collection/column',
  method: 'delete',
};
export const EDIT_ENTRY_OF_COLLECTION= {
  url: 'collection/update',
  method: 'patch',
};
export const ADD_ENTRY_TO_COLLECTION= {
  url: 'collection/update',
  method: 'post',
};

