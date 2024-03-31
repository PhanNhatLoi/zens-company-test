import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { serverUrl } from "../config";

const BodyComponent = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const cookie = Cookies.get("current");

  useEffect(() => {
    fetch(`${serverUrl}/api/jokers`, { method: "GET" })
      .then(async (res) => {
        const Response = await res.json();
        setJokes(
          (Response.jokersDocument &&
            Response.jokersDocument.length > 0 &&
            Response.jokersDocument) ||
            []
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCurrent(cookie || 0);
      });
  }, []);

  const handleClick = (action) => {
    if (current <= jokes.length) {
      setLoading(true);
      const apiUrl = `${serverUrl}/api/vote/${jokes[current]._id}/${action}`;
      fetch(apiUrl, { method: "PUT" })
        .then()
        .catch((err) => console.log(err))
        .finally(() => {
          setCurrent(current + 1);
          Cookies.set("current", Number(current + 1));
          setLoading(false);
        });
    }
  };

  return (
    <div className="body">
      <div className="title-card flex items-center">
        <div className="text-center w-full">
          <span className="block text-2xl font-normal md:text-4xl md:font-bold">
            A joke a day keeps the doctor away
          </span>
          <span className="block text-sm font-normal mt-6 md:font-bold">
            If you joke wrong way, your teeth have to pay. (Serious)
          </span>
        </div>
      </div>
      <div className="content">
        <div className="w-full text-md px-5 text md:px-14 md:w-3/4 md:text-xl">
          <span>
            {(current <= jokes.length && jokes[current]?.content) ||
              "That's all the jokes for today! Come back another day!"}
          </span>
        </div>
      </div>
      <div className="action flex justify-center">
        <button
          disabled={loading}
          onClick={() => {
            handleClick("like");
          }}
          className="button funny shadow-sm shadow-black flex justify-center items-center"
        >
          {loading ? <div className="loader" /> : "This is Funny!"}
        </button>
        <button
          disabled={loading}
          onClick={() => {
            handleClick("dislike");
          }}
          className="button not-funny shadow-sm shadow-black flex justify-center items-center"
        >
          {loading ? <div className="loader" /> : "This is not funny."}
        </button>
      </div>
    </div>
  );
};

export default BodyComponent;
