import kadetImg from "../../assets/img/opel-kadett-2-0-gsi-1990.webp";
import opalaImg from "../../assets/img/IMG_8007.webp";
import escortImg from "../../assets/img/4cavmkcphovqjymelfi7pygeg.jpg";

type Car = {
  Nome: string;
  Marca: string;
  imgCar: string;
};

const CarDetails: React.FC = () => {
  const cars: Car[] = [
    { Nome: "Kadet", Marca: "Chevrolet", imgCar: kadetImg },
    { Nome: "Opala", Marca: "Chevrolet", imgCar: opalaImg },
    { Nome: "Escort", Marca: "Ford", imgCar: escortImg },
  ];

  return (
    <>
      {cars.map((car, index) => (
        <div key={index}>
          <p>Nome: {car.Nome}</p>
          <p>Marca: {car.Marca}</p>
          <img width="300px" src={car.imgCar} alt={car.Nome} />
          <hr />
        </div>
      ))}
    </>
  );
};

export default CarDetails;
