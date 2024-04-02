import React from "react";

function Team() {
  return (
    <>
      <div>
        <div>
          <h3 className="text-4xl text-center font-semibold">Whatever UIkit production team</h3>
          <p className="text-sm text-center mt-3">we share our production team profile</p>
        </div>
        <div className="flex items-center gap-20 mt-16 justify-center">
          <div className="w-60 h-72 hover:scale-105 duration-300 rounded-3xl border"></div>
          <div className="w-60 h-72 hover:scale-105 duration-300 rounded-3xl border"></div>
          <div className="w-60 h-72 hover:scale-105 duration-300 rounded-3xl border"></div>
          <div className="w-60 h-72 hover:scale-105 duration-300 rounded-3xl border"></div>
          <div className="w-60 h-72 hover:scale-105 duration-300 rounded-3xl border"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
