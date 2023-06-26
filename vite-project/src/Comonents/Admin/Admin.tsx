import React, { useEffect, useState } from "react";
import "./Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUser } from "../../Redux/Admin/admin";

interface User {
  _id: string;
  image: string;
  username: string;
}

const Admin: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteUser = (userId: string) => {
    axios
      .post(
        "http://localhost:4000/admin/deleteUser",
        { userId },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.data.user) setUser(result.data.user);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const usersResponse = await axios.get('http://localhost:4000/userget');
            const usersData = usersResponse.data;
            setUser(usersData);

            const token = localStorage.getItem('admin');
            const { data } = await axios.post('http://localhost:4000/admin/auth', { token }, { withCredentials: true });
            console.log(data.token);

            if (data.token === 'valid') {

            } else {
                localStorage.removeItem('admin');
                navigate('/admin/login');
            }
        } catch (error) {

            console.log(error);
        }
    };

    fetchData();
}, []);

  return (
    <div>
      <div>
        <button
          onClick={() => navigate("/admin/adduser")}
          style={{ position: "relative", left: 20 }}
        >
          Add User
        </button>
        <div className="input-container">
          <input
            placeholder="Search something..."
            className="input-s"
            name="text"
            type="text"
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon"
          >
            {/* SVG paths */}
          </svg>
        </div>
        <h2 className="userHead">Users</h2>
        <table>
          <thead>
            <tr>
              <th>avatar</th>
              <th>name</th>
              <th>control</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter((user) => user.username.toLowerCase().includes(search))
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {user.image ? (
                        <img
                          src={`/images/${user.image}`}
                          alt="placehold"
                          width={100}
                        />
                      ) : (
                        <img
                          src="https://static-00.iconduck.com/assets.00/profile-minor-icon-256x256-6u3v5w0z.png"
                          alt="placehold"
                          width={30}
                        />
                      )}
                    </td>

                    <td>{user.username}</td>

                    <td>
                      <button
                        onClick={() => {
                          dispatch(
                            changeUser({ id: user._id, name: user.username })
                          );
                          navigate("/admin/edit-user");
                        }}
                        className="button_one"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="button_two"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
