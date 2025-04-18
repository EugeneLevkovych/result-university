import { differences } from "../data";
import Button from "./button/Button";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  //  let tabContent = null

  //   if (contentType) {
  //     tabContent = <p>{differences[contentType]}</p>
  //   }else{
  //     tabContent = <p>Press the button</p>
  //   }

  return (
    <section>
      <h3>Выберите, что вам подходит</h3>
      <Button
        isActive={contentType === "way"}
        onMyClick={() => handleClick("way")}
      >
        Approach
      </Button>
      <Button
        isActive={contentType === "easy"}
        onMyClick={() => handleClick("easy")}
      >
        Accessibility
      </Button>
      <Button
        isActive={contentType === "program"}
        onMyClick={() => handleClick("program")}
      >
        Concentration
      </Button>

      {/* { contentType ? <p>{differences[contentType]}</p> : <p>Press the button</p>} */}

      {/* {!contentType ? <p>'Press the button'</p> : null}
        {contentType ? <p>{differences[contentType]}</p> : null} */}

      {!contentType && <p>'Press the button'</p>}
      {contentType && <p>{differences[contentType]}</p>}

      {/* {tabContent} */}
    </section>
  );
}
