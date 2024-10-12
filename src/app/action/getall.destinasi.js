"use server"
import { prisma } from "@/utils/prisma";
export async function GetDestinasi () {
    const findDestinasi=await prisma.destinasi.findMany({
        orderBy:{
            id:'desc'
        }
    })
return findDestinasi
revalidatePath("/");
console.log(findDestinasi)
}