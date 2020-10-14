import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username must be six characters long"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  termsOfService: yup
    .boolean()
    .oneOf([true], "You must accept the Terms of Service"),
});
