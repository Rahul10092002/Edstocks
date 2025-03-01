// src/app/api/suppliers/route.ts
import { NextResponse } from "next/server";
import Supplier from "../../../models/Supplier";
import dbConnect from "@/app/utils/dbconnect";

export async function GET() {
  await dbConnect();
  try {
    const suppliers = await Supplier.find({});
    return NextResponse.json({ success: true, data: suppliers });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const data = await request.json();
    const supplier = await Supplier.create(data);
    return NextResponse.json({ success: true, data: supplier });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
