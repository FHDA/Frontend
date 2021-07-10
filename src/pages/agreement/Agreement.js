import React from "react";

const { data } = require("./exampleData");

export default function Agreement() {
  console.log(data["UCLA"]["DeAnza College"]["Physics/B.A."]);

  const agreement = data["UCLA"]["DeAnza College"]["Physics/B.A."];

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
      return (
        <div>
          {relationshipKeyword}
          {`${obj["content"]} - ${obj["message"]}`}
        </div>
      );
    } else {
      console.log(typeof obj["content"]);
      const rect = [];
      for (const component of obj["content"]) {
        const courseRect = renderRect(component);
        rect.push(courseRect);
      }

      let equalRect = [];
      if ("equivalences" in obj && obj["equivalences"] !== "") {
        equalRect = renderRect(obj["equivalences"]);
      }
      return (
        <React.Fragment>
          <div style={{ border: "2px solid red", margin: "10px" }}>{rect}</div>
          {equalRect}
        </React.Fragment>
      );
    }
  };

  const testObj = {
    message: "",
    content: [
      {
        message: "Physics for Scientists and Engineers: Mechanics (5.00)",
        content: "PHYSICS 1A",
        relationship: "",
      },
      {
        message:
          "Physics for Scientists and Engineers: Oscillations, Waves, Electricand Magnetic Fields (5.00)",
        content: "PHYSICS 1B",
        relationship: "and",
      },
      {
        message:
          "Physics for Scientists and Engineers: Electrodynamics, Optics, and Special Relativity (5.00)",
        content: "PHYSICS 1C",
        relationship: "and",
      },
      {
        message:
          "Physics Laboratory for Scientists and Engineers: Mechanics (2.00)",
        content: "PHYSICS 4AL",
        relationship: "and",
      },
      {
        message:
          "Physics Laboratory for Scientists and Engineers: Electricity and Magnetism (2.00)",
        content: "PHYSICS 4BL",
        relationship: "and",
      },
    ],
    relationship: "",
    equivalences: {
      message: "",
      content: [
        {
          message: "Physics for Scientists and Engineers: Mechanics (6.00)",
          content: "PHYS 4A",
          relationship: "",
        },
        {
          message:
            "Physics for Scientists and Engineers: Electricity and Magnetism (6.00)",
          content: "PHYS 4B",
          relationship: "and",
        },
        {
          message:
            "Physics for Scientists and Engineers: Fluids, Waves, Optics and Thermodynamics (6.00)",
          content: "PHYS 4C",
          relationship: "and",
        },
      ],
      relationship: "",
    },
  };

  return (
    <React.Fragment>
      <h1>Agreement Example</h1>
      <div style={{ border: "2px solid red", margin: "10px" }}>
        {renderRect(data["UCLA"]["DeAnza College"]["Physics/B.A."][1])}
      </div>
    </React.Fragment>
  );
}
