import React, { useState } from "react";
import "./home.scss";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Table from "../../components/table/Table";
import Form from "../../components/form/Form";
export default function Home() {
  const [tableVisible, setTableVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);  
  const [formGiveAway, setFormGiveAway] = useState(false);  

  const handleTable = () => {
    setTableVisible(!tableVisible);
    
  };
  const handleForm = () => {
    setFormVisible(!formVisible);
    
  };
  const  handleFormGiveAway   = () => {
    setFormGiveAway(!formGiveAway);
    
  };
  return (
    <>
<Navbar />
     
      {tableVisible &&(
        <Table   handleTable={handleTable}/>
      )
      }
      {formVisible &&(
        <Form heading="Adopt a pet" title="What pet do you want to adopt ?" buttonInfo=" REQUEST FOR ADOPTION" handleForm={handleForm}/>
      )
      }
        {formGiveAway &&(
        <Form  heading="Give Away" title="What pet do you want to give away ?" buttonInfo="REQUEST FOR GIVE AWAY" handleFormGiveAway={handleFormGiveAway}/>
      )
      }
      <div className="homeContainer" style={{ backgroundColor: (tableVisible?" rgba(0, 0, 0, 0.5)":""),transition:"1s ease" }}>
     
        <div className="wrapper">
          <div className="left">
            <h3>Welcome to the Animal Shelter !</h3>
            <p>
              Glad that you care for the animals so much. We make sure that
              you'll not repent your decision of adopting your favorite pet !!
            </p>
          </div>
          <div className="right">
            <img src={image1} alt="dogsAndCats" className="dogsAndCats" />
          </div>
        </div>
        <div className="topButtons">
          <button className="adopt" onClick={handleForm}>Adopt</button>
          <button className="pets" onClick={handleTable}>
            What all pets do we have ?
          </button>
        </div>
        <div className="giveAwaySection">
          <h3>We do take in pets if you can't take care of them !</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            expedita, explicabo quis pariatur eaque in eius eos, blanditiis
            soluta cumque fuga repudiandae placeat accusantium sint voluptas ea.
            Optio, fuga tempore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime tempore, eos quidem earum quisquam vitae
            deserunt error repellendus saepe adipisci nobis? A, hic ab laborum
            excepturi ipsum quos corrupti nam!
          </p>
          <button className="giveAwayBtn" onClick={handleFormGiveAway}>Give Away</button>
        </div>
        <div className="bottomWrapper">
          <div className="bottomLeft">
            <img src={image2} className="bottomLeftImg" alt="dog and a women" />
          </div>
          <div className="bottomRight">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              soluta voluptatem dolores vel recusandae quaerat, laborum nostrum,
              molestias, quam cupiditate minus at placeat! Minus magnam soluta,
              odio voluptatum quaerat asperiores?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
