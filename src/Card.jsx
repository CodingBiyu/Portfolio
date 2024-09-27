import pfp from "./assets/pfpremove.png";

function Card() {
  return (
    <div className="card">
      <img src={pfp} />
      <h1 className="name">ABIHA SAMI</h1>
      <p>A Frontend Developer who has crafted countless user experiences.</p>

      <div className="links">
        <a href="https://github.com/CodingBiyu">
          <i className="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/abiha-sami-ab24b5247/">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="https://discordapp.com/biyuxoxo/894753341400309830">
          <i className="ri-discord-fill"></i>
        </a>
        <a href="mailto:abiha.sami975@gmail.com">
          <i className="ri-mail-line"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
