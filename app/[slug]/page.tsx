import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { slug: string } }) {
  const design = await prisma.design.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (design?.slug !== params.slug) notFound();
  return (
    <div>
      <h1>{design.slug}</h1>
      <img src={design.image_url || ""} alt={design.slug} />
      <a href={design.design_url as string}>unduh</a>
    </div>
  );
}
