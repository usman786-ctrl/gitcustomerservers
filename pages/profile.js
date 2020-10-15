import { Context } from "../context";
import React, {  useContext } from "react";

import { Context as abc } from "../context";



export default function profile() {
  const { state, dispatch } = useContext(abc);

  return (
    <div>
      {
        JSON.stringify(state,null,4)
      }
    </div>
  )
}
