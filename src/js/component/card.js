import React from "react";

const Card = () => {
  const image_style={
    width: "18rem"
  }

  return( 
    <div className="col-9 d-flex mx-auto">
      <div className="card ms-1 me-1" style={image_style}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat egestas lectus, bibendum commodo nisl imperdiet a.</p>
            <a href="#" className="btn btn-primary mb-2 mt-5">Find Out More!</a>
          </div>
      </div>
      <div className="card ms-1 me-1" style={image_style}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat egestas lectus, bibendum commodo nisl imperdiet a. Etiam interdum, ex sit amet ultricies hendrerit, augue urna dictum turpis, ac consectetur sem justo et arcu. Praesent a auctor nibh.</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
      </div>
      <div className="card ms-1 me-1" style={image_style}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat egestas lectus, bibendum commodo nisl imperdiet a.</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
      </div>
      <div className="card ms-1 me-1" style={image_style}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat egestas lectus, bibendum commodo nisl imperdiet a. Etiam interdum, ex sit amet ultricies hendrerit, augue urna dictum turpis, ac consectetur sem justo et arcu. Praesent a auctor nibh</p>
            <a href="#" className="btn btn-primary ">Find Out More!</a>
          </div>
      </div>
    </div>
      
      
)}
export default Card