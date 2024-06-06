import React from 'react';

export default function Section() {
  return (
    <section className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p className="text-gray-700">Content for card 1.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-700">Content for card 2.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p className="text-gray-700">Content for card 3.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Card 4</h2>
          <p className="text-gray-700">Content for card 4.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Card 5</h2>
          <p className="text-gray-700">Content for card 5.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Card 6</h2>
          <p className="text-gray-700">Content for card 6.</p>
        </div>
      </div>
    </section>
  );
};

