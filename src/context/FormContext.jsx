// FormContext.js
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  
  const updateFormData = (data) => {
    setFormData(data);
  };
  
  const submitForm = () => {
    // Perform form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, submitForm }}>
      {children}
    </FormContext.Provider>
  );
};
