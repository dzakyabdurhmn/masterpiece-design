import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Page() {
  const designs = await prisma.design.findMany();
  return (
    <div className="flex">
      {designs.map((design, index) => (
        <a href={design.slug} className="bg-red-500 flex flex-col" key={index + 1}>
          {/* <img src={design.image_url} alt={design.name} /> */}

          <h1 className="flex flex-col">{design.name}</h1>
        </a> // Render content for each design
      ))}
    </div>
  );
}
