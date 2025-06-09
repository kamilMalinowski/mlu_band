import "./Videos.scss";
import IconNr1 from "../../assets/icons/1.svg?react";
import IconNr2 from "../../assets/icons/2.svg?react";



const VideosArr = [
  {
    title: "Intro",
    description: "Simply insert a single line of code to execute any function seamlessly in the cloud. This allows you to benefit from immediate autoscaling",
    icon: <IconNr1 />,
  },
  {
    title: "Dark Ages",
    description: "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr2 />,
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
            <div className="video__preview"></div>
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
