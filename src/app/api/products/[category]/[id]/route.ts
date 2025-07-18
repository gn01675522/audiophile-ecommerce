import { NextResponse, NextRequest } from "next/server";

import { productsDummyData } from "@/data/data.dummy";

type Params = { params: { id: string } };

export const GET = async (req: NextRequest, context: Params) => {
  const { id } = context.params;

  try {
    const product = productsDummyData.find(
      (product) => product.id === Number(id)
    );

    if (!product) {
      return NextResponse.json(
        {
          result: {},
          success: true,
          count: 0,
          message: `Cannot find any product by ${id}`,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        result: product,
        success: true,
        count: product ? 1 : 0,
      },
      { status: 200 }
    );
  } catch (e) {
    console.log("Server Error - /products/[category]/[id]/GET：", e);

    return NextResponse.json(
      { success: false, error: `Internal Server Error: ${e}` },
      { status: 500 }
    );
  }
};
