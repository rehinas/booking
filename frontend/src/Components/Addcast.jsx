import React, { useState } from 'react';
import axios from 'axios';
import Adminnav from './Adminnav';

const Addcast = () => {
  const [formData, setFormData] = useState({
    castName: '',
    castPhoto: null,
    castDescription: '',
    movieName: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:4000/api/add-cast', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Cast data submitted successfully!');
      
        setFormData({
          castName: '',
          castPhoto: null,
          castDescription: '',
          movieName: '',
        });
      }
    } catch (error) {
      console.error('Cast form submission error:', error);
      alert('Cast data submission failed. Please try again.');
    }
  };

  return (
    <div>
      <Adminnav />
      <div className="container mt-5">
        <h2 className="text-center">Add Cast</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Cast Name</label>
            <input
              type="text"
              name="castName"
              value={formData.castName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Cast Photo</label>
            <input
              type="file"
              name="castPhoto"
              onChange={handleChange}
              className="form-control-file"
              required
            />
          </div>
          <div className="form-group">
            <label>Cast Description</label>
            <textarea
              name="castDescription"
              value={formData.castDescription}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Movie Name</label>
            <input
              type="text"
              name="movieName"
              value={formData.movieName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-dark" style={{ marginLeft: '45%', padding: '10px',marginTop:"3%" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcast;
