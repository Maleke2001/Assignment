// Home.js
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import PersonalDetails from '../../components/personalDetails/PersonalDetails';
import Survey from '../../components/survey/Survey';
import { FormProvider } from '../../context/FormContext'; // Import FormProvider from FormContext

const Home = () => {
  return (
    <FormProvider> {/* Wrap components in FormProvider */}
      <div>
        <Navbar />
        <PersonalDetails />
        <Survey />
      </div>
    </FormProvider>
  );
}

export default Home;
