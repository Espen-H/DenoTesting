import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Number 1",
    description: "First in line",
    age: 5,
  },
  {
    id: "2",
    name: "Number 2",
    description: "Second in line",
    age: 10,
  },
  {
    id: "3",
    name: "Number 3",
    description: "Last in line",
    age: 15,
  },
];

// @desc     Get all products
// @route    GET /api/products
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc     Get single product
// @route    GET /api/products/:id
const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No product found",
    };
  }
};

// @desc     add product
// @route    Post /api/products
const addProduct = ({ response }: { response: any }) => {
  response.body = "add";
};

// @desc     Update product
// @route    PUT /api/products/:id
const updateProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  response.body = "update";
};

// @desc     Delete product
// @route    DELETE /api/products/:id
const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  response.body = "delete";
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
