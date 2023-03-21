import "./newsPreviews.styles.scss";

import Divider from "../../../assets/images/divider.webp";
import { useState } from "react";
import OvalButton from "../../ovalButton/ovalButton.component";
import parse from "html-react-parser";

const NewsPreviews = ({newsContent}) => {
    const newsMin = 0;
    const newsMax = newsContent.length;
    let [x , setX] = useState(0);
    let [y, setY] = useState(1);

    const nextNews = (e) => {
        if (y < newsMax){
            setX(x+=1);
            setY(y+=1);
        } else {
            setX(newsMin);
            setY(newsMin + 1);
        }
    }

    const prevNews = () => {
        if(x === newsMin){
            setX(newsMax - 1);
            setY(newsMax);
        } else {
            setX(x-=1);
            setY(y-=1);
        }
    }

    return (
        <div id="newsPreviewsComponent" >
            {newsContent.slice(0,5).slice(x,y).map((news)=>(
                
                    <div id="newsImageCover">
                        {(news.videoLink ? (
                        <iframe src={news.videoLink} 
                            width = "100%"
                            height="100%"
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'>
                        </iframe>
                        ):(
                            <img id="newsImage" src={news.image} alt="" />
                        ))}
                    </div>
            ))}


            {newsContent.slice(x,y).map((news)=>(
                <div id="newsContent">
                <div id="newsTitle">
                    <h2 className="h2">{news.title}</h2>
                </div>
                <div id="newsPreview">
                    <div id="newsPreviewCover">
                    <p className="p1">{parse(news.summary)}</p> 
                        <div id="newsMetadata">
                            <img src={Divider} alt="" />
                            <a href={news.link} target="_blank" rel="noreferrer"><h4 className="h4">{news.source}</h4></a>
                            <h5 className="h5">{news.day} {news.month}, {news.year}</h5>
                        </div>
                    </div>                       
                    <div id="newsToggle" >
                        <span onClick={prevNews} id="prevNews"><OvalButton /></span>
                        <span onClick={nextNews} id="nextNews"><OvalButton /></span>                                              
                    </div>
                </div>
            </div>
            ))}

            
        </div>
    )
}

export default NewsPreviews;