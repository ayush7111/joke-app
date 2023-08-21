import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setJokeCategories,
  setKeyword,
  setShow,
} from "../redux/categoriesSlice";
import { Bars } from "react-loader-spinner";
const Categories = () => {
  const dispatch = useDispatch();
  const { jokeCategories, show } = useSelector((state) => state.categories);

  //getting the categories data
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => dispatch(setJokeCategories(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {jokeCategories.length === 0 ? (
        <Bars color="#fff" />
      ) : (
        <>
          <h1 className="m-3 text-4xl text-green-500 animate-bounce font-bold">
            Chuck Norries
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4 bg-transparent text-white text-lg md:gap-y-3 md:w-fit">
            {jokeCategories.map((value, index) => (
              <div
                key={index}
                className="shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center m-3 rounded-md hover:border border-black capitalize text-white text-lg cursor-pointer false md:p-3"
                onClick={() => {
                  dispatch(setKeyword(value));
                  show || dispatch(setShow());
                }} //set keyword for the joke categories and display the jokes
              >
                <h1 className="text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6">
                  {value}
                </h1>
                <p className="capitalize text-purple-800 text-sm lg:block md:block hidden">
                  {`unlimited jokes on ${value}`}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Categories;
// https://api.chucknorris.io/jokes/categories
// https://api.chucknorris.io/jokes/random?category=
