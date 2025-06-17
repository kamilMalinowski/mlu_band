import "./Videos.scss";
import IconNr1 from "../../assets/icons/1.svg?react";
import IconNr2 from "../../assets/icons/2.svg?react";
import IconNr3 from "../../assets/icons/3.svg?react";
import IconNr4 from "../../assets/icons/4.svg?react";
import IconNr5 from "../../assets/icons/5.svg?react";
import IconNr6 from "../../assets/icons/6.svg?react";
import IconYT from "../../assets/icons/yt.svg?react";
import Button from "../ui/Button/Button";

const VideosArr = [
  {
    title: "Liquid",
    description:
      "Simply insert a single line of code to execute any function seamlessly in the cloud. This allows you to benefit from immediate autoscaling",
    icon: <IconNr1 />,
  },
  {
    title: "Dark Ages",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr2 />,
  },
  {
    title: "Black Fortune",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr3 />,
  },
  {
    title: "Field of Glory",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr4 />,
  },
  {
    title: "New World",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    icon: <IconNr5 />,
  },
  {
    title: "Evil Touch",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
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
      <div className="videos__buttons">
        <Button
          type="link"
          variant="primary icon icon-right"
          text="MLU offical"
          icon={<IconYT />}
        />
      </div>

      <section className="videos__list">
        {VideosArr.map((video) => (
          <article key={video.title} className="video">
            <div className="video__preview">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SzYiiN7GNJc?si=8lKPkNGqXKG2uW2n"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
