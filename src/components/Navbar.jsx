import { fetchCharacters } from "../utils/api_hook";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Errorpage from "./Errorpage";
import { GridLoader } from "react-spinners";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
function Navbar() {
  const navigate = useNavigate();
  const pages = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
  ];
  const [page, setPage] = useState(pages[0]);
  const [character, setCharacter] = useState("Please select a character");
  const { isError, isLoading, data, error } = useQuery(
    ["characters", page],
    () => fetchCharacters(page)
  );
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  if (isError) {
    return <Errorpage errorMsg={error.message} />;
  }
  const characters = data.results;
  const characterNames = characters.map((character) => character.name);
  return (
    <nav className="mt-4 flex flex-col justify-between lg:flex-row items-center p-4">
      <Link to="/" className="font-cheri text-4xl">
        Rick and Morty API
      </Link>
      <div className="flex gap-6 flex-col lg:flex-row">
        <Autocomplete
          disablePortal
          id="character-box"
          options={characterNames}
          sx={{ width: 300 }}
          value={character}
          onChange={(event, newValue) => {
            if (newValue) {
              setCharacter(newValue);
              navigate(
                `/character/${
                  characters.find((char) => char.name === newValue).id
                }`
              );
            }
          }}
          renderInput={(params) => <TextField {...params} label="Character" />}
        />
        <Autocomplete
          disablePortal
          id="page-box"
          options={pages}
          sx={{ width: 300 }}
          value={page}
          onChange={(event, newValue) => {
            if (newValue) {
              setPage(newValue);
              navigate(`/characters/${newValue}`);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Page" />}
        />
      </div>
    </nav>
  );
}

export default Navbar;
