import Animals from "../../animals-component/animals-component";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { animalArr } from "../../animals-component/animals-component";
import { Container } from "../../styles/Container.styled";

const Animal = () => {
  const { id } = useParams();

  const animal = animalArr.find((animal) => {
    return animal.id === Number(id);
  });
  console.log(animal.name);

  return (
    <Container>
      <h1>{animal.name}</h1>
      <img
        src={animal.image_link}
        className="animalImg2"
        alt={animal.name}
        width="600px"
        height="600px"
      />
      <h2>Animal facts</h2>
      <ul>
        <li>Time active: {animal.active_time}</li>
        <li>Diet: {animal.diet}</li>
        <li>Animal type: {animal.animal_type}</li>
        <li>Geo Range: {animal.geo_range}</li>
        <li>Minimum length: {animal.length_min}</li>
        <li>Max length: {animal.length_max}</li>
        <li>Minimum weight: {animal.weight_min}</li>
        <li>Maximum weight: {animal.weight_max}</li>
        <li>Lifespan: {animal.lifespan}</li>
      </ul>
    </Container>
  );
};

export default Animal;
