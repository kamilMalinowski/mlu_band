import Button from "../ui/Button/Button";
import bio_1 from "../../assets/images/me.png";
import bio_2 from "../../assets/images/me-2.png";
import "./BioSection.scss";

function BioSection() {
  return (
    <section className="bio">
      <div className="bio__image-wrapper">
        <img className="bio__image bio__image--first" src={bio_1} alt="" />
        <img className="bio__image bio__image--second" src={bio_2} alt="" />
        <img className="bio__image bio__image--third" src={bio_1} alt="" />
      </div>
      <section className="bio__section">
        <h2 className="bio__title">
          <span aria-hidden="true">
            <span className="bio__title-letter bio__title-letter--1">K</span>
            <span className="bio__title-letter bio__title-letter--2">a</span>
            <span className="bio__title-letter bio__title-letter--3">m</span>
            <span className="bio__title-letter bio__title-letter--4">i</span>
            <span className="bio__title-letter bio__title-letter--5">l</span>
            <span className="bio__title-letter bio__title-letter--6"> </span>
            <span className="bio__title-letter bio__title-letter--7">M</span>
            <span className="bio__title-letter bio__title-letter--8">a</span>
            <span className="bio__title-letter bio__title-letter--9">l</span>
            <span className="bio__title-letter bio__title-letter--10">i</span>
            <span className="bio__title-letter bio__title-letter--11">n</span>
            <span className="bio__title-letter bio__title-letter--12">o</span>
            <span className="bio__title-letter bio__title-letter--13">w</span>
            <span className="bio__title-letter bio__title-letter--14">s</span>
            <span className="bio__title-letter bio__title-letter--15">k</span>
            <span className="bio__title-letter bio__title-letter--16">i</span>
          </span>
          <span className="bio__title-sr-only">Kamil Malinowski</span>
        </h2>

        <p className="bio__subtitle">Założyciel, perkusista</p>
        <p className="bio__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quam,
          itaque ipsam est eveniet aperiam eos optio suscipit! Hic eveniet quasi
          illum optio velit facere commodi tenetur esse animi modi.
        </p>
        <div className="bio__buttons">
          <Button text="Read more" variant="secondary" />
        </div>
      </section>
    </section>
  );
}

export default BioSection;
