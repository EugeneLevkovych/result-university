// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">Result University</h1>
//       <h3 className="centered" style={{ color: "#666" }}>
//         Устроитесь на работу или вернем деньги, после прохождения полной
//         программы.
//       </h3>
//     </section>
//   );
// }
import React from "react";
export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement(
      "h1",
      { className: "centered", key: 1 },
      "Result University"
    ),
    React.createElement(
      "h3",
      { className: "centered", style: { color: "#666" }, key: 2 },
      "Устроитесь на работу или вернем деньги, после прохождения полной программы."
    ),
  ]);
}
