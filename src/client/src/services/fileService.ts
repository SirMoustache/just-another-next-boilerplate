export interface Eager {
  transformation: string;
  width: number;
  height: number;
  bytes: number;
  format: string;
  url: string;
  secure_url: string;
}

export interface CloudinaryResponce {
  public_id: string;
  version: number;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
  eager: Eager[];
}

export const uploadImage = (
  file: File,
  options?: any,
): Promise<CloudinaryResponce> => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.CLOUDINARY_PRESET || '');

  return fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ACCOUNT}/image/upload`,
    {
      method: 'POST',
      body: data,
    },
  ).then(responce => responce.json());

  //   return axios
  //     .post(
  //       'https://api.cloudinary.com/v1_1/sir-moustache/image/upload',
  //       data,
  //       options,
  //     )
  //     .then(response => response.data);
};
