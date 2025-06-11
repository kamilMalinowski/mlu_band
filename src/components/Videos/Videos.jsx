import "./Videos.scss";
import IconNr1 from "../../assets/icons/1.svg?react";
import IconNr2 from "../../assets/icons/2.svg?react";
import IconNr3 from "../../assets/icons/3.svg?react";
import IconNr4 from "../../assets/icons/4.svg?react";
import IconNr5 from "../../assets/icons/5.svg?react";
import IconNr6 from "../../assets/icons/6.svg?react";

const VideosArr = [
  {
    title: "Liquid",
    description: "Simply insert a single line of code to execute any function seamlessly in the cloud. This allows you to benefit from immediate autoscaling",
    icon: <IconNr1 />,
  },
  {
    title: "Dark Ages",
    description: "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr2 />,
  },
  {
    title: "Black Fortune",
    description: "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr3 />,
  },
  {
    title: "Field of Glory",
    description: "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr4 />,
  },
  {
    title: "New World",
    description: "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr5 />,
  },
  {
    title: "Evil Touch",
    description: "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr6 />,
  },
];

function Videos() {
  return (
    <section className="videos">
      <h2 className="videos__title">
        The
        <span className="videos__special"> Liquid </span>
        singles
      </h2>
      <p className="videos__description">
        Add one line of code to run any function in the cloud. Get instant
        autoscaling for ML inference, data jobs, and more.
      </p>
      <button className="videos__btn">
        MLU offical
        <svg
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.082 16.5494C31.852 15.7431 31.174 15.1075 30.314 14.8919C28.754 14.5 22.5 14.5 22.5 14.5C22.5 14.5 16.246 14.5 14.686 14.8919C13.826 15.1075 13.148 15.7431 12.918 16.5494C12.5 18.0119 12.5 22 12.5 22C12.5 22 12.5 25.9881 12.918 27.4506C13.148 28.2569 13.826 28.8925 14.686 29.1081C16.246 29.5 22.5 29.5 22.5 29.5C22.5 29.5 28.754 29.5 30.314 29.1081C31.175 28.8925 31.852 28.2569 32.082 27.4506C32.5 25.9881 32.5 22 32.5 22C32.5 22 32.5 18.0119 32.082 16.5494ZM20.5 25.2475V18.7525L26.5 22L20.5 25.2475Z"
            fill="#191919"
          />
        </svg>
      </button>
      <section className="videos__list">
        {VideosArr.map((video) => (
          <article key={video.title} className="video">
            <div className="video__preview">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SzYiiN7GNJc?si=8lKPkNGqXKG2uW2n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="video__content">
              <div className="video__icon-wrapper">{video.icon}</div>
              <section className="video__section">
                <h2 className="video__title">{video.title}</h2>
                <p className="video__description">
                  <span className="video__element video__element--first">
                    “
                  </span>
                  {video.description}
                  <span className="video__element video__element--last">”</span>
                </p>
              </section>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Videos;
