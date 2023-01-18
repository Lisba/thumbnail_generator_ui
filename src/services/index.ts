import { apiClient } from '@config';
import { UPLOAD_IMAGE_URL } from './constants';

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append('selectedImage', image);
  const url = UPLOAD_IMAGE_URL;
  const payload = formData;
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const { data } = await apiClient.post(url, payload, config);
  return data;
};
