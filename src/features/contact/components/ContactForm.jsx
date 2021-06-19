import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import style from "../Contact.module.css";

const ContactForm = ({ current, loading = false, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const label = current ? "Submit Edit" : "Submit";

  useEffect(() => {
    reset(current);
  }, [current, reset]);

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={style["form-group"]}>
        <label>Photo URL</label>
        <input
          type="text"
          defaultValue={current ? current.photo : "N/A"}
          {...register("photo", { required: "Please provide the photo url!" })}
        />
        {errors.photo && errors.photo.message}
      </div>

      <div className={style["form-group"]}>
        <label>First Name</label>
        <input
          type="text"
          defaultValue={current ? current.firstName : ""}
          {...register("firstName", {
            required: "Please provide the first name!",
          })}
        />
        {errors.firstName && errors.firstName.message}
      </div>

      <div className={style["form-group"]}>
        <label>Last Name</label>
        <input
          type="text"
          defaultValue={current ? current.lastName : ""}
          {...register("lastName", {
            required: "Please provide the last name!",
          })}
        />
        {errors.lastName && errors.lastName.message}
      </div>

      <div className={style["form-group"]}>
        <label>Age (in years)</label>
        <input
          type="text"
          defaultValue={current ? current.age : ""}
          {...register("age", { required: "Please provide the age!" })}
        />
        {errors.age && errors.age.message}
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          className={`${style.submit} ${style["submit-enable"]}`}
          disabled={loading}
        >
          {label}
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  current: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    photo: PropTypes.string,
  }),
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
