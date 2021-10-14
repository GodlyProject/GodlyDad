import React, {useEffect} from "react";

//connecting to init state & actions if needed.
import {connect} from 'react-redux'
import {getQuote} from "../actions";


const Quotes = ({quote, ...props}) => {
    const getQuote = props.getQuote;

    useEffect(() => {
        getQuote()
    }, [getQuote])

    return (
        <div>
            <h1>Random Bible Quote Here</h1>
            {/*<p>{quote.text}</p>*/}
            {/*<p>Verse:{quote.contents.verse}</p>*/}
            {/*<p>book:{quote.contents.book}</p>*/}
            {/*<p>Chapter:{quote.contents.chapter}</p>*/}
            {/*<p>Testament:{quote.contents.testament}</p>*/}

            <button onClick={()=> props.getQuote()}>New Quote getter</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {getQuote})(Quotes)