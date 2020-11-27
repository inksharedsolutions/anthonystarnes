import React from 'react'
import Layout from "../components/layout"
import BookInfo from "../components/BookInfo/bookinfo"
import { DiscussionEmbed } from "disqus-react"
import Footer from "../components/footer"

/*Images*/
import Book1 from "../../static/books/3rd_book.png"
import Book2 from "../../static/books/2nd_book.png"
import Book3 from "../../static/books/1st_book.png"
import Book4 from "../../static/books/4th_book.png"
import Book5 from "../../static/books/5th_book.png"


const ATB = (props) =>{


    const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'prophet-anthony-starnes',
      config: { identifier:  12, slug},
    }
    

    return(
        <>
            <main className="body-wrapper" id="non-front-pages">
                <Layout>
                    <section className="author-section" id="book--containers">

                        <h1 className="heading-intro-section">
                            Featured Books
                        </h1>

                        <section className="body-contents">
                            <BookInfo  
                            data={{
                                    title:`COVID 19 Truth Revealed`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    order:false,
                                    content:
                                    `<p>
                                        The Prophet Anthony Starnes is a wheelchaid disabled new testament
                                        prophet who was told by God to write this prophetic book as the 
                                        divinity of Jesus Christ needs to be emphasized issue has not yet been
                                        corrected and covered by anyone and the God of Justice wants to see to 
                                        it that those he loves receive the justice from naughty and sinful man 
                                        that they deserve.
                                     </p>
                                     `,

                                    ebooks:{ 
                                    },
                                    paperback:{
                                        
                                    }
                                }}
                            />

                         <BookInfo  
                                data={{
                                title:`REPARATION FOR SLAVERY`,
                                spanTitle: '',
                                imgSrc: Book2,
                                order:true,
                                content:
                                `<p>
                                    In conclusion; my prophetic book has proven Reparations For Slavery
                                    should be paid by the Muslim nations. This has been the word of the
                                    Lord, thanks be to God! So let it be written, so let it be done.
                                </p>
                            
                                `,

                                ebooks:{
                                    
                                },
                                paperback:{
                                    
                                }
                            }}
                         />

                        <BookInfo  
                            data={{
                                title:`Jesus the real star child`,
                                    spanTitle: '',
                                    imgSrc: Book3,
                                    order:false,
                                    content:
                                    `<p>
                                        Jesus the real star child is that lights everyman
                                        that comes into the World. By him were all things made 
                                        and by his cross are all things reconciled to God. This is 
                                        why the three wise men came to worhsip him.
                                    </p>`,

                                    ebooks:{
                                        
                                    },
                                    paperback:{
                                        
                                    }
                                }}
                            />


                            <BookInfo  
                                data={{
                                title:`Another Jesus Movement`,   
                                spanTitle: '',
                                imgSrc: Book4,
                                order:true,
                                content:
                                `
                                    <p>
                                      Another Jesus Movement is a documented record
                                      of spiritual gifts including prophecies, words of 
                                      knowledge and words of wisdom that were given by God
                                      to the New Testament Prophet Anthony Starnes as evidence
                                      that God still speaks today abou the past, present, and future...
                                    </p>
                                `,

                                ebooks:{
                                    stratton: 'https://www.stratton-press.com/books/another-jesus-movement/',
                                    barnes: 'https://www.barnesandnoble.com/w/another-jesus-movement-prophet-anthony-starnes/1131711216?ean=9781643459837',
                                    amazon:'https://www.amazon.com/Another-Movement-Prophet-Anthony-Starnes-ebook/dp/B0872H4F8M/ref=sr_1_1?dchild=1&keywords=9781643459837&qid=1588018124&sr=8-1', 
                                },
                                paperback:{
                                    amazon:'https://www.amazon.com/Another-Movement-Prophet-Anthony-Starnes/dp/1643459821/ref=sr_1_1?dchild=1&keywords=9781643459820&qid=1588018143&sr=8-1',
                                    barnes:'https://www.barnesandnoble.com/w/another-jesus-movement-prophet-anthony-starnes/1131711216?ean=9781643459820',
                                    booksamillion:'https://www.booksamillion.com/p/Another-Jesus-Movement/Prophet-Anthony-Starnes/9781643459820?id=8049069540563&_ga=2.78106260.144254833.1606293192-2145380449.1604906972',
                                }
                            }}
                         />

                        <BookInfo  
                            data={{
                                title:`What to Expect`,
                                    spanTitle: '',
                                    imgSrc: Book5,
                                    order:false,
                                    content:
                                    `<p>
                                        My Original Unedited suppressed prophetic manuscript entitled: What
                                        to expect concersn you as it constitutes your warning from God about 
                                        your future. For God always gives a warning before He sends judgment. 
                                        My written prophecy is NOT politically correct and will certainly
                                        disappoint and offend many, as true prophecy always does. Nor is it just 
                                        a spiritual esoteric eschatology but it includes the hidden issue of the 
                                        day that God wants to know, since they have caused America to sin more. 
                                        From  the global warming deception that has increased unemployment, to the 
                                        economic fraud of recovery via bailouts, socialist deficits, the American
                                        Prosperity Message, the fluoridation of public drinking waters, GMO Foods,
                                        high fructose corn syrup, extra terrestrial grey aliens
                                        and illegal aliens resulting in earthquakes, pestilences and famines after Obama's
                                        demonic decptions causes another mean spirited Civil War. Because in 
                                        God's judgement deceptions then wars come first, then the destruction of America
                                        or any other place in the world by 'natural causes'.
                                    </p>`,

                                    ebooks:{
                                    },
                                    paperback:{
                                    }
                                }}
                            />

                        </section>

                        <div id="comment-section" >
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                        
                    </section>
                 </Layout>
                 <Footer/>
            </main>
        </> 
    )
}

export default ATB;