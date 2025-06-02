import "./InfoSection.scss"

function InfoSection() {
  return (
      <section className="info">
        <p className="info__text">
          Add one line of code to run any function in the cloud.
        </p>
        <button className="info__btn">
          Buy now
          <svg
            className="info__btn-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16667M15.8332 10L9.99984 15.8333"
              stroke="inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
  );
}

export default InfoSection;