import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Experience from "xml-renderer";
import { sync } from "slimdom-sax-parser";
const { renderToStaticMarkup } = require("react-dom/server");

const experience = new Experience();

experience.register("self::text()", ({ node }) => node().nodeValue);

experience.register("self::node()", ({ traverse }) => traverse());

experience.register("self::paragraph", ({ key, traverse }) => (
  <p key={key()}>{traverse()}</p>
));

experience.register(
  "self::paragraph[not(preceding-sibling::*)]",
  ({ key, traverse }) => (
    <p key={key()}>
      <b>{traverse()}</b>
    </p>
  )
);
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputNamedSpell: "",
      inputNLP: "",
      inputNewData: "",
      inputNewSpellName: "",
      namedSpellResult: null,
      questionSpellResult: null
    };
  }
  componentDidMount() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  backend = () => {
    // axios.get("http://localhost:1984/server/findSpell", 5).then((res)=>{
    //   console.log(res.data)
    // })
    axios
      .post("http://localhost:9000/", {
        annotators: "tokenize",
        outputFormat: "json",
        text: "the quick brown fox jumped over the lazy dog"
      })
      .then(res => {});
  };

  findSpellByName = () => {
    let clensedString = this.state.inputNamedSpell;
    clensedString = clensedString.split(" ").join("_");
    clensedString += ".xml";
    axios
      .post("http://localhost:1984/server/findSpellByName", clensedString)
      .then(res => {
        this.setState({ namedSpellResult: res.data });
      });
  };

  findSpell = () => {
    console.log("Find spell called");
  };

  insertSpell = () => {
    console.log("Insert Spell");
  };

  render() {
    return (
      <div className="App">
        <button className="accordion">Find spell by name</button>
        <div className="panel">
          <input
            onBlur={event => {
              this.setState({ inputNamedSpell: event.target.value });
            }}
          />
          <button onClick={this.findSpellByName.bind(this)}>Search</button>
          <div>
            {this.state.namedSpellResult === null ? (
              <div />
            ) : (
              renderToStaticMarkup(
                experience.render(sync(this.state.namedSpellResult))
              )
            )}
          </div>
        </div>

        <button className="accordion">Enter a question about a spell</button>
        <div className="panel">
          <input
            onBlur={event => {
              this.setState({ inputNLP: event.target.value });
            }}
          />
          <button onClick={this.findSpell.bind(this)}>Search</button>
          <div>{this.state.questionSpellResult}</div>
        </div>

        {/* Currently not working */}
        <button className="accordion">Insert Spell Data</button>
        <div className="panel">
          <label>Name of the spell</label>
          <input
            onBlur={event => {
              this.setState({ inputNewSpellName: event.target.value });
            }}
          />
          <label>Original Text</label>
          <input
            onBlur={event => {
              this.setState({ inputNewData: event.target.value });
            }}
          />
          <button onClick={this.insertSpell.bind(this)}>Add</button>
          <div>
            {this.state.inputNewData === null ? <div>Worked</div> : <div />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
