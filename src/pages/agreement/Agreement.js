import React, { useState, useRef } from "react";
import Select from "react-select";
import { Form, Button } from "react-bootstrap";
import ShowAgreement from "./ShowAgreement";
const { data } = require("./exampleData");

const universityList = [
  { label: "UCLA", value: "UCLA" },
  { label: "UC Berkeley", value: "UC Berkeley" },
  { label: "UCSD", value: "UCSD" },
];

const ccList = [
  { label: "DeAnza College", value: "DeAnza College" },
  { label: "Foothill College", value: "Foothill College" },
];

//this can be done by ajax
const majorList = [
  { label: "Physics/B.A.", value: "Physics/B.A." },
  { label: "Mathematics/B.S.", value: "Mathematics/B.S." },
  { label: "Data Theory/B.S.", value: "Data Theory/B.S." },
  { label: "Computer Science/B.S.", value: "Computer Science/B.S." },
  {
    label: "Asian American Studies/B.A.",
    value: "Asian American Studies/B.A.",
  },
  { label: "Anthropology/B.S.", value: "Anthropology/B.S." },
  { label: "Labor Studies/B.A.", value: "Labor Studies/B.A." },
  { label: "Global Studies/B.A.", value: "Global Studies/B.A." },
  { label: "Psychobiology/B.S.", value: "Psychobiology/B.S." },
];

function Agreement() {
  const [onSearchTab, setOnSearchTab] = useState(true);
  const [loadingMajor, setLoadingMajor] = useState(false);

  const [university, setUniversity] = useState("");
  const [cc, setCc] = useState("");
  const [major, setMajor] = useState("");
  const [agreement, setAgreement] = useState([]);

  const univRef = useRef();
  const ccRef = useRef();
  const majorRef = useRef();

  const searchHandler = (event) => {
    console.log(university, cc, major);
    //fetch Data from DB, suppose we have data here

    setAgreement(data["UCLA"]["DeAnza College"][major]);
    setOnSearchTab(false);
  };

  if (onSearchTab) {
    return (
      <Form
        style={{
          width: "40vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20vh",
        }}
      >
        <label htmlFor="univ">Institution</label>
        <Select
          ref={univRef}
          inputId="univ"
          options={universityList}
          onChange={(e) => {
            setUniversity(e.value);
          }}
        />
        <label htmlFor="cc">Agreements with Other Institutions</label>
        <Select
          ref={ccRef}
          inputId="cc"
          options={ccList}
          onChange={(e) => {
            setCc(e.value);
          }}
        />
        <label htmlFor="major">Major</label>
        <Select
          ref={majorRef}
          inputId="major"
          options={majorList}
          onChange={(e) => {
            setMajor(e.value);
          }}
        />
        <Button
          variant="primary"
          type="submit"
          size="lg"
          onClick={searchHandler}
        >
          Search
        </Button>
      </Form>
    );
  }

  return <ShowAgreement data={agreement} style={{ textAlign: "center" }} />;
}

export default Agreement;
