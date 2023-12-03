import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const infoUczenn=[{
  imie: "Janusz",
  nazwisko: "Chmura",
  klasa: "4TET",
  semestr: "2",
  data_ur: "27.11.2000",
  oceny: ["5, 4, 4, 3, 3, 4, 5, 1, 2, 3"],
  img: "/img/uczen1.jpg"
},
{
  imie: "Tomasz",
  nazwisko: "Gałązka",
  klasa: "2TED",
  semestr: "1",
  data_ur: "11.02.2002",
  oceny: ["3, 2, 5, 3, 3, 3, 3, 2, 1, 2"],
  img: "/img/uczen2.jpg"
},
{
  imie: "Kamil",
  nazwisko: "Kowalski",
  klasa: "3ABC",
  semestr: "1",
  data_ur: "15.05.2001",
  oceny: ["3, 5, 1, 1, 2, 4"],
  img: "/img/uczen3.jpg"
},
{
  imie: "Eustachy",
  nazwisko: "Nowak",
  klasa: "3ANW",
  semestr: "2",
  data_ur: "31.04.2001",
  oceny: ["1, 1, 1, 1, 1, 1"],
  img: "/img/uczen4.jpg"
},
]

const obliczSrednia = (ocenyy) => { // () =>  funkcja strzałkowa
  const ocenyyy = ocenyy.map((ocena) => parseFloat(ocena)); // Konwersja na liczby zmiennoprzecinkowe
  const poprOceny = ocenyyy.filter((ocena) => !isNaN(ocena)); // Filtrowanie tylko prawidłowych ocen
  
  if (poprOceny.length === 0) { // Jeśli brak prawidłowych ocen
    return 'Brak ocen';
  }
  const average = poprOceny.reduce((acc, curr) => acc + curr, 0) / poprOceny.length; //Sumowanie i obliczanie średniej ocen
  return average.toFixed(2); //Zwrócenie liczby do jednego miejsca po przecinku
};

infoUczenn.forEach((student) => {
  student.srednia = obliczSrednia(student.oceny); //Tworzy kolumnę "srednia" w InfoUczenn i przypisuje do niej obliczoną średnią danego ucznia
});

const nextStudent = (currentStudent, setCurrentStudent) => {
  setCurrentStudent((prevStudent) => (prevStudent + 1) % infoUczenn.length); // Inkrementacja indeksu ucznia o 1, przechodząc do następnego ucznia; % zapewnia pętlę
};

const prevStudent = (currentStudent, setCurrentStudent) => {
  setCurrentStudent((prevStudent) => (prevStudent === 0 ? infoUczenn.length - 1 : prevStudent - 1)); // Dekrementacja indeksu ucznia o 1, przechodząc do poprzedniego ucznia
};

function App() {
  const [currentStudent, setCurrentStudent] = useState(0);
  const student = infoUczenn[currentStudent];

  return (
    <div className='Main'>
      <div className='NavBar'>
        <h1>Info Uczeń</h1>
      </div>

      <div className='Window'>
        <div className='strzalki'>
          <button class="strzalkaButton" onClick={() => prevStudent(currentStudent, setCurrentStudent)}><i class="strzalka left"></i></button>
        </div>

        <div className='UczenWindow'>
          
          <div className='imgUczen'>
            <img src={student.img} width='400px' height='300px'></img>
          </div>

          <div className='opisUczen'>
            <div className='opisUczenIn1'>
              <h3><i>Imię:</i></h3>
              <h3><i>Nazwisko:</i></h3>
              <h3><i>Klasa:</i></h3>
              <h3><i>Semestr:</i></h3>
              <h3><i>Data ur.:</i></h3>
              <h3><i>Średnia:</i></h3>
            </div>

            <div className='opisUczenIn2'>
              <h3>{student.imie}</h3>
              <h3>{student.nazwisko}</h3>
              <h3>{student.klasa}</h3>
              <h3>{student.semestr}</h3>
              <h3>{student.data_ur}</h3>
              <h3>{student.srednia}</h3>
            </div>
          </div>

          <div className='ocenyUczen'>
            <h1>Oceny: {student.oceny}</h1>
          </div>

          

        </div>

        <div className='strzalki'>
          <button class="strzalkaButton" onClick={() => nextStudent(currentStudent, setCurrentStudent)}><i class="strzalka right"></i></button>
        </div>

      </div>
    </div>
  );
}

export default App;
