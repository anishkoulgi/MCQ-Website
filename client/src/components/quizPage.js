import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import "../styles/quiz.css";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

function QuizPage() {
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=50&type=multiple")
      .then(res => {
        console.log(res);
        setQuestion({
          questions: res.data.results
        });
        setQues({
          data: res.data.results[0].question,
          selected: 1,
          a: res.data.results[0].correct_answer,
          b: res.data.results[0].incorrect_answers[0],
          c: res.data.results[0].incorrect_answers[1],
          d: res.data.results[0].incorrect_answers[2]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const [questionsArray, setQuestion] = useState({ questions: [] });
  const [ques, setQues] = useState({
    data: "",
    selected: 1,
    a: "",
    b: "",
    c: "",
    d: ""
  });

  const handleClick = val => {
    setQues({
      data: questionsArray.questions[val - 1].question,
      selected: val,
      a: questionsArray.questions[val - 1].correct_answer,
      b: questionsArray.questions[val - 1].incorrect_answers[0],
      c: questionsArray.questions[val - 1].incorrect_answers[1],
      d: questionsArray.questions[val - 1].incorrect_answers[2]
    });
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Container fluid>
        <Row className="quiz-body">
          <Col sm="3" className="divisions">
            <Row className="question-pallet" noGutters>
              <Col sm="12">
                <Row className="quiz-title" noGutters>
                  <Col sm="12">Quiz Title:</Col>
                </Row>
                <div className="pallet-header">Question Pallet</div>
                <Row className="pallet" noGutters>
                  <div className="grid-container">
                    {questionsArray.questions.map((que, id) => {
                      if (ques.selected === id + 1) {
                        return (
                          <div key={id + 1} className="grid-item selected">
                            {id + 1}
                          </div>
                        );
                      }
                      return (
                        <div
                          key={id + 1}
                          className="grid-item"
                          onClick={() => handleClick(id + 1)}
                        >
                          {id + 1}
                        </div>
                      );
                    })}
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm="6" className="divisions">
            <Row className="question-main" noGutters>
              <Col sm="12" className="question-text">
                <p className="question-number">
                  {ReactHtmlParser(`Question ${ques.selected}`)}
                </p>
                <p className="question-data"> {ReactHtmlParser(ques.data)}</p>
              </Col>
              <Col sm="12">
                <div className="radiogroup">
                  <div className="radioWrapper">
                    <input
                      className="state"
                      type="radio"
                      name="app"
                      id="a"
                      value="a"
                    />
                    <label className="label" for="a">
                      <div className="indicator"></div>
                      <span className="text">{ReactHtmlParser(ques.a)}</span>
                    </label>
                  </div>
                  <div className="radioWrapper">
                    <input
                      className="state"
                      type="radio"
                      name="app"
                      id="b"
                      value="b"
                    />
                    <label className="label" for="b">
                      <div className="indicator"></div>
                      <span className="text">{ReactHtmlParser(ques.b)}</span>
                    </label>
                  </div>
                  <div className="radioWrapper">
                    <input
                      className="state"
                      type="radio"
                      name="app"
                      id="c"
                      value="c"
                    />
                    <label className="label" for="c">
                      <div className="indicator"></div>
                      <span className="text">{ReactHtmlParser(ques.c)}</span>
                    </label>
                  </div>
                  <div className="radioWrapper">
                    <input
                      className="state"
                      type="radio"
                      name="app"
                      id="d"
                      value="d"
                    />
                    <label className="label" for="d">
                      <div className="indicator"></div>
                      <span className="text">{ReactHtmlParser(ques.d)}</span>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm="3" className="divisions">
            <Row className="status">
              <Col sm="11"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QuizPage;
