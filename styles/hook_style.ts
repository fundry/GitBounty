// import React, { useState, useEffect } from "react";
//
// const useWindowWidth: any = () => {
//   const [Width, setWidth] = useState<number>(null);
//
//   setTimeout(function() {
//     setWidth(window.innerWidth);
//   }, 1000);
//
//   const handleResize = value => {
//     setWidth(value);
//   };
//
//   useEffect(() => {
//     window.addEventListener("resize", handleResize.bind(this));
//     return () => window.removeEventListener("resize", handleResize.bind(this));
//   }, []);
//   return Width;
// };
//
// export default useWindowWidth;
