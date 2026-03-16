
export type Locale = 'az' | 'en' | 'ru'
export interface FilialImage {
    id: number
    image: string
    width: number
    height: number
}

export interface Filial {
    slug: string
    title: {
        az: string
        en: string
        ru: string
    }
    unvan: {
        az: string
        en: string
        ru: string
    },
    poct?: string
    index?:string
    telefon: string[]
    city: {
        az: string
        en: string
        ru: string
    }
    fasile: string
    images: { id: number; image: string; width: number; height: number }[]
    lat: number
    lng: number
}

