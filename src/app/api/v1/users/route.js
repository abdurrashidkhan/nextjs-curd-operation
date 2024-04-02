import connectMongodb from "@/libs/mongodb";
import usersModels from "@/models/user.schema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userName, userEmail } = await request.json();
  await connectMongodb();
  await usersModels.create({ userName, userEmail });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}
// get all users
export async function GET(req) {
  await connectMongodb();
  const users = await usersModels.find();
  return NextResponse.json(
    { data: users },
    { status: 200 },
    { message: "Get All User Info" }
  );
}
