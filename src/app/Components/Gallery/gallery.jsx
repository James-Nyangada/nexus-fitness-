'use client'

import { useState } from 'react'
import Image from 'next/image'

import { galleryImg } from '../../../data/gallery-image'

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 10
  const totalPages = Math.ceil(galleryImg.length / imagesPerPage)

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = galleryImg.slice(indexOfFirstImage, indexOfLastImage)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Gym equipment"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Gallery</h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={image.img}
                alt={`Gym image ${image.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button
            variant="outline"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-white"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "bg-primary" : "text-white"}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            variant="outline"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

