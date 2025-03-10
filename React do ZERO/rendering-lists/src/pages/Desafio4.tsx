import { useState } from "react";
import UserDetails from "./UserDetails";
import CnhUser from "./CnhUser";

const Desafio4 = () => {
  type Pessoa = {
    nome: string;
    idade: number;
    profissao: string;
  };
  const pessoa: Pessoa[] = [
    { nome: "Gabriel Nicolas", idade: 24, profissao: "Desenvolvedor" },
    { nome: "Luiz Eduardo", idade: 20, profissao: "Enfermeiro" },
    { nome: "Laiz Vitoria", idade: 22, profissao: "Ciêntista" },
    { nome: "Bruna Vitoria", idade: 17, profissao: "Estudante" },
    { nome: "Gabriele Miranda", idade: 12, profissao: "Estudante" },
    { nome: "Jhenifer Cristina", idade: 17, profissao: "Estudante" },
  ];
  return (
    <>
      <UserDetails pessoa={pessoa} />
    </>
  );
};

export default Desafio4;
