function Awards() {
    return (
        <div className="container mt-5" >
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5" > 2+ million Zerodha client contribute to over 15% of all volumes in India daily by investing and trading: </p>
                    <div className="row">
                        <div className="col-6"><ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity Derivatives</p>
                            </li>
                            <li>
                                <p>Currency Derivatives</p>
                            </li>
                        </ul></div>
                        <div className="col-6"><ul>
                            <li>
                                <p>Stocks and IPOs</p>
                            </li>
                            <li>
                                <p>Direct Mutual Funds</p>
                            </li>
                            <li>
                                <p>Bounds and Govt. Securities</p>
                            </li>
                        </ul></div>
                        <img src="media/images/pressLogos.png" style={{width: "90%"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Awards;