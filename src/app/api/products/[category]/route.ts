import { NextResponse } from "next/server";

import { productsDummyData } from "@/data/data.dummy";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ category: string }> }
) => {
  const { category } = await params;

  try {
    const products = productsDummyData.filter(
      (product) => product.category === category
    );

    if (!products) {
      return NextResponse.json(
        {
          result: [],
          success: true,
          count: 0,
          message: `Cannot find any products by ${category}`,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        result: products,
        success: true,
        count: products?.length,
      },
      { status: 200 }
    );
  } catch (e) {
    console.log("Server Error - /products/[category]/GET：", e);

    return NextResponse.json(
      { error: `Internal Server Error: ${e}` },
      { status: 500 }
    );
  }
};
