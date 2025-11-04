



'use client';
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSlide } from '../../../../(mainlayout)/Redux/counter/testimonialSlice';
import { useGetTestimonialsQuery } from '../../../../api/upload/dataApi';
import * as Icons from 'react-icons/gi';

export default function TestiAbout() {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.testimonial?.currentSlide ?? 0);
  const containerRef = useRef(null);
  const dragStartX = useRef(0);
  const dragEndX = useRef(0);
  const isDragging = useRef(false);

  const { data, isLoading, isError } = useGetTestimonialsQuery();
  const comments = data?.comments || [];

  const handleDragStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    dragEndX.current = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - dragEndX.current;

    const maxSlide = Math.ceil(comments.length / 2) - 1;
    if (diff > 50 && currentSlide < maxSlide) {
      dispatch(setSlide(currentSlide + 1));
    } else if (diff < -50 && currentSlide > 0) {
      dispatch(setSlide(currentSlide - 1));
    }

    isDragging.current = false;
  };

  if (isLoading) return <p className="text-white p-6">Loading testimonials...</p>;
  if (isError) return <p className="text-red-500 p-6">Failed to load testimonials.</p>;

  return (
    <section
      className="container mx-auto py-10 px-4 sm:px-6 md:px-10 overflow-hidden select-none"
      ref={containerRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(comments.length / 2) }).map((_, index) => (
          <div key={index} className="flex flex-wrap justify-center gap-8 w-full shrink-0">
            {comments.slice(index * 2, index * 2 + 2).map((comment) => (
              <TestimonialCard key={comment.id} comment={comment} />
            ))}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex mt-6 gap-2 justify-center">
        {Array.from({ length: Math.ceil(comments.length / 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => dispatch(setSlide(index))}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-green-500 scale-110' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ comment }) {
  const IconComponent = Icons[comment.image] || Icons.GiDoubled;

  return (
    <div className="bg-[#161616] w-full max-w-sm rounded-xl shadow-md p-6 tracking-wide">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <img
            src={comment.pic}
            alt={comment.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-white font-bold opacity-80">{comment.name}</p>
            <p className="text-xs font-medium text-gray-400">{comment.profession}</p>
          </div>
        </div>
        <div className="text-green-500 text-3xl">
          <IconComponent />
        </div>
      </div>
      <p className="text-sm text-gray-400">{comment.text}</p>
    </div>
  );
}
