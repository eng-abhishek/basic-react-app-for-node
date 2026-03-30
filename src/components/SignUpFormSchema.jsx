import * as Yup from 'yup';

export const SignUpFommSchema = Yup.object({
    username:Yup.string().required('Username is required'),
    email:Yup.string().required('Email is required'),
    password:Yup.string().required('Password is requird'),
    confirmPassword:Yup.string().required('Confirm password is required'),
    dob:Yup.string().required('DOB is required'),
    profile_image:Yup.string().required('profile image is required'),
    address:Yup.string().required('Address field is required'),
    is_indian_citizon:Yup.boolean().oneOf([true],'You must checked is Indian'),
    skills:Yup.array().of(Yup.string().oneOf(['Node','React','MongoDB'])).min(1,'Select at lest one skill'),
    gender:Yup.string().required('Please select gender'),
    state:Yup.string().required('Please select state'),
});