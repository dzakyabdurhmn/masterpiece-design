import { PrismaClient } from "@prisma/client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const prisma = new PrismaClient();

const supabase = createServerComponentClient({ cookies });

export default async function Page() {
  const designs = await prisma.design.findMany();

  return (
    <div className="flex flex-col">
      {/* @ts-ignore */}
      <div className="flex space-x-4">
        {designs.map((design, index) => (
          <a
            href={design.slug}
            className="bg-red-500 flex flex-col border-2 "
            key={index + 1}
          >
            <img
              width="100"
              height="100"
              src={design.image_url || ""}
              alt={design.name as string}
            />
            <h1 className="flex flex-col">{design.name}</h1>
            <p className="flex flex-col">{design.design_url}</p>
          </a> // Render content for each design
        ))}
      </div>
    </div>
  );
}
