export interface Movie {
    id: number;
    title: string;
    genre: string;
    year: number;
    duration: number;
    imdb: number;
    poster: string;
    description: string;
    type: "movie";
}

export interface Series {
    id: number;
    title: string;
    genre: string;
    year: number;
    seasons: number;
    episodes: number;
    imdb: number;
    poster: string;
    description: string;
    type: "series";
}

export const movies: Movie[] = [
    {
        id: 1,
        title: "Xotiramdan o'chgan sevgi",
        genre: "Drama",
        year: 2025,
        duration: 106,
        imdb: 7.5,
        poster: "/posters/1.jpg",
        description:
            "Ikki yosh insonning to'qnashuvi va unutilmas muhabbat hikoyasi. Hayot ularni bir-biridan ajratgan bo'lsa-da, xotira hech qachon o'chmaydi.",
        type: "movie",
    },
    {
        id: 2,
        title: "Shafqat / Kechirilmas qatl",
        genre: "Jangari",
        year: 2026,
        duration: 99,
        imdb: 6.1,
        poster: "/posters/2.jpg",
        description:
            "Bir detektiv adolat izlab, qonunning chegaralarini sinab ko'radi. Kechirilmas qatl — bu shafqatning boshqacha shakli.",
        type: "movie",
    },
    {
        id: 3,
        title: "Egizaklar / Ikki qiyofa",
        genre: "Komediya",
        year: 2014,
        duration: 160,
        imdb: 1.7,
        poster: "/posters/3.jpg",
        description:
            "Bir-birini bilmagan egizaklar tasodifan uchrashganda, ikki xil hayot birlashib, ajoyib voqealar boshlanadi.",
        type: "movie",
    },
    {
        id: 4,
        title: "Qizil kapitan",
        genre: "Jangari",
        year: 2019,
        duration: 155,
        imdb: 7.2,
        poster: "/posters/4.jpg",
        description:
            "Dengiz qaroqchilariga qarshi kurashgan kapitan va uning jasorati haqidagi epik sarguzasht.",
        type: "movie",
    },
    {
        id: 5,
        title: "Mutaxassis",
        genre: "Jangari",
        year: 2025,
        duration: 212,
        imdb: 8.4,
        poster: "/posters/5.jpg",
        description:
            "Dunyoning eng yaxshi mutaxassisi eng murakkab vazifani bajarish uchun tanlanadi. Ammo bu safar narxi — uning o'zi.",
        type: "movie",
    },
    {
        id: 6,
        title: "Intiqom alangasi",
        genre: "Jangari",
        year: 2026,
        duration: 91,
        imdb: 4.1,
        poster: "/posters/6.jpg",
        description:
            "Oilasini yo'qotgan erkak o'ch olish yo'lida barcha to'siqlarni yengib o'tishga qaror qiladi.",
        type: "movie",
    },
    {
        id: 7,
        title: "Kimni sevishim kerak? 2",
        genre: "Drama",
        year: 2023,
        duration: 142,
        imdb: 4.7,
        poster: "/posters/7.jpg",
        description:
            "Birinchi qismdan keyin to'rt yil o'tdi. Endi qahramonlar yangi imtihonlarga duch keladi va sevgi yangi sinovdan o'tadi.",
        type: "movie",
    },
    {
        id: 8,
        title: "Sevgiga tobelik",
        genre: "Drama",
        year: 2024,
        duration: 97,
        imdb: 5.5,
        poster: "/posters/8.jpg",
        description:
            "Ikkala qalb o'rtasidagi tortishish — bu faqat sevgi emas, tobelik va erkinlik o'rtasidagi kurash.",
        type: "movie",
    },
    {
        id: 9,
        title: "Bugoniya",
        genre: "Komediya",
        year: 2025,
        duration: 119,
        imdb: 7.4,
        poster: "/posters/9.jpg",
        description:
            "Bir kunda sodir bo'ladigan g'alati hodisalar zanjiri — bir shaharning bir kunlik hayoti.",
        type: "movie",
    },
];

export const series: Series[] = [
    {
        id: 101,
        title: "Taqdir Sinovlari",
        genre: "Drama",
        year: 2024,
        seasons: 2,
        episodes: 32,
        imdb: 8.1,
        poster: "/posters/s1.jpg",
        description:
            "Bir oilaning avlodlar davomida kechirgan sinovlari va g'alabalari haqidagi chuqur drama seriali.",
        type: "series",
    },
    {
        id: 102,
        title: "Yashirin Shahar",
        genre: "Triller",
        year: 2023,
        seasons: 1,
        episodes: 12,
        imdb: 7.8,
        poster: "/posters/s2.jpg",
        description:
            "Yashirin shahar ostidagi sirli hayot va uni kashf etish uchun kurashayotgan bir guruh odamlar.",
        type: "series",
    },
    {
        id: 103,
        title: "Ko'z Yoshlari Ortida",
        genre: "Melodrama",
        year: 2025,
        seasons: 3,
        episodes: 48,
        imdb: 6.9,
        poster: "/posters/s3.jpg",
        description:
            "Sevgi, xiyonat va kechirish haqidagi hissiyotli serial. Har bir ko'z yoshi yangi hikoya boshlaydi.",
        type: "series",
    },
    {
        id: 104,
        title: "Jangovar Tabib",
        genre: "Jangari",
        year: 2022,
        seasons: 2,
        episodes: 24,
        imdb: 7.3,
        poster: "/posters/s4.jpg",
        description:
            "Urush maydonida ham, shifoxonada ham kurashuvchi tabib qahramonning hayoti asosidagi serial.",
        type: "series",
    },
    {
        id: 105,
        title: "Raqs va Armoni",
        genre: "Musiqa",
        year: 2024,
        seasons: 1,
        episodes: 16,
        imdb: 7.0,
        poster: "/posters/s5.jpg",
        description:
            "Musiqa va raqs orqali o'z o'rnini topishga harakat qilayotgan yosh iste'dodning yo'li.",
        type: "series",
    },
    {
        id: 106,
        title: "Qora Nur",
        genre: "Fantastika",
        year: 2026,
        seasons: 1,
        episodes: 10,
        imdb: 8.6,
        poster: "/posters/s6.jpg",
        description:
            "Kelajak dunyosida qorong'ulik va yorug'lik o'rtasidagi kurashni aks ettiruvchi epik serial.",
        type: "series",
    },
    {
        id: 107,
        title: "Ota Merosxo'r",
        genre: "Komediya",
        year: 2023,
        seasons: 4,
        episodes: 60,
        imdb: 6.5,
        poster: "/posters/s7.jpg",
        description:
            "Katta oilada merosni taqsimlash masalasi qanday kulgili va drama vaziyatlarga olib kelishi.",
        type: "series",
    },
    {
        id: 108,
        title: "Iz Qolmas",
        genre: "Detektiv",
        year: 2025,
        seasons: 2,
        episodes: 20,
        imdb: 7.7,
        poster: "/posters/s8.jpg",
        description:
            "Iz qoldirmaslik uchun tug'ilgan detektiv va har safar izni yo'qoladigan sirli jinoyatchi.",
        type: "series",
    },
    {
        id: 109,
        title: "Bahor Kelganda",
        genre: "Romantika",
        year: 2024,
        seasons: 1,
        episodes: 14,
        imdb: 6.2,
        poster: "/posters/s9.jpg",
        description:
            "Har bahor ikkita inson qaytadan uchrashadi. Lekin bu safar hamma narsa o'zgargan.",
        type: "series",
    },
  ];