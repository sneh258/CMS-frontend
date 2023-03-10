import axios from 'axios';
import { BACKEND_URL, AUTH_URL } from '../../constants/apiEndPoints';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (
  apiEndPoint,
  navigate,
  dynamicConfig = {},
  token
) => {
  try {
    console.log(dynamicConfig);
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    const errorStatus = e.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    } else {
      navigate(ERROR_ROUTE);
    }
    return null;
  }
};

const makeAuthRequest = async (apiEndPoint, dynmaicConfig) => {
  const requestDetails = {
    baseURL: AUTH_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynmaicConfig,
  };

  const { data } = await axios(requestDetails);
  return data;
};

export { makeRequest, makeAuthRequest };
