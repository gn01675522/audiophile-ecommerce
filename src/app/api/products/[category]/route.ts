import { NextResponse, NextRequest } from "next/server";

import { productsDummyData } from "@/data/data.dummy";

type Params = { params: Promise<{ category: string }> };

export const GET = async (req: NextRequest, { params }: Params) => {
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
      { success: false, error: `Internal Server Error: ${e}` },
      { status: 500 }
    );
  }
};
