import React from "react";
import PropTypes from "prop-types";
import Index from "../../../components/Image";
import ContactForm from "./ContactForm";
import style from "../Contact.module.css";

// import icon
import editIcon from "../../../images/edit-icon.png";

const ContactDetail = ({
  contact,
  showEditForm,
  setShowEditForm,
  onEditSubmit,
}) => {
  const { firstName, lastName, age, photo } = contact;

  const _onEditSubmit = (data) => {
    console.log(data);
    onEditSubmit(data);
  };

  const onEditClick = () => {
    setShowEditForm((prevState) => !prevState);
  };

  return (
    <div className={style.detail}>
      <div style={{ display: "inline-block" }}>
        <Index src={photo} width={"100px"} height={"100px"} circular={true} />
      </div>
      <p className={style.name}>{`${firstName} ${lastName}`.trim()}</p>
      <p className={style.age}>{`${age} years old`}</p>

      <div
        className={`${style["edit-form-wrapper"]} ${
          showEditForm ? style.open : ""
        }`.trim()}
      >
        <ContactForm
          current={contact}
          onSubmit={_onEditSubmit}
          loading={editLoading}
        />
      </div>

      <button
        type="button"
        className={style["modal-btn"]}
        onClick={onEditClick}
      >
        <img src={editIcon} alt="Edit" style={{ width: "20px" }} />
      </button>
    </div>
  );
};

ContactDetail.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    photo: PropTypes.string,
  }).isRequired,
  editLoading: PropTypes.bool,
  onCloseClick: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
};

export default ContactDetail;
