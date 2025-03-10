import CnhUser from "./CnhUser";

type UserDetailsProps = {
  pessoa: { nome: string; idade: number; profissao: string }[];
};
const UserDetails: React.FC<UserDetailsProps> = (props: UserDetailsProps) => {
  const { pessoa } = props;
  return (
    <>
      <hr />
      <h1>Detalhes da pessoa</h1>
      {pessoa.map((p) => (
        <>
          <p>Nome: {p.nome}</p>
          <p>Idade: {p.idade}</p>
          <p>Profissão: {p.profissao}</p>
          <CnhUser idade={p.idade} />
        </>
      ))}
    </>
  );
};

export default UserDetails;
