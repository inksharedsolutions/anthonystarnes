import React from 'react';
import Layout from "../components/layout"
import Footer from "../components/footer"
import AuthorImg from '../../static/author/dummy.png'


const ATA = (props) =>{

    return (
        <>
            <main className="body-wrapper" id="non-front-pages">
                <Layout>
                    <section className="author-section">

                        <h1 className="heading-intro-section">
                            About the Author
                        </h1>
                         
                        <div className="two-grid-layout" id="grid-author-content">
                            <div className="chld-grid">
                                <div className="author-content-img">
                                    <img 
                                        src={AuthorImg} 
                                        alt="author-img"/>
                                </div>
                            </div>
                            <div className="chld-grid">
                                <section className="author-contents-section">
                                    <p>
                                        The Prophet Anthony Starnes is a wheelchair Disabled new testament Prophet
                                        who was told by god to write this prophetic Book as the divinity of Jesus Christ
                                        needs to be emphasized issue has not yet been Corrected and covered by anyone and the 
                                        god of justice want to see to it deserve. The prophet is now 72 years old, he mainly worked 
                                        as a volunteer drug coucnilor After he earned his counseling credential from another graduate school 
                                        in California after he graduated from fuller theological semincary in 1985
                                    </p>

                                    <div className="author-marks">
                                        <h5>Prophet Anthony</h5>
                                        <h1>Starnes</h1>
                                        <span>Author & Writer</span>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </section>
                </Layout>
                <Footer/>
            </main>
        </>
    )
}   


export default ATA;