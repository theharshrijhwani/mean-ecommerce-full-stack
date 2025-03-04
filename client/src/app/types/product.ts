export interface Product {
    id?: string,
    name: string,
    shortDescription: string,
    description: string,
    price: Number,
    discount: Number,
    images: string[],
    categoryId: string
}