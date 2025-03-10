type CnhUserProps = {
  idade: number;
};

const CnhUser: React.FC<CnhUserProps> = (props: CnhUserProps) => {
  const { idade } = props;
  return (
    <>
      {idade >= 18 && <p>Por ser maior de idade, pode ser habilitado</p>}
      {idade <= 18 && <p>Por ser menor de idade, não pode ser habilitado</p>}
      <hr />
    </>
  );
};

export default CnhUser;
