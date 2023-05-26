import axios from "axios";
import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const handleChange = (e) => {
    const selectFile = e.target.files;
    console.log(selectFile);
    const selectedFileArray = Array.from(selectFile);
    console.log(selectedFileArray);

    const ImageUrl = selectedFileArray.map((file) => {
      return file.name;
    });
    console.log(ImageUrl);
    setSelectedImage(ImageUrl);
  };

  const update=(e)=>{
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    
    axios.post("/api/upload", formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className="mt-5  ml-2">
      <label
        htmlFor="Image"
        className="w-20 h-5 px-5 py-2 bg-slate-700 text-white text-lg rounded"
      >
        Bill Upload
      </label>
      <input
        type="file"
        id="Image"
        onChange={(e) => handleChange(e)}
        multiple
        className="hidden"
      />
      <div>
        {selectedImage &&
          selectedImage.map((value, index) => {
            return (
              <div key={index}>
                {/* <img src={value} height="100px" width="200px" /> */}
                <p>{value}</p>
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage.filter((img) => img != value)
                    )
                  }
                >
                  Remove
                </button>
                
              </div>
            );
          })}
      </div>
      <button onClick={update}>

      </button>
    </div>
  );
};

export default ImageUpload;
