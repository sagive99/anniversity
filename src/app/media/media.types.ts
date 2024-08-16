export interface MediaContent {
  year: number;
  title: string;
  imageUrl: string;
  description?: string;
}

export const medias = [
  {
    year: 1964,
    title: '!חתונה',
    imageUrl: 'wedding.jpg',
    description:
      '!היום המאושר בחייכם <br>\
    ...תחילת הדרך, כמה אושר וחוויות מחכות',
  },
  {
    year: 1970,
    title: '!סיגלית בת שנה',
    imageUrl: 'sigalite1.jpg',
    description:
      '!הבת הבכורה כבר בת שנה<br>\
    !איזה מאורע ואיזו חגיגה',
  },
  {
    year: 2024,
    title: '!שנות נישואין 90',
    imageUrl: '',
    description: 'תחילת הדרך, כמה אושר וחוויות מחכות... !היום המאושר בחייכם',
  },
  {
    year: 2024,
    title: '!שנות נישואין 100',
    imageUrl: '',
    description: 'תחילת הדרך, כמה אושר וחוויות מחכות... !היום המאושר בחייכם',
  },
  {
    year: 2024,
    title: '!שנות נישואין 600',
    imageUrl: '',
    description: 'תחילת הדרך, כמה אושר וחוויות מחכות... !היום המאושר בחייכם',
  },
  {
    year: 2014,
    title: '!50 שנות נישואין',
    imageUrl: '',
    description: '...עדיין מרגיש כאילו זה היה אתמול',
  },
  {
    year: 2020,
    title: '!חגיגות 80 לסבתא',
    imageUrl: 'grandmotherEighty.jpg',
    description: '?איזה חגיגות... ומי זה הזוג הזה שמככב',
  },
  {
    year: 2024,
    title: '!שנות נישואין 60',
    imageUrl: '',
    description:
      '...קטע, עדיין חסרה תמונה<br>\
   אז בקיצור, אני מאחל לכולנו זוגיות ארוכה ומאושרת כמו שלכם<br>\
   ,מאחל לכם עוד המון שנים של אושר, נחת<br>\
  !בריאות ואהבה\
   <br>!אוהב אתכם המון, שגיב',
  },
];
