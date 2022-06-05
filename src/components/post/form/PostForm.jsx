import { useContext, useEffect, useState } from 'react';
import { createPost } from '../../../api/post';
import { AuthContext } from '../../../contexts/AuthContext';
import SavePostButton from './SavePostButton';
import TextArea from './TextArea';
import UploadImage from './UploadImage';
import Spinner from '../../common/Spinner';

function PostForm({ open, onClose: closeModal }) {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle('');
    setImage(null);
  }, [open]);

  const handleClickSavePost = async () => {
    try {
      setLoading(true);
      await createPost(title, image);
      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner></Spinner>}
      <TextArea
        placeholder={`What's on your mind, ${user.firstName}?`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></TextArea>
      <UploadImage
        value={image}
        onChange={(e) => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
        onDelete={() => setImage(null)}
      ></UploadImage>
      <SavePostButton onClick={handleClickSavePost}></SavePostButton>
    </>
  );
}

export default PostForm;
