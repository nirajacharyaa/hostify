import type { LoginFormValues, SignUpFormValues } from "@/schemas/auth";
import type { PaginatedProperties, PropertyResponse } from "@/schemas/property";

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

export const getProperty = async (
  id: string,
): Promise<ApiSuccess<PropertyResponse> | ApiError> => {
  try {
    const url = `${baseUrl}/api/properties/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to fetch properties",
        status: response.status,
      };
    }

    const properties = (await response.json()).data as PropertyResponse;
    console.log("in the api=======?", properties);
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

export const signUp = async (data: SignUpFormValues) => {
  try {
    const url = `${baseUrl}/api/signup`;
    const response = await fetch(url, {
      body: JSON.stringify(data),
      method: "POST",
    });
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to sign up",
        status: response.status,
      };
    }
    const user = await response.json();
    return {
      success: true,
      data: user,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const signIn = async (data: LoginFormValues) => {
  try {
    const url = `${baseUrl}/api/signin`;
    const response = await fetch(url, {
      body: JSON.stringify(data),
      method: "POST",
    });
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to sign in",
        status: response.status,
      };
    }
    const user = await response.json();
    return {
      success: true,
      data: user,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error",
    };
  }
};
