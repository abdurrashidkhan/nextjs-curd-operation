import connectMongodb from "@/libs/mongodb";
import usersModels from "@/models/user.schema";
import { NextResponse } from "next/server";
// update
export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongodb();
  await usersModels.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

// one user find
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongodb();
  const users = await usersModels.findOne({ _id: id });
  return NextResponse.json({ users }, { status: 200 });
}