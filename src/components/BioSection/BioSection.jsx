import Button from "../ui/Button/Button";
import bio from "../../assets/images/me.png";
import "./BioSection.scss"

function BioSection() {
  return (
  <section className="bio">
    <img className="bio__image" src={bio} alt="" />
    <section className="bio__section">
        <h2 className="bio__title">Kamil Malinowski</h2>
        <p className="bio__subtitle">Założyciel, perkusista</p>
        <p className="bio__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quam, itaque ipsam est eveniet aperiam eos optio suscipit! Hic eveniet quasi illum optio velit facere commodi tenetur esse animi modi.</p>
        <div className="bio__buttons">
        <Button text="Read more" variant="secondary"/>
        </div>
    </section>
  </section>
  );
}

export default BioSection;