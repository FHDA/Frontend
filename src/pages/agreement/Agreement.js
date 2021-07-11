import React from "react";

const { data } = require("./exampleData");

export default function Agreement() {
  const renderRect = (obj) => {
    if (
      typeof obj["content"] === "string" ||
      obj["content"] instanceof String
    ) {
      let relationshipKeyword = null;
      {
        if ("relationship" in obj && obj["relationships"] !== "") {
          relationshipKeyword = (
            <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          );
        }
      }
      let needBorder = false;
      let equalRect = [];
      if ("equivalences" in obj && obj["equivalences"] !== "") {
        //console.log(obj["equivalences"]);
        equalRect = renderEq(obj["equivalences"]);
      }

      let result = null;
      if ("equivalences" in obj) {
        needBorder = true;
      }

      if (needBorder) {
        result = (
          <React.Fragment>
            {relationshipKeyword}
            <div style={{ border: "2px solid red", margin: "10px" }}>
              <div>{`${obj["content"]} - ${obj["message"]}`}</div>
            </div>
            {relationshipKeyword}
            {equalRect}
          </React.Fragment>
        );
      } else {
        result = (
          <React.Fragment>
            {relationshipKeyword}
            <div>
              <div>{`${obj["content"]} - ${obj["message"]}`}</div>
            </div>
            {equalRect}
          </React.Fragment>
        );
      }

      return result;
    } else {
      //console.log(typeof obj["content"]);
      const rect = [];

      for (const component of obj["content"]) {
        const courseRect = renderRect(component, true);
        rect.push(courseRect);
      }

      let equalRect = [];
      if ("equivalences" in obj && obj["equivalences"] !== "") {
        //console.log(obj["equivalences"]);
        equalRect = renderEq(obj["equivalences"]);
      }

      let needTitle = false;
      if (obj["message"] !== "") {
        needTitle = true;
      }
      return (
        <React.Fragment>
          {needTitle && <h4>{obj["message"]}</h4>}
          <div style={{ border: "2px solid red", margin: "10px" }}>{rect}</div>
          {obj["relationship"]}
          {equalRect}
        </React.Fragment>
      );
    }
  };

  const renderEq = (obj) => {
    if (
      typeof obj["content"] === "string" ||
      obj["content"] instanceof String
    ) {
      let relationshipKeyword = null;
      {
        if ("relationship" in obj && obj["relationships"] !== "") {
          relationshipKeyword = (
            <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          );
        }
      }

      return (
        <React.Fragment>
          {relationshipKeyword}
          <div>
            <div>{`${obj["content"]} - ${obj["message"]}`}</div>
          </div>
        </React.Fragment>
      );
    } else {
      const rect = [];
      for (const component of obj["content"]) {
        const courseRect = renderEq(component);
        rect.push(courseRect);
      }

      let relationshipKeyword = null;
      {
        if ("relationship" in obj && obj["relationships"] !== "") {
          relationshipKeyword = (
            <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          );
        }
      }

      return (
        <React.Fragment>
          {relationshipKeyword}
          <div style={{ border: "2px solid blue", margin: "10px" }}>{rect}</div>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <h1>Agreement Example</h1>
      <div style={{ border: "2px solid green", margin: "10px" }}>
        {renderRect(data["UCLA"]["DeAnza College"]["Physics/B.A."][1], false)}
      </div>
    </React.Fragment>
  );
}
