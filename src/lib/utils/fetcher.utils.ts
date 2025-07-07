import { ResponseType } from "@/shared/shared.types";

type FetchArgType = {
  url: URL | string;
  options?: RequestInit;
};

export const fetcherHelper = async <T>({
  url,
  options = {},
}: FetchArgType): Promise<ResponseType<T>> => {
  const res = await fetch(url, {
    cache: "no-store",
    ...options,
  });

  const data = await res.json();

  return data;
};
