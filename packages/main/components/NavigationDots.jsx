import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#2fbf71" } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;

// import React  from "react";

// function NavigationDots({ active }) {
//   const [activeDot, setActiveDot] = React.useState(active);
//   return (
//     <div className="app__navigation">
//       <div
//         className="app__navigation-dot"
//         onClick={() => setActiveDot("header")}
//         style={activeDot === "header" ? { backgroundColor: "#2fbf71" } : {}}
//       />
//       <div
//         className="app__navigation-dot"
//         onClick={() => setActiveDot("about")}
//         style={activeDot === "about" ? { backgroundColor: "#2fbf71" } : {}}
//       />
//       {/* <div
//         className="app__navigation-dot"
//         onClick={() => setActiveDot("projects")}
//         style={activeDot === "projects" ? { backgroundColor: "#2fbf71" } : {}}
//       /> */}
//       <div
//         className="app__navigation-dot"
//         onClick={() => setActiveDot("skills")}
//         style={activeDot === "skills" ? { backgroundColor: "#2fbf71" } : {}}
//       />
//       <div
//         className="app__navigation-dot"
//         onClick={() => setActiveDot("testimonials")}
//         style={
//           activeDot === "testimonials" ? { backgroundColor: "#2fbf71" } : {}
//         }
//       />
//       <div
//         className="app__navigation-dot"
//         onClick={() => setActiveDot("footer")}
//         style={activeDot === "footer" ? { backgroundColor: "#2fbf71" } : {}}
//       />
//     </div>
//   );
// }
// export default NavigationDots;
