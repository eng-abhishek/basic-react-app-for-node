import * as Yup from 'yup';

export const LoginFormSchema = Yup.object({

    email:Yup.string().email().required("Email Fiels is required"),
    password:Yup.string().required('Password Field is required'),
});

