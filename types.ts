export interface FilialImage {
    id: number
    image: string
    width: number
    height: number
}

export interface Filial {
    slug: string
    title: string
    unvan: string
    poct?: string
    telefon: string[]
    city: string
    fasile: string
    index?: string
    images: FilialImage[]
    mapUrl?: string
    lat:number
    lng:number
}
