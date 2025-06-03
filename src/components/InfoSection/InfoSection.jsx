import "./InfoSection.scss";

function InfoSection() {
  return (
    <section className="info">
      <p className="info__text">
        Add one line of code to run any function in the cloud.
      </p>
      <div className="info__btn-wrapper">
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
              d="M3 8.83333H14.6667M14.6667 8.83333L8.83334 3M14.6667 8.83333L8.83334 14.6666"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default InfoSection;
