import { HTTP_METHOD } from "next/dist/server/web/http";

import { ResponseType } from "@/shared/shared.types";

type FetchArgType = {
  url: URL | string;
  method: HTTP_METHOD;
  cache?: RequestCache;
};

export const fetcherHelper = async <T>({
  url,
  method,
  cache,
}: FetchArgType): Promise<ResponseType<T>> => {
  const res = await fetch(url, {
    method,
    cache: cache ? cache : "no-store",
  });

  const data = await res.json();

  return data;
};
