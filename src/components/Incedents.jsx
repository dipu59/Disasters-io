import React from "react";
import Dashboard from "./Dashboard";
import { Plus } from "lucide-react";

function Incedents() {
    const click = () => {
        console.log("you Clicked The Incident Button")
    }
  return (
    <section>
      <Dashboard titleText="Incedents" Icon={Plus} buttonText=" New Incident" disc="Home - Incedents" onClick={click} />
    </section>
  );
}

export default Incedents;
