import React from 'react'
import { useState } from 'react';
import { Heart } from 'lucide-react'

function App() {

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prev) => !prev)
  }

  return (
    <div className="h-screen flex items-center justify-center ">
        <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors duration-300
        ${like ? "bg-red-500 text-white border-red-500" : "bg-white text-gray-700 border-gray-400 hover:text-red-500 hover:border-red-500"}`}
    >
      <Heart
        size={20}
        className={`transition-colors duration-300 ${
          like ? "text-white" : "text-red-500"
        }`}
        fill={like ? "white" : "none"}
      />
      Like
    </button>
    </div>
  )
}

export default App
