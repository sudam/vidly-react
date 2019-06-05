import React, { Component } from "react";

const Like = props => {
  let classes = "fa fa-heart";
  classes += !props.liked ? "-o" : "";

  return (
    <React.Fragment>
      <span>
        <i
          onClick={props.onClick}
          style={{ cursor: "pointer" }}
          className={classes}
          aria-hidden="true"
        />
      </span>
    </React.Fragment>
  );
};

export default Like;
