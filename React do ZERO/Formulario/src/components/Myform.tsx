import { ChangeEvent, use, useState } from "react";

type MyFormProps = {
  user?: { name: string; email: string };
};
function MyForm(props: MyFormProps) {
  const { user } = props;
  const [name, setName] = useState<string>(user ? user.name : "");
  const [email, setEmail] = useState<string>(user ? user.email : "");
  const [bio, setBio] = useState<string>();
  const [role, setRole] = useState<string>();

  const chengeName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setBio("");
  };
  return (
    <>
      <div style={{ width: "150px", display: "flex", textAlign: "left" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            b
            id="name"
            placeholder="Digite seu nome"
            onChange={chengeName}
            value={name}
          />
          <br />

          {/* Label */}
          <label>
            <span>E-mail</span>
            <input
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </label>
          <label>
            {" "}
            <span>Bio:</span>
            <textarea
              name="bio"
              id="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            ></textarea>
          </label>
          <label>
            <span>Select</span>
            <select
              name="role"
              onChange={(e) => {
                setRole(e.target.value);
              }}
              value={role}
            >
              <option value="dev">Desenvolvedor</option>
              <option value="Carpinteiro">Carpinteiro</option>
            </select>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default MyForm;
