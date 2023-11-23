import * as yup from "yup";

const strongPasswordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&.,]{8,}$/;

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(strongPasswordRegex, {
      message:
        "password must contain a number , special chararcters and be longer than eight characters",
    })
    .required("field is required"),
  mobile: yup.string().length(11),
});

export const loginMobile = yup.object({
  password: yup
    .string()
    .matches(strongPasswordRegex, {
      message:
        "password must contain a number , special chararcters and be longer than eight characters",
    })
    .required("field is required"),
  mobile: yup.string(),
});

export const signupSchema = yup.object({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  email: yup.string().email("invalid email type").required("Required"),
  password: yup
    .string()
    .matches(strongPasswordRegex, {
      message:
        "password must contain a number , special chararcters and be longer than eight characters",
    })
    .required("Required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export const recoverPasswordSchema = yup.object({
  email: yup.string().email("invalid email type").required("Required"),
});

export const resetPasswordSchema = yup.object({
  one_time_code: yup.string().length(6 , 'pin must be six characters').required("Required"),
  password: yup
    .string()
    .matches(strongPasswordRegex, {
      message:
        "password must contain a number , special chararcters and be longer than eight characters",
    })
    .required("Required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});
