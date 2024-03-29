import React from "react"


const BookInfo = (props) =>{
    return(
        <div className="grid-two-columns book-info-ft">
            <div 
                className="child-grid img-component-wrapper" 
                style={props.data.order ? {order:2}:{}}
            >
                <div className="book-image-container">
                    <img src={props.data.imgSrc}/>
                </div>
            </div>
        
            <div className="child-grid body-content-elements">
                
                <section className="contentBook">

                    <h1>{props.data.title}</h1>
                    <span className="span-title-ft">{props.data.spanTitle}</span>

                    <div dangerouslySetInnerHTML={{__html:props.data.content}} />
                   

                </section>

                <section className="fullSection">

                    {!Object.entries(props.data.ebooks).length == 0 && (
                    
                        <nav className="booklinkBlocks">
                            <span>Ebooks :</span>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.amazon}>Amazon</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.stratton}>Stratton Press</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.barnes}>Barnes & Noble</a></li>
                        </nav>
                    )} 


                    {!Object.entries(props.data.paperback).length == 0 && (

                        <nav className="booklinkBlocks">
                            <span>Purchase Paperback :</span>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.amazon}>Amazon</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.barnes}>Barnes & Noble </a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.booksamillion}>Books A Million</a></li>
                        </nav>

                    )}      


                </section>
            </div>
        </div>
    )
}


export default BookInfo