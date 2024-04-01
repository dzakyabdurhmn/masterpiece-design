"use client";
import type { NextPage } from "next";
import { ChangeEvent } from "react";

// import supabase from "../utils/supabase";

import { createClient } from "@supabase/supabase-js";

const Home: NextPage = () => {
  const supabase = createClient(
    "https://klqcuwdyuzsyciardrny.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtscWN1d2R5dXpzeWNpYXJkcm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3ODMwNDcsImV4cCI6MjAyNjM1OTA0N30.tvNBw1prY4jgUK_vvQupemZFJ06dNJymIHYEGmDCLO4"
  );

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("design_image")
      .upload("public/" + file?.name, file as File);

    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };

  // We have implemented onChange in input 👇

  return (
    <div className="px-5 py-5 ">
        
      <input
        type="file"
        accept="image/*"
        id="file_input"
        onChange={(e) => {
          handleUpload(e); // 👈 this will trigger when user selects the file.
        }}
      />
    </div>
  );
};

export default Home;
