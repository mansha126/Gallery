import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const Image = ({ src, alt, name,description,category,id }) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  

  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="relative flex flex-col mb-7">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 opacity-0 hover:opacity-75 transition duration-500 ease-in-out">
        <div className="p-3 text-gray-100">{category}</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-xs mx-auto p-4 rounded-lg bg-gray-900 opacity-90">
            <h2 className="text-2xl text-white font-semibold mb-3">{name}</h2>
            <p className="text-gray-300 text-lg">{description}</p>
            <div className="absolute top-0 right-0 m-3 text-gray-100">
              <h4>Like Count: {count}</h4>
              {like ? (
                <AiFillLike
                  size={30}
                  className="text-blue-500 cursor-pointer"
                  onClick={handleLikes}
                />
              ) : (
                <AiOutlineLike
                  size={30}
                  className="cursor-pointer"
                  onClick={handleLikes}
                />
              )}
            </div>
          </div>
        </div>
          </div>
          </div>
  );
};

const Gallery = ({ images }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredImages = images.filter((image) => {
    return image.name.toLowerCase().includes(searchTerm.toLowerCase())|| image.category.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="text-center mb-5">
        <input
          type="text"
          placeholder="Search by image name"
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg w-full md:w-1/2 lg:w-1/3"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="columns-1 gap-8 md:columns-2 lg:columns-3 mb-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
                  name={image.name}
                  description={image.description}
                  category={image.category}
            />
          ))
        ) : (
          <p className="text-gray-700 text-3xl">No search results found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
