import { Filial } from "@/types"

interface BranchData {
    id: number
    title: string
    items: string[]
}

export const branchData: BranchData[] = [
    {
        id: 1,
        title: 'Abituriyent hazırlığı (8,9,10,11-ci siniflər üçün)',
        items: [
            'Blok fənləri (şagirdin seçdiyi ixtisas qrupu üzrə)',
            'Buraxılış fənləri(Ana dili, Riyaziyyat, Xarici dil)',
            'Azərbaycan və Rus bölmələri üzrə'
        ]
    },
    {
        id: 2,
        title: 'Təkmilləşdirmə hazırlığı (5,6,7-ci siniflər üçün)',
        items: [
            'Ana dili, Riyaziyyat, Xarici dil',
            'Azərbaycan və Rus bölmələri üzrə'
        ]
    },
    {
        id: 3,
        title: 'Lisey hazırlığı (4,5,6,7-ci siniflər üçün)',
        items: [
            'Bütün liseylərə hazırlıq',
            'Ana dili, Riyaziyyat, Məntiq',
            'Azərbaycan və Rus bölmələri üzrə'
        ]
    },
    {
        id: 4,
        title: 'Məktəbəqədər hazırlıq (4,5 yaşlılar üçün)',
        items: [
            'Bütün liseylərə hazırlıq',
            'Ana dili, Riyaziyyat, Məntiq',
            'Azərbaycan və Rus bölmələri üzrə'
        ]
    },
    {
        id: 5,
        title: 'İbtidai sinif hazırlığı (1,2,3,4-cü siniflər üçün)',
        items: [
            'Fənlər üzrə hazırlıq',
            'Ev tapşırığı paketi',
            'Azərbaycan və Rus bölmələri üzrə'
        ]
    },
    {
        id: 6,
        title: 'Xarici dil dərsləri (Bütün yaş qrupları üçün)',
        items: [
            'İngilis və Rus dilləri'
        ]
    },
    {
        id: 7,
        title: 'Rəsm dərsləri (Bütün yaş qrupları üçün)',
        items: [
            'Ətraflı məlumat tezliklə əlavə olunacaq'
        ]
    },
    {
        id: 8,
        title: 'Rəqs dərsləri (Bütün yaş qrupları üçün)',
        items: [
            'Ətraflı məlumat tezliklə əlavə olunacaq'
        ]
    },
    {
        id: 9,
        title: 'Şahmat dərsləri (Bütün yaş qrupları üçün)',
        items: [
            'Ətraflı məlumat tezliklə əlavə olunacaq'
        ]
    },
    {
        id: 10,
        title: 'Psixoloji xidmət (Uşaqlar və yeniyetmələr üçün)',
        items: [
            'Ətraflı məlumat tezliklə əlavə olunacaq'
        ]
    },
    {
        id: 11,
        title: 'Ofis Proqramları',
        items: [
            'Ətraflı məlumat tezliklə əlavə olunacaq'
        ]
    }
]


export const branches: Filial[] = [
    {
        slug: '28-may',
        title: '28 May',
        unvan: 'Nizami Küç. 203B, Af Business House 5.ci mərtəbə',
        poct: '89 saylı',
        telefon: ['010 310 33 43', '070 710 33 43'],
        city: 'Bakı, Azərbaycan',
        fasile: '13:00',
        index: 'Az 1089',
        images: [
            {
                id: 1, image: '/filial/28may/image1.png', width: 720, height: 1280
            },
            {
                id: 2, image: '/filial/28may/image2.jpeg', width: 720, height: 1280
            },
            {
                id: 3, image: '/filial/28may/image3.jpeg', width: 720, height: 1280
            }
        ],
        // mapUrl: 'https://maps.app.goo.gl/KxCAPskBedkLpgLh7',
        lat: 40.37739918590648,
        lng: 49.85407045458089

    },
    {
        slug: 'Elmler',
        title: 'Elmlər',
        unvan: '30a Zahid Xəlilov Küçəsi, Bakı',
        telefon: ['077 537 24 51'],
        city: 'Bakı, Azərbaycan',
        fasile: '13:00',
        images: [
            {
                id: 1, image: '/filial/elmler/image.png', width: 720, height: 1280
            },
            {
                id: 2, image: '/filial/elmler/image2.jpeg', width: 720, height: 1280
            },
            {
                id: 3, image: '/filial/elmler/image3.webp', width: 1176, height: 1020
            }
        ],

        lat: 40.38034692608842,
        lng: 49.811409197976914
    },
    {
        slug: 'Hovsan',
        title: 'Hövsan',
        unvan: 'Hövsan qəsəbəsi',
        poct: '89 saylı',
        telefon: ['070-957-58-78', '070-710-63-43'],
        city: 'Bakı, Azərbaycan',
        fasile: '13:00',
        index: 'Az 1089',
        images: [
            {
                id: 1, image: '/filial/hovsan/img1.webp', width: 1600, height: 1204
            },
            {
                id: 2, image: '/filial/hovsan/img2.webp', width: 1600, height: 1204
            },
            {
                id: 3, image: '/filial/hovsan/img3.webp', width: 1600, height: 1204
            }
        ],
        lat: 40.37739918590648,
        lng: 49.85407045458089
    },
    {
        slug: 'Gunesli',
        title: 'Günəşli',
        unvan: 'Suraxanı rayonu, Yeni Günəşli qəsəbəsi, Samir Cəfərov küçəsi , 33-cü polis bölməsi ilə üzbəüz',
        poct: '131 saylı',
        telefon: ['070 678 55 75', '012-478-55-75'],
        city: 'Bakı, Azərbaycan',
        fasile: '13:00',
        index: 'Az 1131',
        images: [
            {
                id: 1, image: '/filial/gunesli/img1.png', width: 4032, height: 3024
            },
            {
                id: 2, image: '/filial/gunesli/img2.png', width: 4160, height: 3120
            },
            {
                id: 3, image: '/filial/gunesli/img3.png', width: 442, height: 507
            }
        ],
        lat: 40.38674284680699,
        lng: 49.979980910521675
    }

]