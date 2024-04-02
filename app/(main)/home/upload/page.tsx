import React from "react";
import Uploader from "./uploadfile";
import { login } from "./submit";

const page = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button formAction={login} type="submit">
          Login
        </button>
      </form>
      {/* @ts-ignore */}
      <Uploader key={"1"} />
    </div>
  );
};

export default page;
