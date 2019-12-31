/**
 * Absolute imports
 */
import React, { useState } from 'react';

/**
 *
 */
// import FileDropZone from '../Forms/FileDropZone';

/**
 * Services
 */
import { uploadImage } from '../../../services/fileService';

export type CreateShopItemFormProps = {
  onSubmit: (formValues: any) => void;
};

const CreateShopItemFrom = ({ onSubmit }: CreateShopItemFormProps) => {
  const [shopItem, setShopItem] = useState({ title: '' });
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setShopItem(currentState => ({ ...currentState, [name]: value }));
  };

  const handeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(shopItem);
    onSubmit({ variables: shopItem });
  };

  const handeFileChange = async (
    acceptedFiles: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsUploading(true);
    console.log(acceptedFiles.target.files);

    const { files } = acceptedFiles.target;

    if (!files) {
      return;
    }

    await Promise.all(
      Array.from(files).map(async file => {
        const uploadResult = await uploadImage(file);
        const preview = uploadResult?.secure_url;
        const largePreview = uploadResult?.eager?.[0]?.secure_url;

        setShopItem(currentState => ({
          ...currentState,
          preview,
          largePreview,
        }));
      }),
    );

    // await Promise.all(
    //   acceptedFiles.map(async file => {
    //     const uploadResult = await uploadImage(file);
    //     const preview = uploadResult.secure_url;
    //     const largePreview = uploadResult.eager[0].secure_url;

    //     setShopItem(currentState => ({
    //       ...currentState,
    //       preview,
    //       largePreview,
    //     }));
    //   }),
    // );

    setIsUploading(false);
  };

  return (
    <form onSubmit={handeSubmit}>
      <h4>Create Shop Item</h4>
      {/* <FileDropZone onDrop={handeFileChange} disabled={isUploading} /> */}
      <input type="file" name="image" onChange={handeFileChange} />
      <input
        type="text"
        name="title"
        value={shopItem.title}
        placeholder="Title"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateShopItemFrom;
