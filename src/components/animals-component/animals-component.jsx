import axios from "axios";
import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const animalArr = [];

const Animals = () => {
  const [animals, setAnimals] = useState({ name: [] });

  useEffect(() => {
    const fetchAnimals = async () => {
      const { data } = await axios
        .get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
        .catch((err) => console.log(err));

      setAnimals({ name: data });
    };
    fetchAnimals();
  }, [setAnimals]);

  console.log(animals.name);

  animals.name.map((obj) => {
    animalArr.push(obj);
  });

  // console.log(animalArr);

  return (
    <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Animal Type</th>
          <th>Name</th>
          <th>Diet</th>
        </tr>
      </thead>
      <tbody>
        {animals.name &&
          animals.name.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/${item.id}`}>{item.id}</Link>
              </td>
              <td>
                <img src={item.image_link} alt={item.name} width="100px" />
              </td>
              <td>{item.animal_type}</td>
              <td>{item.name}</td>
              <td>{item.diet}</td>
            </tr>
          ))}
      </tbody>
    </ReactBootStrap.Table>
  );
};
export { Animals, animalArr };
