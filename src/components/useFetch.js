import React, { useState, useEffect } from "react";

function useFetchnew(url, time) {
  const [data, setData] = useState(null); // will be assigned the data fetched from API
  const [error, setError] = useState(null); // will be an error message if we have any
  const [isPending, setIsPending] = useState(true); // will be a loading state if there is a delay in API response

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: abortController.signal });
        if (!res.ok) {
          if (error.status === 406) {
            console.log("406 error i here to see you my bro");
            setData(
              Array(9).fill(
                "SADLY I DONT HAVE MONEY FOR BUYING THE API , BUT THIS API WORKS FINE ON LOCAL HOST FIND ME ON GH AND CHECK OUT THE REPO TO ENJOY THIS APP"
              )
            );
            console.log(data);
          }
          throw new Error(
            "The source of the API is not available right now, please wait. res != ok"
          );
        }
        const data = await res.json();
        console.log(res);
        setData(data);
        setIsPending(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch has been aborted!");
        }
        if (error) {
        } else {
          setError(error.message);
          setIsPending(false);
        }
      }
    };

    const timer = setTimeout(fetchData, time);

    return () => {
      clearTimeout(timer);
      abortController.abort();
    };
  }, [url]);

  return { data, isPending, error };
}

export default useFetchnew;
