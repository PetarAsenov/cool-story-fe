import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { selectHomepages } from "../../store/home/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { fetchHomepages } from "../../store/home/actions";

export default function Home() {
  const dispatch = useDispatch();
  const listHomepages = useSelector(selectHomepages);
  console.log(listHomepages);

  useEffect(() => {
    dispatch(fetchHomepages());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      {listHomepages.map(homepage => (
        <div
          key={homepage.id}
          style={{
            backgroundColor: homepage.backgroundColor,
            color: homepage.color
          }}
        >
          <h3>{homepage.title}</h3>
          <p>{homepage.description}</p>
          <Button>Visit page</Button>
        </div>
      ))}
    </div>
  );
}
