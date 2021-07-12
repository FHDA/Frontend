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
        if ("relationship" in obj && obj["relationship"] !== "") {
          relationshipKeyword = (
            <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          );
        }
      }
      let foundEq = false;
      let needBorder = false;
      let equalRect = [];
      if ("equivalences" in obj && obj["equivalences"] !== "") {
        //console.log(obj["equivalences"]);
        foundEq = true;
        equalRect = renderEq(obj["equivalences"]);
      }

      let result = null;
      if ("equivalences" in obj) {
        needBorder = true;
      }

      if (needBorder) {
        result = (
          <React.Fragment>
            <div style={{ clear: "both" }}></div>
            <div>
              <div style={{ clear: "both" }}></div>
              <div style={{ float: "left" }}>
                {relationshipKeyword ? relationshipKeyword : null}
                <div style={{ border: "2px solid red", margin: "10px" }}>
                  <div>{`${obj["content"]} - ${obj["message"]}`}</div>
                </div>
              </div>
              <div style={{ float: "right" }}>
                {relationshipKeyword ? relationshipKeyword : null}
                {equalRect}
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </React.Fragment>
        );
      } else {
        result = (
          <React.Fragment>
            {relationshipKeyword ? relationshipKeyword : null}
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
      let foundEql = false;
      if ("equivalences" in obj && obj["equivalences"] !== "") {
        //console.log(obj["equivalences"]);
        foundEql = true;
        equalRect = renderEq(obj["equivalences"]);
      }

      let needTitle = false;
      if (obj["message"] !== "") {
        needTitle = true;
      }

      if (foundEql) {
        return (
          <React.Fragment>
            <div style={{ clear: "both" }}></div>
            {needTitle && <h4>{obj["message"]}</h4>}
            <div>
              <div style={{ clear: "both" }}></div>
              <div style={{ float: "left" }}>
                <div style={{ border: "2px solid red", margin: "10px" }}>
                  {rect}
                </div>
              </div>
              <div style={{ float: "right" }}>
                {obj["relationship"]}
                {equalRect}
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </React.Fragment>
        );
      }

      let flag = true;
      if (equalRect.length === 0) {
        flag = false;
      }

      return (
        <React.Fragment>
          <div style={{ clear: "both" }}></div>
          <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          {needTitle && <h4>{obj["message"]}</h4>}
          <div style={{ border: "2px solid red", margin: "10px" }}>{rect}</div>
          {flag && (
            <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          )}
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
        if ("relationship" in obj && obj["relationship"] !== "") {
          //console.log(obj["relationship"]);
          relationshipKeyword = (
            <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          );
        }
      }

      return (
        <React.Fragment>
          {relationshipKeyword ? relationshipKeyword : null}
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
        if ("relationship" in obj && obj["relationship"] !== "") {
          relationshipKeyword = (
            <div style={{ fontWeight: "bold" }}>{obj["relationship"]}</div>
          );
        }
      }

      return (
        <React.Fragment>
          {relationshipKeyword ? relationshipKeyword : null}
          <div style={{ border: "2px solid blue", margin: "10px" }}>{rect}</div>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <h1>Agreement Example</h1>
      <div style={{ border: "2px solid green", margin: "10px" }}>
        {renderRect(data["UCLA"]["DeAnza College"]["Physics/B.A."][1])}
      </div>
    </React.Fragment>
  );
}
