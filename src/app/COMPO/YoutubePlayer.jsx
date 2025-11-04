


'use client'
import React from 'react'

export default function YouTubePlayer({ videoId, url, width = '100%', height = '400px' }) {
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : url?.replace('watch?v=', 'embed/')

  if (!embedUrl) return <p>No video provided</p>

  return (
    <div className="w-full max-w-4xl mx-auto">
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      />
    </div>
  )
}
