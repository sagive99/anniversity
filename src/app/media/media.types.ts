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
    title: 'סיגלית בת שנה',
    imageUrl: 'sigalite1.jpg',
    description:
      '!הבת הבכורה כבר בת שנה<br>\
    !איזה מאורע ואיזו חגיגה',
  },
  {
    year: 1976,
    title: 'ברית של ניסן',
    imageUrl: 'nissanBorn.jpg',
    description: '!הברית של הבן היחיד',
  },
  {
    year: 1996,
    title: '32 יום נישואין',
    imageUrl: 'anniversity32.jpg',
    description: 'כבר עברנו דיי הרבה... סיבה לחגוג',
  },
  {
    year: 1998,
    title: 'ברית של אלדר',
    imageUrl: 'eldarBorn.jpg',
    description:
      'חגגנו לבן, הגיע גם התור של הנכד<br>\
    !הנכד הראשון חוגג ברית',
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
    title: '!60 יום נישואין',
    imageUrl: '',
    description:
      '...קטע, עדיין חסרה תמונה<br>\
   אז בקיצור, אני מאחל לכולנו זוגיות ארוכה ומאושרת כמו שלכם<br>\
   ,מאחל לכם עוד המון שנים של אושר, נחת<br>\
  !בריאות ואהבה\
   <br>!אוהב אתכם המון, שגיב',
  },
];
