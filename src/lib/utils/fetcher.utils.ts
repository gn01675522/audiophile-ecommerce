import { ResponseType } from "@/shared/shared.types";

type FetchArgType = {
  url: URL | string;
  options?: RequestInit;
};

export const fetcherHelper = async <T>({
  url,
  options = {},
}: FetchArgType): Promise<ResponseType<T>> => {
  try {
    const res = await fetch(url, {
      cache: "no-store",
      ...options,
    });

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    const data: ResponseType<T> = await res.json();

    return data;
  } catch (e) {
    console.error("Fetcher Error:", e);
    throw e;
  }
};
