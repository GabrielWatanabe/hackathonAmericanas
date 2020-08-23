import React from "react";
import background from "../../assets/img/minha-conta-americanas.png";
import "./styles.css";

function Profile() {
  return (
    <div>
      <img src={background} className="containerBg" />
      <div className="whiteBox">
        <div className="profileInfoContainer">
          <div className="profilePicContainer">
            <img src="" alt="" className="profilePic" />
          </div>
          <div className="infoContainer">
            <section>
              <h1>Matheus Gomes de Paula</h1>
            </section>
            <h5>Via Facebook:</h5>
            <section>
              <h3>Você possui 2 amigos fazendo aniversário hoje!</h3>
            </section>
            <section className="birthdayName">
              Gabriel Watanabe e Daniel Salis
            </section>
            <section>
              <p>
                Gostaria de presenteá-los? <br></br>Deixa que a americanas manda
                um presente do gosto deles!
              </p>
            </section>
            <div className="buttonContainer">
              <button>Enviar presente!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
