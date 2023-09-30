// SeatSelection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SeatSelection() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // Fetch available seats from the backend
    axios.get('/api/seats')
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => {
        console.error('Error fetching seats:', error);
      });
  }, []);

  const handleSeatClick = (seatId) => {
    // Toggle seat selection
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleSeatReservation = () => {
    // Send selected seat IDs to the backend for reservation
    axios.post('/api/reserve-seats', { seats: selectedSeats })
      .then((response) => {
        console.log('Seats reserved successfully:', response.data);
        // Optionally, update the UI to reflect the reserved seats
      })
      .catch((error) => {
        console.error('Error reserving seats:', error);
      });
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div className="seat-grid">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <button onClick={handleSeatReservation}>Reserve Selected Seats</button>
    </div>
  );
}

export default SeatSelection;
