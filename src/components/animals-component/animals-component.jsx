import axios from "axios";
import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
// import Table from 'react-bootstrap/Table';

const Animals = (props) => {
  const [animals, setAnimals] = useState({ blogs: [] });

  useEffect(() => {
    const fetchAnimals = async () => {
      const { data } = await axios
        .get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
        .catch((err) => console.log(err));

      setAnimals({ blogs: data });
      console.log(data);
    };
    fetchAnimals();
  }, [setAnimals]);

  animals.blogs.map((i) => {
    console.log(i.diet);
  });

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
        {animals.blogs &&
          animals.blogs.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
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
export default Animals;
