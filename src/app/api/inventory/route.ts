// src/app/api/inventory/route.ts
import { NextResponse } from "next/server";
import InventoryItem from "../../../models/InventoryItem";
import dbConnect from "@/app/utils/dbconnect";

export async function GET() {
  await dbConnect();
  try {
    const items = await InventoryItem.find({});
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const data = await request.json();
    const item = await InventoryItem.create(data);
    return NextResponse.json({ success: true, data: item });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
