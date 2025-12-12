import type { PaginatedProperties } from "@/schemas/property";

export const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

type ApiError = {
  success: false;
  message: string;
  status?: number;
};

type ApiSuccess<T> = {
  success: true;
  data: T;
};

export const getProperties = async (
  searchParams?: string,
): Promise<ApiSuccess<PaginatedProperties> | ApiError> => {
  try {
    const url = `${baseUrl}/api/properties${searchParams ? `?${searchParams}` : ""}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to fetch properties",
        status: response.status,
      };
    }

    const properties = (await response.json()) as PaginatedProperties;
    return {
      success: true,
      data: properties,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error",
    };
  }
};
