import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dogsData, catsData } from "../petsdata";
import "./form.scss";
import { indexedDb } from "../indexedDb";
export default function Form({
  heading,
  title,
  buttonInfo,
  handleForm,
  handleFormGiveAway,
}) {
  const [formvisible, setFormVisible] = useState(true);
  const [userInfo, setUserInfo] = useState({
    Type: "",
    Breed: "",
    Name: "",
    Email: "",
    Phone: "",
  });
  const handleClick = () => {
    setFormVisible(!formvisible);
    heading === "Adopt a pet" ? handleForm() : handleFormGiveAway();
  };
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  const { Name, Email, Phone, Type, Breed } = userInfo;
  const handleValidation = () => {
    if (
      Email === "" ||
      Name === "" ||
      Phone === "" ||
      Type === "" ||
      Breed === ""
    ) {
      toast.error("Please fill  all the reequired details", {
        theme: "dark",
      });
      return false;
    } else if (Name.length < 5) {
      toast.error("Name should be of minimum 5 Characters", {
        theme: "dark",
      });
      return false;
    } else if (ValidateEmail(Email) === false) {
      toast.error("Plese enter a valid email", {
        theme: "dark",
      });
      return false;
    } else if (Phone.length !== 10) {
      toast.error("Phone number should be of 10 digits", {
        theme: "dark",
      });
      return false;
    }
    return true;
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (handleValidation()) {
       heading === "Adopt a pet"
        ? indexedDb("Adopt", "userData", userInfo)
        : indexedDb("GiveAway", "userData", userInfo);
  }
  };
  return (
    <div className="formWrapper">
      {formvisible && (
        <div className="formContainer">
          <button className="closeButton" onClick={handleClick}>
            <CloseIcon />
          </button>
          <h3>{heading}</h3>
          <h3>{title}</h3>
          <form>
            <div className="addItem">
              <label>
                Pet type <span>*</span>
              </label>
              <select name="Type" required onChange={handleChange}>
                <option>Select</option>
                <option value="Dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <div className="addItem">
              <label>
                Breed <span>*</span>
              </label>
              <select name="Breed" required onChange={handleChange}>
                <option>Select</option>
                {userInfo.Type === "Dog"
                  ? dogsData.map((info) => (
                      <option key={info.id} value={info.Breed}>
                        {info.Breed}
                      </option>
                    ))
                  : catsData.map((info) => (
                      <option key={info.id} value={info.Breed}>
                        {info.Breed}
                      </option>
                    ))}
              </select>
            </div>
            <h3>Please fill in yor details</h3>
            <div className="addItem">
              <label>
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="enter  name"
                name="Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="addItem">
              <label>
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder=" abcd@gmail.com"
                name="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="addItem">
              <label>
                Phone <span>*</span>
              </label>
              <input
                type="number"
                placeholder="1234567809"
                name="Phone"
                onChange={handleChange}
                required
              />
            </div>
            <div className="buttonWrap">
              <button onClick={handleSubmit}>{buttonInfo}</button>
            </div>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
