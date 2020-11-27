import React, {useState, useEffect} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCover from './slider'
import BookContentsTitle from './book-title';

const Content = (props) =>{

    const [slideState, _sF] = useState(3);

    useEffect(()=>{
        props.activeSlide(slideState);
    },[slideState])

    const CurrentContent = () =>{
    
        if( slideState === 1){
           return ( <BookContentsTitle 
                title={`COVID 19 truth revealed`}
                spnTitle={`Prophet Anthony Starnes`}
                content={`The prohpet Anthony Starnes is a wheelchair disabled
                new testament prophet who was told by God to write this prophetic
                book as the divinity of Jesus Christ need to be emphasized issue
                has not yet been corrected and covered by anyone and the God of justice
                wants to see to it that those he loves receive the justice from naughty
                and sinful man that they deserve.`}
                srcLink={`/books#book1`}
            />
           )
        }else if (slideState === 2){
            return ( <BookContentsTitle 
                title={`Reparations for Slavery`}
                spnTitle={`Prophet Anthony Starnes`}
                content={`In conclusion: my prophetic gook has proven Reparation of Slavery
                should be paind by the Muslim nations. This has been the word of the Lord,
                thanks be to God! So let it be wrtten, so let it be done.`}
                srcLink={`/books#book2`}
            />
          ) 
        }else if (slideState === 3){
            return ( <BookContentsTitle 
                title={`Jesus, the real star child`}
                spnTitle={`Prophet Anthony Starnes`}
                content={`Jesus the Real Star Child is that light that lights
                everyman that comes into the World. By him were all things made
                and by his cross are all things reconciled to God. This is why the
                three wise men came to worship him.`}
                srcLink={`/books#book3`}
            />
           )
        }

        else if (slideState === 4){
            return ( <BookContentsTitle
                title={`Another Jesus Movement`}
                spnTitle={`Prophet Anthony Starnes`}
                content={`The Ice Moon, Part 4 of The Duaredheim Staff
                 Saga portrays their subsequent encounter with their nemesis,
                 and the adventures that bring them to their final confrontation
                 with Queen Aphra and the armies of Dragonia`}
                srcLink={`/books#book3`}
             />
           )
        }

        else if(slideState === 5){
            return (
                <BookContentsTitle
                title={`What to Expect`}
                spnTitle={`Prophet Anthony Starnes`}
                content={`My Original unedited suppressed prophetic manuscript entitle: What to
                expect concrens you as it constitutes always gives a warning before He sends judgment.
                My written prophecy is NOT politically correct and will certainly disappoint and offend
                many, as true prophecy always does. Nor is it just a spiritual esoteric eschatology 
                but includes the hidden issue of the day that God wants to know, since they have caused
                American to sin more.`}
                srcLink={`/books#book3`}
             />
            )
        }
    }

    return(
        <>
            <section className="body-book-contents-wrapper">
                <div className="heading-contents">
                    {
                       (
                           <CurrentContent/>
                       )
                    }
                </div>

                 <div className="content-slider-wrapper">
                    <SliderCover currentSlide={(e)=> _sF(e)}/>
                 </div>

            </section>
        </>
    )
}

export default Content