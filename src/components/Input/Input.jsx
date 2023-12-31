import styles from "./input.module.css";
import React from "react";
import { Field, useField } from "formik";
import { IoMdAlert } from "react-icons/io";

export const Input = ({ name, disabled, touched = null, errors = null }) => {
  return (
    <div className={styles.inputContainer}>
      <Field
        name={name}
        placeholder={name}
        disabled={disabled}
        className={styles.input}
        style={{
          outline: touched && errors ? "2px solid red" : "",
        }}
        required
      />
      <IoMdAlert
        className={styles.alerticon}
        display={touched && errors ? "block" : "none"}
      />
      {touched && errors ? <div className={styles.error}>{errors}</div> : null}
    </div>
  );
};
export const TextArea = ({ name, touched, errors }) => {
  const [field, meta] = useField(name);
  return (
    <div className={styles.inputContainer}>
      <textarea
        name={name}
        {...field}
        placeholder={name}
        className={styles.textarea}
        style={{
          outline: touched && errors ? "2px solid red" : "none",
        }}
        id=""
        cols="30"
        rows="10"
        required
      ></textarea>
      <IoMdAlert
        className={styles.alerticon}
        display={touched && errors ? "block" : "none"}
      />
      {touched && errors ? <div className={styles.error}>{errors}</div> : null}
    </div>
  );
};

// export { Input, TextArea };
// export default Input;
