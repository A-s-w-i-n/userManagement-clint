import { useState, ChangeEvent, FormEvent } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateUser } from "../../Redux/User/user";

interface UserState {
  username: string;
  userId: string;
  image: string;
}

const Profile = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState<FileList | null>(null);
  const { username, userId, image } = useSelector(
    (state: { user: UserState }) => state.user
  );

  const imageUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images && images.length > 0) {
      const formData = new FormData();
      formData.append("image", images[0]);
      formData.append("userId", userId);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
          userId: userId,
        },
        withCredentials: true,
      };

      try {
        const { data } = await axios.post(
          "http://localhost:4000/profile",
          formData,
          config
        );

        dispatch(updateUser({ image: data.images, username, userId }));
        console.log(data);
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
  };

  return (
    <div>
      <div className="profilePage">
        <div className="card-client">
          <div className="user-picture">
            {!image ? (
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
              </svg>
            ) : (
              <img src={`/Images/${image}`} alt="" width={250} />
            )}
          </div>
          <p className="name-client">
            {username}
            <span></span>
          </p>
        </div>
      </div>

      <div className="container">
        <form onSubmit={imageUpload}>
          <label htmlFor="arquivo"></label>
          <input
            id="inpdddut"
            name="arquivo"
            className="arquivo"
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImages(e.target.files)
            }
          />
          {images && <input type="submit" value="Send" className="inpdddut" />}
        </form>
      </div>
    </div>
  );
};

export default Profile;
