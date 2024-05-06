import { useEffect, useState } from "react";

const useInfiniteScrolling = () => {

    const [limit, setLimit] = useState(4);

     //Handler fn to control infinite scrolling feature
     const InfiniteScrollHandler = async () => {
        try {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
          ) {
            // every time scrollbar hits the bottom bar, 4 jobcards are fetched and rendered from the API
            setLimit((prev) => prev + 4);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", InfiniteScrollHandler);
        return () => window.removeEventListener("scroll", InfiniteScrollHandler);
      }, []);

    return [limit];
}

export default useInfiniteScrolling;