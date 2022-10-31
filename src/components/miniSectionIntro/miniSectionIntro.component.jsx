import "../miniSectionIntro/miniSectionIntro.styles.scss";

const MiniSectionIntro = (props) => {
    return(
        <div id="miniSectionIntroComponent">
            <h4>{props.sectionTitle}</h4>
        </div>
    )
}

export default MiniSectionIntro;