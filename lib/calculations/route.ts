import { NextRequest, NextResponse } from "next/server";
import { calculateDoubleDeflection, DoubleDeflectionInput } from "../calculations/DoubleDeflectionGrille";
import { calculateLinearBarGrille, LinearBarGrilleInput } from "../calculations/LinearBarGrille";

export async function POST(request: NextRequest) {
  try {
    const { productType, payload } = await request.json();

    let result;

    switch (productType) {
      case "DoubleDeflection":
        // Validate payload (optional)
        // You might want to validate here before casting
        result = calculateDoubleDeflection(payload as DoubleDeflectionInput);
        break;

      case "LinearBarGrille":
        result = calculateLinearBarGrille(payload as LinearBarGrilleInput);
        break;

      default:
        return NextResponse.json({ error: "Unknown product type" }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid request or calculation failed" }, { status: 400 });
    
  }
}
