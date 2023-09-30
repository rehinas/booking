import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    image: '',
    category: [],
    languages: '',
    description: '',
    ticketRates: '',
    seat: '',
    screen: [],
    cast:''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'category' || name === 'screen') {
        // Handle category and screen checkboxes
        let updatedArray = [...formData[name]];

        if (checked) {
          updatedArray.push(value);
        } else {
          updatedArray = updatedArray.filter((item) => item !== value);
        }

        setFormData({
          ...formData,
          [name]: updatedArray,
        });
      }
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
      const response = await axios.post('http://localhost:4000/api/addmovie', formData);

      if (response.status === 200) {
        alert('Movie data submitted successfully!');
        // Clear the form
        setFormData({
          movieName: '',
          image: '',
          category: [],
          languages: '',
          description: '',
          ticketRates: '',
          seat: '',
          screen: [],
          cast:""
        });
      }
    } catch (error) {
      console.error('Movie form submission error:', error);
      alert('Movie data submission failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Add New Movie</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <div>
            <label className="mr-3">
              <input
                type="checkbox"
                name="category"
                value="UG"
                onChange={handleChange}
              />{' '}
              UG
            </label>
            <label className="mr-3">
              <input
                type="checkbox"
                name="category"
                value="PG"
                onChange={handleChange}
              />{' '}
              PG
            </label>
            <label className="mr-3">
              <input
                type="checkbox"
                name="category"
                value="A"
                onChange={handleChange}
              />{' '}
              A
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Languages</label>
          <select
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Language</option>
            <option value="Malayalam">Malayalam</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Ticket Rates</label>
          <input
            type="number"
            name="ticketRates"
            value={formData.ticketRates}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Seat</label>
          <input
            type="number"
            name="seat"
            value={formData.seat}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Cast</label>
          <input
            type="text"
            name="cast"
            value={formData.cast}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Screen</label>
          <div>
            <label className="mr-3">
              <input
                type="checkbox"
                name="screen"
                value="Screen 1"
                onChange={handleChange}
              />{' '}
              Screen 1
            </label>
            <label className="mr-3">
              <input
                type="checkbox"
                name="screen"
                value="Screen 2"
                onChange={handleChange}
              />{' '}
              Screen 2
            </label>
            <label className="mr-3">
              <input
                type="checkbox"
                name="screen"
                value="Screen 3"
                onChange={handleChange}
              />{' '}
              Screen 3
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;





