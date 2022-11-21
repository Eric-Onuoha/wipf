import "./newsPreviews.styles.scss";

import NewsImage from "../../assets/images/press conference.jpg";
import Divider from "../../assets/images/divider.webp";

import OvalButton from "../ovalButton/ovalButton.component";

const NewsPreviews = () =>{
    return (
        <div id="newsPreviewsComponent">
            <div id="newsImageCover">
                <img id="newsImage" src={NewsImage} alt="" />
            </div>

            <div id="newsContent">
                <div id="newsTitle">
                    <h1>Sample News Article: WIPF LAUNCH ORGANIZATION WEBSITE</h1>
                </div>
                <div id="newsPreview">
                    <div id="newsPreviewCover">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio quisquam adipisci et expedita 
                        perspiciatis nam dolorem doloribus asperiores, corporis ad officia rem aspernatur architecto? 
                        Id quo vel consequatur enim debitis, ipsam nemo quibusdam quae pariatur laudantium. Sint minima 
                        culpa nesciunt beatae! Atque, quo suscipit neque est expedita animi cum.</h4> 
                        <div id="newsMetadata">
                            <img src={Divider} alt="" />
                            <h5>THISDAY NEWSPAPERS</h5>
                            <p>12th July 2022</p>
                        </div>
                    </div>                       
                    <div id="newsToggle">
                        <OvalButton id="prevNews"/>
                        <OvalButton id="nextNews"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewsPreviews;