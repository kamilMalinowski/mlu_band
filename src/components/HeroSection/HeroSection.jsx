import "./HeroSection.scss"

function HeroSection() {
  return (
  <section className="hero">
    <h1 className="hero__heading">
        <span className="hero__heading hero__heading--special">MLU </span>
         progressive band from
        <span className="hero__heading hero__heading--special"> Poland</span>
         </h1>
        <p className="hero__description">Add one line of code to run any function in the cloud. Get instant autoscaling for ML inference, data jobs, and more.</p>
        <div className="hero__links">
            <a className="hero__link hero__link--primary" href="">Play music</a>
            <a className="hero__link hero__link--secondary" href="">Read More</a>
        </div>
        <div className="hero__visuals"></div>
  </section>
  );
}

export default HeroSection;