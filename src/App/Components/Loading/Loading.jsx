import React from "react";
import "./Loading.scss";

const Loading = (props) => {

    return props.loading && <div className="loading-wrapper">
        <p>Die Bücher-Liste lädt gerade...</p>
    </div>

};

export default Loading;

