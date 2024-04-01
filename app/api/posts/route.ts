import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Create a single instance

export async function GET() {
  try {
    const res = await prisma.design.findMany();
    return Response.json(res);
  } catch (error) {
    console.error("Error fetching designs:", error);
    return Response.json({ error: error }, { status: 500 }); // Handle error with a generic message and status code
  }
}
