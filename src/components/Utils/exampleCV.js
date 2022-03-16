import { v4 as uuidv4 } from 'uuid'
import examplePhoto from '../../assets/example_photo.jpg'

const exampleCV = {
  personalInfo: {
    firstName: 'Diego',
    lastName: 'Alvarez Leon',
    title: 'Pre-silicon validation',
    photo: examplePhoto,
    address: 'Guadalajara, Jalisco, Mexico',
    phoneNumber: '123456789',
    email: 'diegoiee@gmail.com',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Pre-silicon validation',
      company: 'Intel',
      city: 'Guadalajara',
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
      universityName: 'Cinestav',
      city: 'Guadalajara',
      degree: 'Master',
      subject: 'Telecomunications',
      from: '2009',
      to: '2012',
    },
    {
      id: uuidv4(),
      universityName: 'Itson',
      city: 'Obregon',
      degree: 'Engineering',
      subject: 'Electronic',
      from: '2004',
      to: '2009',
    },

  ],
}

export default exampleCV
