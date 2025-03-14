import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";



export async function PUT(
  req: NextRequest,
  
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      const { completed } = await req.json();
      console.log(completed);
      
  }

  // try {
  //   const todoId = params.id;

  //   const todo = await prisma.todo.findUnique({
  //     where: { id: todoId },
  //   });

  //   if (!todo) {
  //     return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  //   }

  //   if (todo.userId !== userId) {
  //     return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  //   }

  //   const updatedTodo = await prisma.todo.update({
  //     where: { id: todoId },
  //     data: { completed },
  //   });

  //   return NextResponse.json(updatedTodo);
  // } catch (error) {
  //   return NextResponse.json(
  //     { error: `Internal Server Error,${error}` },
  //     { status: 500 }
  //   );
  // }
}

export async function DELETE(
  req: NextRequest
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    console.log(req);
    
  }

  // try {
  //   const todoId = params.id;

  //   const todo = await prisma.todo.findUnique({
  //     where: { id: todoId },
  //   });

  //   if (!todo) {
  //     return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  //   }

  //   if (todo.userId !== userId) {
  //     return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  //   }

  //   await prisma.todo.delete({
  //     where: { id: todoId },
  //   });

  //   return NextResponse.json({ message: "Todo deleted successfully" });
  // } catch (error) {
  //   return NextResponse.json(
  //     { error: `Internal Server Error,${error}` },
  //     { status: 500 }
  //   );
  // }
}