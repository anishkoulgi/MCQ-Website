import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import "../styles/quiz.css";

function QuizPage() {
  const question = [
    {
      id: 1,
      selected: true
    },
    {
      id: 2,
      selected: false
    },
    {
      id: 3,
      selected: false
    },
    {
      id: 4,
      selected: false
    },
    {
      id: 5,
      selected: false
    },
    {
      id: 6,
      selected: false
    },
    {
      id: 7,
      selected: false
    },
    {
      id: 8,
      selected: false
    },
    {
      id: 9,
      selected: false
    },
    {
      id: 10,
      selected: false
    },
    {
      id: 11,
      selected: false
    },
    {
      id: 12,
      selected: false
    },
    {
      id: 13,
      selected: false
    },
    {
      id: 14,
      selected: false
    },
    {
      id: 15,
      selected: true
    },
    {
      id: 16,
      selected: false
    },
    {
      id: 17,
      selected: false
    },
    {
      id: 18,
      selected: false
    },
    {
      id: 19,
      selected: false
    },
    {
      id: 20,
      selected: false
    },
    {
      id: 21,
      selected: false
    },
    {
      id: 22,
      selected: false
    },
    {
      id: 23,
      selected: false
    },
    {
      id: 24,
      selected: false
    },
    {
      id: 25,
      selected: false
    },
    {
      id: 26,
      selected: false
    },
    {
      id: 27,
      selected: false
    },
    {
      id: 28,
      selected: false
    },
    {
      id: 29,
      selected: false
    },
    {
      id: 30,
      selected: false
    },
    {
      id: 31,
      selected: false
    },
    {
      id: 32,
      selected: false
    },
    {
      id: 33,
      selected: false
    },
    {
      id: 34,
      selected: false
    },
    {
      id: 35,
      selected: false
    },
    {
      id: 36,
      selected: false
    },
    {
      id: 37,
      selected: false
    }
  ];

  const [ques, setQues] = useState({ qno: 1 });

  const handleClick = val => {
    setQues({
      qno: val
    });
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="dummy-div" style={{ height: "8vh" }}></div>
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
                    {question.map(que => {
                      if (ques.qno == que.id) {
                        return (
                          <div key={que.id} className="grid-item selected">
                            {que.id}
                          </div>
                        );
                      }
                      return (
                        <div
                          key={que.id}
                          className="grid-item"
                          onClick={() => handleClick(que.id)}
                        >
                          {que.id}
                        </div>
                      );
                    })}
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm="6" className="divisions">
            <Row className="question-main">
              <Col sm="12"></Col>
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
