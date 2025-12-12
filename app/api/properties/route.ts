import { type NextRequest, NextResponse } from "next/server";
import properties from "@/data/properties.json";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    if (page < 1 || limit < 1) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid pagination parameters: page must be >= 1 and limit must be >= 1",
        },
        { status: 400 },
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalProperties = properties.length;
    const totalPages = Math.ceil(totalProperties / limit);

    if (page > totalPages && totalProperties > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Page ${page} exceeds total pages ${totalPages}`,
        },
        { status: 404 },
      );
    }

    const paginatedProperties = properties.slice(startIndex, endIndex);

    return NextResponse.json(
      {
        success: true,
        data: paginatedProperties,
        pagination: {
          currentPage: page,
          totalPages,
          totalProperties,
          propertiesPerPage: limit,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
