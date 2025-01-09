'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { galleryImg } from '../../../data/galleryData';

const GalleryPage = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? galleryImg : galleryImg.slice(0, 12);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedImages.map((image) => (
          <div key={image.id} className="relative aspect-square">
            <Image
              src={image.img}
              alt={`Gallery image ${image.id}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {!showAll && galleryImg.length > 12 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

