import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email('Email is not valid.').required('Email is required.'),
  phone: Yup.string(),
  program: Yup.string().required('Program/Service is required.'),
  message: Yup.string().required('Message is required'),
});

export default validationSchema;
