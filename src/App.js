import React from "react";
import Gallery from "./Gallery";

const images = [
  {
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80",
    alt: "Nebula",
    category: "galaxy",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Nebula image",
    id:"0"
  },
  {
    src: "https://images.unsplash.com/photo-1624623306028-9c536fd89960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNlbGVzdGlhbCUyMGJvZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "close view of half moon",
    category: "moon",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Half moon",
    id:"1"
  },
  {
    src: "https://images.unsplash.com/photo-1625532484418-7b6e1bb5c96f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNlbGVzdGlhbCUyMGJvZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Full moon in blue sky",
    category: "moon",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Full moon",
    id:"2"
  },
  {
    src: "https://images.unsplash.com/photo-1444253324313-0dce942d572c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNlbGVzdGlhbCUyMGJvZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Aurora photo",
    category: "sky",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Aurora",
    id:"3"
  },
  {
    src: "https://images.unsplash.com/photo-1445233566136-a2a4e2c38bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2VsZXN0aWFsJTIwYm9keXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Stars",
    category: "stars",
    id:"4"
  },
  {
    src: "https://images.unsplash.com/photo-1507908708918-778587c9e563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Consectetur adipiscing elit",
    category: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Blue sky",
    id:"5"
  },
  {
    src: "https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNlbGVzdGlhbCUyMGJvZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    category: "water",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Ocean Water",
    id:"6"
  },

  {
    src: "https://images.unsplash.com/photo-1445233566136-a2a4e2c38bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2VsZXN0aWFsJTIwYm9keXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "stars",
    category: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Starss",
    id:"7"
  },
  {
    src: "https://images.unsplash.com/photo-1592035659284-3b39971c1107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name:"",
    alt: "Galaxy",
    category: "galaxy",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Milky way galaxy",
    id:"8"
  },
  {
    src: "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "moon",
    category: "moon",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"MoonLight",
    id:"9"
  },

  {
    src: "https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "moon",
    category: "moon",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Moon",
    id:"10"
  },
  {
    src: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "stars",
    category: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Starts",
    id:"11"
  },
  {
    src: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "stars",
    category: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Planet",
    id:"12"
  },
  {
    src: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "stars",
    category: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Planet",
    id:"13"
  },
  {
    src: "https://images.unsplash.com/photo-1507908708918-778587c9e563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Consectetur adipiscing elit",
    category: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Blue sky",
    id:"14"
  },
  {
    src: "https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNlbGVzdGlhbCUyMGJvZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    category: "water",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Ocean Water",
    id:"15"
  },

  {
    src: "https://images.unsplash.com/photo-1445233566136-a2a4e2c38bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2VsZXN0aWFsJTIwYm9keXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "stars",
    category: "stars",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Starss",
    id:"16"
  },
  {
    src: "https://images.unsplash.com/photo-1592035659284-3b39971c1107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name:"",
    alt: "Galaxy",
    category: "galaxy",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Milky way galaxy",
    id:"17"
  },
  {
    src: "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "moon",
    category: "moon",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"MoonLight",
    id:"18"
  },

  {
    src: "https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "moon",
    category: "moon",
    description:"This image is taken from the unsplash and all images shows the cosmic body and galaxy",
    name:"Moon",
    id:"19"
  },

];

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-blue-900 flex items-center m-2 h-10 justify-center text-3xl text-white">Celestial Gallery</div>
      <Gallery images={images} />
    </div>
  );
}

export default App;
