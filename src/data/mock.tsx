
import cover1 from "../Assets/movie1.jpg";
import cover2 from "../Assets/movie2.jpg";
import cover3 from "../Assets/movie3.jpg";

export interface mockMovie {
    title: string;
    cover: string;
    score?: number | string;
}

const mockData: mockMovie[] = [
  {
    title: "Avengers",
    cover: cover1,
  },
  {
    title: "Missão Impossivel",
    cover: cover2,
  },
  {
    title: "Mega tubarão",
    cover: cover3,
  },
  {
    title: "Avengers",
    cover: cover1,
  },
  {
    title: "Missão Impossivel",
    cover: cover2,
  },
  {
    title: "Mega tubarão",
    cover: cover3,
  },
  {
    title: "Avengers",
    cover: cover1,
  },
  {
    title: "Missão Impossivel",
    cover: cover2,
  },
  {
    title: "Mega tubarão",
    cover: cover3,
  },
  {
    title: "Avengers",
    cover: cover1,
  },
  {
    title: "Missão Impossivel",
    cover: cover2,
  },
  {
    title: "Mega tubarão",
    cover: cover3,
  },
];


export default mockData;