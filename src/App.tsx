import * as React from "react";
import First from "./components/First";


export default () => {
  return (
    <div>
      <First name="This is the first Component" age='23' college="HHS" />
      <First name="This is the second Component" />
    </div>

  );
};
