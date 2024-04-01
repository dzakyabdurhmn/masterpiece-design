import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function page() {
  async function addItemToList() {
    "use server";
  }

  return (
    <div>
      <form></form>
    </div>
  );
}

export default page;
