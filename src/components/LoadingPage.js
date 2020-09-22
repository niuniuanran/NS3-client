import React from "react";
import "./LoadingPage.css"
import ReactLoading from "react-loading";

export default function LoadingPage() {
    return <div className={"loading-page"}>
        <ReactLoading type="spinningBubbles" color={"orange"} height={"10vw"} width={"10vh"}/>
    </div>
}