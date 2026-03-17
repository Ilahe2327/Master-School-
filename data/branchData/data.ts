import { Filial } from "@/types"

interface BranchData {
    id: number
    title: {
        az: string
        en: string
        ru: string
    }
    items: {
        az: string[]
        en: string[]
        ru: string[]
    }
}
export const branchData: BranchData[] = [
    {
        id: 1,
        title: {
            az: 'Abituriyent hazırlığı (8,9,10,11-ci siniflər üçün)',
            en: 'Entrance Preparation (Grades 8-11)',
            ru: 'Подготовка к поступлению (8-11 класс)'
        },
        items: {
            az: [
                'Blok fənləri (şagirdin seçdiyi ixtisas qrupu üzrə)',
                'Buraxılış fənləri (Ana dili, Riyaziyyat, Xarici dil)',
                'Azərbaycan və Rus bölmələri üzrə'
            ],
            en: [
                'Block subjects (according to student\'s chosen specialization)',
                'Final subjects (Native language, Math, Foreign language)',
                'Available for Azerbaijani and Russian sections'
            ],
            ru: [
                'Блочные предметы (по выбранной группе специальности)',
                'Выпускные предметы (Родной язык, Математика, Иностранный язык)',
                'Для азербайджанского и русского отделений'
            ]
        }
    },
    {
        id: 2,
        title: {
            az: 'Təkmilləşdirmə hazırlığı (5,6,7-ci siniflər üçün)',
            en: 'Improvement Preparation (Grades 5-7)',
            ru: 'Подготовка по усовершенствованию (5-7 класс)'
        },
        items: {
            az: ['Ana dili, Riyaziyyat, Xarici dil', 'Azərbaycan və Rus bölmələri üzrə'],
            en: ['Native language, Math, Foreign language', 'Available for Azerbaijani and Russian sections'],
            ru: ['Родной язык, Математика, Иностранный язык', 'Для азербайджанского и русского отделений']
        }
    },
    {
        id: 3,
        title: {
            az: 'Lisey hazırlığı (4,5,6,7-ci siniflər üçün)',
            en: 'Lyceum Preparation (Grades 4-7)',
            ru: 'Подготовка к лицее (4-7 класс)'
        },
        items: {
            az: ['Bütün liseylərə hazırlıq', 'Ana dili, Riyaziyyat, Məntiq', 'Azərbaycan və Rus bölmələri üzrə'],
            en: ['Preparation for all lyceums', 'Native language, Math, Logic', 'Available for Azerbaijani and Russian sections'],
            ru: ['Подготовка ко всем лицеям', 'Родной язык, Математика, Логика', 'Для азербайджанского и русского отделений']
        }
    },
    {
        id: 4,
        title: {
            az: 'Məktəbəqədər hazırlıq (4,5 yaşlılar üçün)',
            en: 'Preschool Preparation (Ages 4-5)',
            ru: 'Подготовка к школе (4-5 лет)'
        },
        items: {
            az: ['Bütün liseylərə hazırlıq', 'Ana dili, Riyaziyyat, Məntiq', 'Azərbaycan və Rus bölmələri üzrə'],
            en: ['Preparation for all lyceums', 'Native language, Math, Logic', 'Available for Azerbaijani and Russian sections'],
            ru: ['Подготовка ко всем лицеям', 'Родной язык, Математика, Логика', 'Для азербайджанского и русского отделений']
        }
    },
    {
        id: 5,
        title: {
            az: 'İbtidai sinif hazırlığı (1,2,3,4-cü siniflər üçün)',
            en: 'Primary Class Preparation (Grades 1-4)',
            ru: 'Подготовка к начальной школе (1-4 класс)'
        },
        items: {
            az: ['Fənlər üzrə hazırlıq', 'Ev tapşırığı paketi', 'Azərbaycan və Rus bölmələri üzrə'],
            en: ['Subject-based preparation', 'Homework package', 'Available for Azerbaijani and Russian sections'],
            ru: ['Подготовка по предметам', 'Пакет домашних заданий', 'Для азербайджанского и русского отделений']
        }
    },
    {
        id: 6,
        title: {
            az: 'Xarici dil dərsləri (Bütün yaş qrupları üçün)',
            en: 'Foreign Language Lessons (All Ages)',
            ru: 'Уроки иностранных языков (для всех возрастов)'
        },
        items: {
            az: ['İngilis və Rus dilləri'],
            en: ['English and Russian languages'],
            ru: ['Английский и русский языки']
        }
    },
    {
        id: 7,
        title: {
            az: 'Rəsm dərsləri (Bütün yaş qrupları üçün)',
            en: 'Drawing Lessons (All Ages)',
            ru: 'Уроки рисования (для всех возрастов)'
        },
        items: {
            az: ['Ətraflı məlumat tezliklə əlavə olunacaq'],
            en: ['Detailed information will be added soon'],
            ru: ['Подробная информация будет добавлена вскоре']
        }
    },
    {
        id: 8,
        title: {
            az: 'Rəqs dərsləri (Bütün yaş qrupları üçün)',
            en: 'Dance Lessons (All Ages)',
            ru: 'Уроки танцев (для всех возрастов)'
        },
        items: {
            az: ['Ətraflı məlumat tezliklə əlavə olunacaq'],
            en: ['Detailed information will be added soon'],
            ru: ['Подробная информация будет добавлена вскоре']
        }
    },
    {
        id: 9,
        title: {
            az: 'Şahmat dərsləri (Bütün yaş qrupları üçün)',
            en: 'Chess Lessons (All Ages)',
            ru: 'Уроки шахмат (для всех возрастов)'
        },
        items: {
            az: ['Ətraflı məlumat tezliklə əlavə olunacaq'],
            en: ['Detailed information will be added soon'],
            ru: ['Подробная информация будет добавлена вскоре']
        }
    },
    {
        id: 10,
        title: {
            az: 'Psixoloji xidmət (Uşaqlar və yeniyetmələr üçün)',
            en: 'Psychological Services (Children & Teenagers)',
            ru: 'Психологическая помощь (для детей и подростков)'
        },
        items: {
            az: ['Ətraflı məlumat tezliklə əlavə olunacaq'],
            en: ['Detailed information will be added soon'],
            ru: ['Подробная информация будет добавлена вскоре']
        }
    },
    {
        id: 11,
        title: {
            az: 'Ofis Proqramları',
            en: 'Office Programs',
            ru: 'Офисные программы'
        },
        items: {
            az: ['Ətraflı məlumat tezliklə əlavə olunacaq'],
            en: ['Detailed information will be added soon'],
            ru: ['Подробная информация будет добавлена вскоре']
        }
    }
];


