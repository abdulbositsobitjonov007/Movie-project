export interface SingleGenreType {
    map(arg0: (el: SingleGenreType) => void): import("react").ReactNode
    id: string
    name_uz: string
    name_ru: string
    name_en: string
    slug: string
    icon: string
    is_active: boolean
    created_at: number
  }