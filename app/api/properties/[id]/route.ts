import { type NextRequest, NextResponse } from "next/server";
import properties from "@/data/properties.json";
import type { Property } from "@/schemas/property";

type ApiError = {
  success: false;
  message: string;
};

function getSimilarProperties(
  currentProperty: Property,
  allProperties: Property[],
): Property[] {
  const otherProperties = allProperties.filter(
    (prop) => prop.id !== currentProperty.id,
  );
  const shuffled = otherProperties.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, 3);
}

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/properties/[id]">,
) {
  try {
    const { id } = await ctx.params;

    const property = properties.find((prop) => prop.id === id);

    if (!property) {
      return NextResponse.json(
        {
          success: false,
          message: `No property found with id: ${id}`,
        } as ApiError,
        { status: 404 },
      );
    }

    const similarProperties = getSimilarProperties(property, properties);

    return NextResponse.json(
      {
        success: true,
        data: {
          property,
          similarProperties,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch property details",
      } as ApiError,
      { status: 500 },
    );
  }
}