export const branches: Filial[] = [

    {
        slug: '28-may',
        title: { az: '28 May', en: 'May 28', ru: '28 Мая' },
        unvan: {
            az: 'Nizami Küç. 203B, Af Business House 5.ci mərtəbə',
            en: 'Nizami St. 203B, Af Business House 5th floor',
            ru: 'ул. Низами 203B, Af Business House 5-й этаж'
        },
        poct: '89 saylı',
        telefon: ['010 310 33 43', '070 710 33 43'],
        city: { az: 'Bakı, Azərbaycan', en: 'Baku, Azerbaijan', ru: 'Баку, Азербайджан' },
        fasile: '13:00',
        index: 'Az 1089',
        images: [
            { id: 1, image: '/filial/28may/image1.png', width: 720, height: 1280 },
            { id: 2, image: '/filial/28may/image2.jpeg', width: 720, height: 1280 },
            { id: 3, image: '/filial/28may/image3.jpeg', width: 720, height: 1280 }
        ],
        lat: 40.37739918590648,
        lng: 49.85407045458089,
    },
    {
        slug: 'Elmler',
        title: { az: 'Elmlər', en: 'Elmler', ru: 'Элмлер' },
        unvan: {
            az: '30a Zahid Xəlilov Küçəsi, Bakı',
            en: '30a Zahid Khalilov St., Baku',
            ru: 'ул. Захид Хелилов 30a, Баку'
        },
        telefon: ['077 537 24 51'],
        city: { az: 'Bakı, Azərbaycan', en: 'Baku, Azerbaijan', ru: 'Баку, Азербайджан' },
        fasile: '13:00',
        images: [
            { id: 1, image: '/filial/elmler/image.png', width: 720, height: 1280 },
            { id: 2, image: '/filial/elmler/image2.jpeg', width: 720, height: 1280 },
            { id: 3, image: '/filial/elmler/image3.webp', width: 1176, height: 1020 }
        ],
        lat: 40.38034692608842,
        lng: 49.811409197976914
    },
    {
        slug: 'hovsan',
        title: { az: 'Hövsan', en: 'Hovsan', ru: 'Ховсан' },
        unvan: {
            az: 'Hövsan qəsəbəsi',
            en: 'Hovsan settlement',
            ru: 'поселок Ховсан'
        },
        poct: '89 saylı',
        telefon: ['070-957-58-78', '070-710-63-43'],
        city: { az: 'Bakı, Azərbaycan', en: 'Baku, Azerbaijan', ru: 'Баку, Азербайджан' },
        fasile: '13:00',
        index: 'Az 1089',
        images: [
            { id: 1, image: '/filial/hovsan/img1.webp', width: 1600, height: 1204 },
            { id: 2, image: '/filial/hovsan/img2.webp', width: 1600, height: 1204 },
            { id: 3, image: '/filial/hovsan/img3.webp', width: 1600, height: 1204 }
        ],
        lat: 40.37739918590648,
        lng: 49.85407045458089
    },
    {
        slug: 'gunesli',
        title: { az: 'Günəşli', en: 'Gunesli', ru: 'Гюнешли' },
        unvan: {
            az: 'Suraxanı rayonu, Yeni Günəşli qəsəbəsi, Samir Cəfərov küçəsi , 33-cü polis bölməsi ilə üzbəüz',
            en: 'Surakhani district, Yeni Gunesli settlement, Samir Jafarov St., opposite 33rd police station',
            ru: 'район Сурахани, поселок Yeni Gunesli, ул. Самир Джафаров, напротив 33-го участка полиции'
        },
        poct: '131 saylı',
        telefon: ['070 678 55 75', '012-478-55-75'],
        city: { az: 'Bakı, Azərbaycan', en: 'Baku, Azerbaijan', ru: 'Баку, Азербайджан' },
        fasile: '13:00',
        index: 'Az 1131',
        images: [
            { id: 1, image: '/filial/gunesli/img1.png', width: 4032, height: 3024 },
            { id: 2, image: '/filial/gunesli/img2.png', width: 4160, height: 3120 },
            { id: 3, image: '/filial/gunesli/img3.png', width: 442, height: 507 }
        ],
        lat: 40.38674284680699,
        lng: 49.979980910521675
    }
]