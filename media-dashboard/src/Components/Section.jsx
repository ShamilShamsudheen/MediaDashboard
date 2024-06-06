import React, { useEffect } from 'react';
// import axios from 'axios';


export default function Section() {
  const getTracks = async () => {
    const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'da7e12be71msh5a71db933cbf138p1747c8jsnd105e99bd03b',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.tracks);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTracks()
  }, []);

  return (
    <section className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {
          <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-700">Content for card 1.</p>
          </div>
        }
      </div>
    </section>
  );
};

