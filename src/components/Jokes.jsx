import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setShow } from "../redux/categoriesSlice";
import axios from "axios";
import { Oval } from "react-loader-spinner";
const Jokes = () => {
  const dispatch = useDispatch();
  const { keyword, show } = useSelector((state) => state.categories);
  const [joke, setJoke] = useState({});
  useEffect(() => {
    if (keyword !== "") {
      axios
        .get(`https://api.chucknorris.io/jokes/random?category=${keyword}`)
        .then((res) => {
          setJoke(res.data);
        })
        .catch((err) => console.log(err));
      return () => setJoke({});
    }
  }, [keyword]);

  //for the next joke
  const handleClick = () => {
    setJoke({});
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${keyword}`)
      .then((res) => {
        setJoke(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div
        className={
          show
            ? "absolute shadow-2xl md:top-56 top-72 lg:rounded-md p-5 lg:w-1/2 md:w-1/2 bg-gradient-to-r from-[#2c5364] to-[#0f2027] "
            : "hidden"
        }
      >
        <div
          className="float-right cursor-pointer"
          onClick={() => {
            dispatch(setShow());
            setJoke({});
          }}
        >
          ❌
        </div>
        <h1 className="text-center text-xl text-white font-bold capitalize">
          {keyword}
        </h1>
        <div className="w-full border border-black m-auto mt-6 shadow-xl flex flex-col items-center justify-center">
          {Object.keys(joke).length === 0 ? (
            <Oval color="#fff" secondaryColor="#000" />
          ) : (
            <>
              <p className="text-center font-semibold text-blue-100 font-sans m-5 text-xl md:text-3xl">
                {joke.value}
              </p>
            </>
          )}
          <button
            className="px-4 py-2 bg-blue-700 my-2 mx-3 cursor-pointer lg:w-96 md:96 rounded-md hover:bg-blue-600 font-bold "
            onClick={handleClick}
          >
            Next joke
          </button>
        </div>
      </div>
    </>
  );
};

export default Jokes;
