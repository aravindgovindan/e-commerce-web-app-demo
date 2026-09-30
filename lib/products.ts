export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'daily-tonic',
    name: 'Daily Tonic',
    description: 'A bright, plant-powered reset for your everyday rhythm.',
    priceInCents: 3800,
    images: ['/verdant-tonic.png'],
  },
]

export const FEATURED_PRODUCT = PRODUCTS[0]

export function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceInCents / 100)
}

export function getProduct(productId: string) {
  return PRODUCTS.find((product) => product.id === productId)
}

export function getProductOrThrow(productId: string) {
  const product = getProduct(productId)
  if (!product) throw new Error(`Product with id "${productId}" not found`)
  return product
}

export const checkoutProduct = FEATURED_PRODUCT
