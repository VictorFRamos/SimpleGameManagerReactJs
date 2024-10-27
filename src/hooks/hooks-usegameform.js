import { useState } from 'react';

const useGameForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const resetForm = () => {
    setFormData(initialState);
  };

  const updateFormField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return { formData, updateFormField, resetForm };
};

export default useGameForm;
