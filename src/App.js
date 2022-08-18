// import logo from './logo.svg';
import React, { useState } from "react";
import Icon from "./components/Icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

var iconArray = new Array(9).fill("empty");

function App() {
  const glow = (index1, index2, index3) => {
    var tags = document.getElementsByTagName("Icon");
    console.log(tags[index1], tags[index2], tags[index3]);
  };

  var [crossTurn, setCrossTurn] = useState(false);
  var [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setCrossTurn(false);
    setWinMessage("");
    iconArray.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    if (
      iconArray[0] === iconArray[1] &&
      iconArray[1] === iconArray[2] &&
      iconArray[2] !== "empty"
    ) {
      setWinMessage(` ${iconArray[0]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(0, 1, 2);
    } else if (
      iconArray[3] === iconArray[4] &&
      iconArray[4] === iconArray[5] &&
      iconArray[5] !== "empty"
    ) {
      setWinMessage(` ${iconArray[4]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(3, 4, 5);
    } else if (
      iconArray[6] === iconArray[7] &&
      iconArray[7] === iconArray[8] &&
      iconArray[8] !== "empty"
    ) {
      setWinMessage(` ${iconArray[7]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(6, 7, 8);
    } else if (
      iconArray[0] === iconArray[4] &&
      iconArray[4] === iconArray[8] &&
      iconArray[8] !== "empty"
    ) {
      setWinMessage(` ${iconArray[8]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(0, 4, 8);
    } else if (
      iconArray[2] === iconArray[4] &&
      iconArray[4] === iconArray[6] &&
      iconArray[6] !== "empty"
    ) {
      setWinMessage(` ${iconArray[4]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(2, 4, 6);
    } else if (
      iconArray[0] === iconArray[3] &&
      iconArray[3] === iconArray[6] &&
      iconArray[6] !== "empty"
    ) {
      setWinMessage(` ${iconArray[6]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(0, 3, 6);
    } else if (
      iconArray[1] === iconArray[4] &&
      iconArray[4] === iconArray[7] &&
      iconArray[7] !== "empty"
    ) {
      setWinMessage(` ${iconArray[7]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(1, 4, 7);
    } else if (
      iconArray[2] === iconArray[5] &&
      iconArray[5] === iconArray[8] &&
      iconArray[8] !== "empty"
    ) {
      setWinMessage(` ${iconArray[5]} wins`);
      toast("Wohoooo ! Its Party time ");
      glow(2, 5, 8);
    }

    if (iconArray.every((item) => item !== "empty")) {
      toast("Nobody won . Both giving tough competition");
    } else {
      glow();
    }
  };

  const changeIcon = (indexNumber) => {
    if (winMessage) {
      toast.error(`${winMessage}`);
    } else {
      if (iconArray[indexNumber] === "empty") {
        crossTurn
          ? (iconArray[indexNumber] = "cross")
          : (iconArray[indexNumber] = "circle");
        setCrossTurn(!crossTurn);
      } else {
        toast.error(`Already Filled  `);
      }
      checkWinner();
    }
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-right" color="black" />
      <Row>
        <Col className="col-md-6 offset-3 mb-5">
          {winMessage ? (
            <div className="mb-3 mt-5">
              <h1 className="text-uppercase text-center mb-5 winner">
                {winMessage}
              </h1>
              <Button
                className="mb-2 my-2 reload bg-gradient"
                onClick={reloadGame}
              >
                Reload Game
              </Button>
            </div>
          ) : iconArray.every((item) => item !== "empty") ? (
            <div>
              <h1 className="text-center glow">Nobody won . Try Harder !!</h1>
              <Button
                className="mb-2 my-2 reload bg-gradient"
                onClick={reloadGame}
              >
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center glow">
              {crossTurn ? "Cross" : "Circle"} turn
            </h1>
          )}
        </Col>
        <Col className="col-md-6 offset-3 grid " style={{ marginLeft: "25vw" }}>
          {iconArray.map((item, index) => (
            <Card className="box bg-white" onClick={() => changeIcon(index)}>
              <CardBody className="">
                <Icon name={item} />
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
