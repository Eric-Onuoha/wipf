import "./sectionIntro.styles.scss";
import SponsorsBackground from "../../assets/images/sponsorsBackground.png";

const SectionIntro = (prop) => {
    return(
    <div id="sectionIntro">
        {/* Use margin 230px for any subsequent text below this */}
        <img src={SponsorsBackground} alt={prop.alt} />
        <h1>{prop.header}</h1>
    </div>
    )
}

export default SectionIntro;