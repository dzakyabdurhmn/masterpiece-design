import { PrismaClient } from "@prisma/client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../database.types";
import { cookies } from "next/headers";
import Uufile from "./uploadfile";
const prisma = new PrismaClient();

const supabase = createServerComponentClient<Database>({ cookies });

export default async function Page() {
  const designs = await prisma.design.findMany();

  return (
    <div className="flex flex-col">
      {/* @ts-ignore */}
      <Uufile key={""} />
      <div>
        {designs.map((design, index) => (
          <a
            href={design.slug}
            className="bg-red-500 flex flex-col"
            key={index + 1}
          >
            {/* <img src={design.image_url || ""} alt={design.name as string} /> */}
            <h1 className="flex flex-col">{design.name}</h1>
          </a> // Render content for each design
        ))}
      </div>
    </div>
  );
}
