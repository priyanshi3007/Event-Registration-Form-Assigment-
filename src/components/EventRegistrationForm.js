import React, { useState } from 'react';
import useForm from '../hooks/useForm'; // Corrected path
import validate from '../hooks/validate'; // Corrected path

const EventRegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit, validate);
  const [isGuestVisible, setIsGuestVisible] = useState(false);

  function submit() {
    alert(`Form Submitted!\nName: ${values.name}\nEmail: ${values.email}\nAge: ${values.age}\nAttending with guest: ${values.attendingWithGuest}\nGuest Name: ${values.guestName}`);
  }

  const handleAttendingChange = (e) => {
    handleChange(e);
    setIsGuestVisible(e.target.value === 'Yes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name || ''}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={values.age || ''}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <select name="attendingWithGuest" value={values.attendingWithGuest || ''} onChange={handleAttendingChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.attendingWithGuest && <p>{errors.attendingWithGuest}</p>}
      </div>
      {isGuestVisible && (
        <div>
          <label>Guest Name:</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName || ''}
            onChange={handleChange}
          />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventRegistrationForm;
