import { v4 as uuidv4 } from 'uuid'
import examplePhoto from '../../assets/example_photo.jpg'

const exampleCV = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Frontend Developer',
    photo: examplePhoto,
    address: '123 Main St',
    phoneNumber: '123456789',
    email: 'cyg@gmail.com',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Frontend Developer',
      company: 'Google',
      city: 'Munich',
      from: '2013',
      to: 'Present',
    },
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Tesla Inc.',
      city: 'Palo Alto',
      from: '2012',
      to: '2015',
    },
    {
      id: uuidv4(),
      position: 'UI / UX Designer',
      company: 'Google LLC',
      city: 'Mountain View',
      from: '2010',
      to: '2012',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company name',
      city: 'City name',
      from: 'From',
      to: 'To',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University name',
      city: 'City name',
      degree: 'Master',
      subject: 'Subject',
      from: '2009',
      to: '2012',
    },
    {
      id: uuidv4(),
      universityName: 'Itson',
      city: 'Munich',
      degree: 'Bachelor',
      subject: 'Telecomunications',
      from: '2004',
      to: '2009',
    },

  ],
}

export default exampleCV
