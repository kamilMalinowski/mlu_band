import "./Videos.scss";
import IconYT from "../../assets/icons/yt.svg?react";
import Button from "../ui/Button/Button";

const VideosArr = [
  {
    title: "Liquid",
    src: "https://www.youtube.com/embed/tsDyOTnswgg?si=hoMCyfqNRKoZCmEN",
    description:
      "Simply insert a single line of code to execute any function seamlessly in the cloud. This allows you to benefit from immediate autoscaling",
    number: "1",
  },
  {
    title: "Dark Ages",
    src: "https://www.youtube.com/embed/lUdGRH8NQek?si=Z8yKHTHbz_89LDbP",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    number: "2",
  },
  {
    title: "Black Fortune",
    src: "https://www.youtube.com/embed/cFWXAD9kryI?si=8tc4tZ_87rd3MLZp",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    number: "3",
  },
  {
    title: "Field of Glory",
    src: "https://www.youtube.com/embed/6xb898sQtu8?si=zmR8XLGCaeip1XEb",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    number: "4",
  },
  {
    title: "New World",
    src: "https://www.youtube.com/embed/XiejXrjMObM?si=5cHgG_MoL9XlQeAy",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    number: "5",
  },
  {
    title: "Evil Touch",
    src: "https://www.youtube.com/embed/oHYaOdIyuQA?si=NHB5NprhvhZMpVmD",
    description:
      "With just a quick snippet of code, you can effortlessly run any task in the cloud. Experience the power of instant scalability at your fingertips!",
    number: "6",
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
                src={video.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video__content">
              <p className="video__number">{video.number}</p>
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
