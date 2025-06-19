"use client";
import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {}, []);

  return { data, isLoading, error };
};
