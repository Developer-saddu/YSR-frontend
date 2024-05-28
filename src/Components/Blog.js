import React, { useState } from "react";

const Blog = () => {
  const [alignment, setAlignment] = useState("center");

  const styles = {
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    },
    top: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
      paddingTop: "20px"
    },
    bottom: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      height: "100vh",
      paddingBottom: "20px"
    },
    left: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "100vh",
      paddingLeft: "20px"
    },
    right: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "100vh",
      paddingRight: "20px"
    }
  };

  return (
    <div>
      <div style={styles[alignment]}>
        <h1>This is Blog Page Comming Soon.......... </h1>
      </div>
    </div>
  );
};

export default Blog;
