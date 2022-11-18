import React from "react";

const Card = () => {
  const image_style={
    width: "18rem"
  }

  return( 
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col mb-3">
            <div className="card h-100 card text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <button type="button" class="btn btn-primary">Find Out More!</button>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100 card text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <button type="button" class="btn btn-primary">Find Out More!</button>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100 card text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <button type="button" class="btn btn-primary text-center">Find Out More!</button>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100 card text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDI4rgxbjoRk5v_RufxNCOWZj5PbWC2f4BGY9XC_x6&s" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary">Find Out More!</button>
              </div>
            </div>
          </div>
        </div>
  
)}
export default Card