import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ButtonStyle, WhiteButton } from "../components/StyledComponents";

function MyProfilePage() {
  const [initialValues] = useState({
    firstName: "Bima",
    lastName: "Sakti",
    username: "bimsak",
    email: "bimasakti@gmail.com",
    phoneNumber: "082465478654",
    address: "Semarang",
  });

  const [formData, setFormData] = useState({ ...initialValues });

  const [profilePicture, setProfilePicture] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Fungsi untuk menyimpan data profil
  const saveProfile = (event) => {
    event.preventDefault();
    console.log("Profile updated:", {
      ...formData,
      profilePicture,
    });
    setEditMode(false);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const cancelEdit = () => {
    setFormData({ ...initialValues });
    setEditMode(false);
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow"
        style={{ border: "none", borderRadius: "0" }}
      >
        <div className="card-body">
          <h2
            className="title-profile"
            style={{ fontSize: "24px", fontWeight: "bold", margin: "20px" }}
          >
            My Profile
          </h2>
          <div className="text-center mb-3">
            <img
              src={
                profilePicture
                  ? URL.createObjectURL(profilePicture)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrwMvUgClCnBNDMfiBcopM8BgT74epXtu0g&s"
                }
              alt=""
              className="img-fluid rounded-circle"
              style={{ width: 100, height: 100, marginLeft: "0" }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="form-control mt-2"
              disabled={!editMode}
            />
          </div>
          <form onSubmit={saveProfile}>
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                {editMode ? (
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter first name"
                  />
                ) : (
                  <div>{formData.firstName}</div>
                )}
              </div>
              <div className="col-md-12">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                {editMode ? (
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter last name"
                  />
                ) : (
                  <div>{formData.lastName}</div>
                )}
              </div>
              <div className="col-md-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                {editMode ? (
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter username"
                  />
                ) : (
                  <div>{formData.username}</div>
                )}
              </div>
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                {editMode ? (
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter email address"
                  />
                ) : (
                  <div>{formData.email}</div>
                )}
              </div>
              <div className="col-md-12">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                {editMode ? (
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                ) : (
                  <div>{formData.phoneNumber}</div>
                )}
              </div>
              <div className="col-md-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                {editMode ? (
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter address"
                  />
                ) : (
                  <div>{formData.address}</div>
                )}
              </div>
            </div>
            {editMode ? (
              <div className="col-md-12 d-flex justify-content-left text-center">
                <ButtonStyle
                  type="submit"
                  className="btn-update"
                  style={{ marginRight: "25px" }}
                >
                  Update
                </ButtonStyle>
                <WhiteButton
                  type="button"
                  className="btn-cancel"
                  onClick={cancelEdit}
                >
                  Cancel
                </WhiteButton>
              </div>
            ) : (
              <ButtonStyle
                type="button"
                className="btn-edit"
                onClick={() => setEditMode(true)}
              >
                Edit
              </ButtonStyle>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
