import { Link } from "react-router-dom";

const destinations = {
  punakha: "Punakha",
  thimphu: "Thimphu",
  paro: "Paro",
  bumthang: "Bumthang",
  trongsa: "Trongsa",
  wangdue: "Wangdue",
  tashiyangtse: "Tashiyangtse",
  chukha: "Chukha",
  mongar: "Mongar",
  trashigang: "Trashigang",
};

const shuffleArray = (array: string[]): string[] =>
  [...array].sort(() => Math.random() - 0.5);

const RelatedDestinations = ({
  currentPage,
  count = 3,
}: {
  currentPage: string;
  count?: number;
}) => {
  const filteredDestinations = Object.keys(destinations).filter(
    (dest): dest is keyof typeof destinations => dest !== currentPage
  );

  return (
    <div className="related-destinations">
      <ul>
        {shuffleArray(filteredDestinations)
          .slice(0, count)
          .map((destination) => (
            <li key={destination}>
              <Link
                to={`/explore/${destination}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {destinations[destination as keyof typeof destinations]}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RelatedDestinations;
