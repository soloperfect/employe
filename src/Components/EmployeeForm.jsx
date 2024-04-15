import React from 'react';

const EmployeeForm = () => {
  return (
    <div>
      <h2>Employee Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="designation">Designation:</label>
        <input type="text" id="designation" name="designation" />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />

        <label htmlFor="salary">Salary:</label>
        <input type="text" id="salary" name="salary" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
