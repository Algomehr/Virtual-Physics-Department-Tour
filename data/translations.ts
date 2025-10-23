

export interface Professor {
  name: string;
  area: string;
  initials: string;
  bio: string;
  publications: string[];
  contact: {
    email: string;
    office: string;
  };
}

export interface Floor {
  name: string;
  imageUrl: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface DepartmentItem {
  name: string;
  description: string;
  gallery: GalleryImage[];
}

export interface DepartmentCategory {
  title: string;
  icon: string;
  description: string;
  items: DepartmentItem[];
}

const fa = {
  professors: [
      {
        name: 'دکتر مالک باقری هارونی',
        area: 'فیزیک اتمی مولکولی',
        initials: 'مب',
        bio: 'دکتر مالک باقری هارونی عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک - نظری از دانشگاه اصفهان در سال ۱۳۸۸، کارشناسی ارشد را از دانشگاه شهید بهشتی در سال ۱۳۸۳ و کارشناسی را از دانشگاه بوعلی سینا همدان در سال ۱۳۸۱ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'm.bagheri@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی اول، سمت راست',
        },
      },
      {
        name: 'دکتر مرتضی حاجی محمودزاده',
        area: 'فیزیک اتمی مولکولی',
        initials: 'مح',
        bio: 'دکتر مرتضی حاجی محمودزاده عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک - حالت جامد از دانشگاه دولتی مسکو در سال ۱۳۸۴، کارشناسی ارشد را از دانشگاه اصفهان در سال ۱۳۷۱ و کارشناسی را نیز از دانشگاه اصفهان در سال ۱۳۶۶ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'm.hajimahmoodzadeh@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی اول، سمت چپ',
        },
      },
      {
        name: 'دکتر علیرضا خورسندی',
        area: 'فیزیک اتمی مولکولی',
        initials: 'عخ',
        bio: 'دکتر علیرضا خورسندی عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک لیزر از دانشگاه کلاوستال در سال ۱۳۸۳، کارشناسی ارشد را از دانشگاه اصفهان در سال ۱۳۷۳ و کارشناسی را نیز از دانشگاه اصفهان در سال ۱۳۶۹ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'a.khorsandi@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی دوم، سمت چپ',
        },
      },
      {
        name: 'دکتر رسول رکنی‌زاده',
        area: 'فیزیک اتمی مولکولی',
        initials: 'رر',
        bio: 'دکتر رسول رکنی‌زاده عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک - نظری از دانشگاه کلاوستال در سال ۱۳۷۵ و دو مدرک کارشناسی ارشد از دانشگاه فردوسی مشهد (۱۳۶۹) و دانشگاه اصفهان (۱۳۶۵) دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'rokni@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی دوم، سمت چپ',
        },
      },
      {
        name: 'دکتر راضیه طالبی',
        area: 'فیزیک اتمی مولکولی',
        initials: 'رط',
        bio: 'دکتر راضیه طالبی عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک نظری-اتمی مولکولی از دانشگاه تهران در سال ۱۳۹۳، کارشناسی ارشد را از دانشگاه اصفهان در سال ۱۳۸۷ و کارشناسی را نیز از دانشگاه اصفهان در سال ۱۳۸۴ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'r.talebi@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی دوم، سمت چپ',
        },
      },
      {
        name: 'دکتر مجید عموشاهی خوزانی',
        area: 'فیزیک اتمی مولکولی',
        initials: 'مع',
        bio: 'دکتر مجید عموشاهی خوزانی عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک از دانشگاه اصفهان در سال ۱۳۸۵، کارشناسی ارشد را از دانشگاه تهران در سال ۱۳۷۶ و کارشناسی را در سال ۱۳۷۴ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'amooshahi@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی دوم، سمت چپ',
        },
      },
      {
        name: 'دکتر حمیدرضا فلاح',
        area: 'فیزیک اتمی مولکولی',
        initials: 'حف',
        bio: 'دکتر حمیدرضا فلاح عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک از دانشگاه امپریال کالج در سال ۱۳۷۶، کارشناسی ارشد را از دانشگاه لندن در سال ۱۳۷۲ و کارشناسی را در رشته فیزیک کاربردی از دانشگاه اصفهان در سال ۱۳۶۶ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'hfallah@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش جنوبی، راهروی دوم، سمت راست',
        },
      },
      {
        name: 'دکتر ابراهیم قنبری عدیوی',
        area: 'فیزیک اتمی مولکولی',
        initials: 'اق',
        bio: 'دکتر ابراهیم قنبری عدیوی عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک نظری-اتمی مولکولی از دانشگاه شهید باهنر کرمان در سال ۱۳۸۲ و کارشناسی ارشد را نیز از همان دانشگاه در سال ۱۳۷۴ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'ghanbari@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی دوم، سمت چپ',
        },
      },
      {
        name: 'دکتر سعید قوامی صبوری',
        area: 'فیزیک اتمی مولکولی',
        initials: 'سق',
        bio: 'دکتر سعید قوامی صبوری عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک از دانشگاه اصفهان در سال ۱۳۹۱، کارشناسی ارشد را از دانشگاه صنعتی مالک اشتر در سال ۱۳۸۶ و کارشناسی را از دانشگاه فردوسی مشهد در سال ۱۳۸۳ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'ghavami@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی اول، سمت راست',
        },
      },
      {
        name: 'دکتر حمیدرضا محمدی خشوئی',
        area: 'فیزیک اتمی مولکولی',
        initials: 'حم',
        bio: 'دکتر حمیدرضا محمدی خشوئی عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک نظری-اتمی مولکولی از دانشگاه اصفهان در سال ۱۳۸۸، کارشناسی ارشد را در سال ۱۳۸۴ و کارشناسی را از دانشگاه آزاد اسلامی واحد شهرضا در سال ۱۳۸۴ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'hr.mohammadi@sci.ui.ac.ir',
          office: 'دانشکده فیزیک',
        },
      },
      {
        name: 'دکتر محمد ملک محمد',
        area: 'فیزیک اتمی مولکولی',
        initials: 'مم',
        bio: 'دکتر محمد ملک محمد عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک از دانشگاه اصفهان در سال ۱۳۹۰، کارشناسی ارشد را از دانشگاه صنعتی شریف در سال ۱۳۸۰ و کارشناسی را نیز از دانشگاه صنعتی شریف در سال ۱۳۷۸ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'm.malekmohammad@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش جنوبی، راهروی دوم، سمت راست',
        },
      },
      {
        name: 'دکتر علی مهدی‌فر',
        area: 'فیزیک اتمی مولکولی',
        initials: 'عم',
        bio: 'دکتر علی مهدی‌فر عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک - نظری از دانشگاه اصفهان در سال ۱۳۸۶، کارشناسی ارشد را در رشته فیزیک - حالت جامد از دانشگاه صنعتی اصفهان در سال ۱۳۸۲ و کارشناسی را نیز از دانشگاه صنعتی اصفهان در سال ۱۳۷۹ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'a.mahdifar@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش جنوبی، راهروی دوم، انتهای راهرو سمت چپ',
        },
      },
      {
        name: 'دکتر محمدحسین نادری',
        area: 'فیزیک اتمی مولکولی',
        initials: 'من',
        bio: 'دکتر محمدحسین نادری عضو هیئت علمی گروه فیزیک اتمی مولکولی است. ایشان مدرک دکتری خود را در رشته فیزیک نظری-اتمی مولکولی از دانشگاه اصفهان در سال ۱۳۸۲ و کارشناسی ارشد را نیز از دانشگاه اصفهان در سال ۱۳۷۵ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'mhnaderi@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش جنوبی، راهروی دوم، سمت چپ',
        },
      },
      {
        name: 'دکتر محسن امینی آبچویه',
        area: 'فیزیک ماده چگال',
        initials: 'ما',
        bio: 'دکتر محسن امینی آبچویه عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک از دانشگاه صنعتی اصفهان در سال ۱۳۹۲، کارشناسی ارشد را در سال ۱۳۸۷ و کارشناسی را در سال ۱۳۸۵ از همان دانشگاه دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'msn.amini@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش جنوبی، راهروی دوم، ابتدای راهرو سمت راست',
        },
      },
      {
        name: 'دکتر احسان بوالحسنی',
        area: 'فیزیک ماده چگال',
        initials: 'اب',
        bio: 'دکتر احسان بوالحسنی عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک از دانشگاه تحصیلات تکمیلی در علوم پایه زنجان در سال ۱۳۹۴، کارشناسی ارشد را از همان مرکز در سال ۱۳۸۸ و کارشناسی را از دانشگاه اراک در سال ۱۳۸۵ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'e.bolhasani@phys.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی اول، سمت راست',
        },
      },
      {
        name: 'دکتر غلامرضا راشدی',
        area: 'فیزیک ماده چگال',
        initials: 'غر',
        bio: 'دکتر غلامرضا راشدی عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک از مرکز تحصیلات تکمیلی علوم پایه زنجان در سال ۱۳۸۳، کارشناسی ارشد را از دانشگاه شهید چمران اهواز در سال ۱۳۷۵ و کارشناسی را از دانشگاه اصفهان در سال ۱۳۷۱ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'rashedi@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی دوم، سمت چپ',
        },
      },
      {
        name: 'دکتر امیر لهراسبی',
        area: 'فیزیک ماده چگال',
        initials: 'ال',
        bio: 'دکتر امیر لهراسبی عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک محاسباتی از پژوهشگاه دانش‌های بنیادی در سال ۱۳۸۷، کارشناسی ارشد را در سال ۱۳۸۲ و کارشناسی را در سال ۱۳۸۰ از دانشگاه صنعتی اصفهان دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'a.lohrasebi@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش شمالی، راهروی اول، سمت چپ',
        },
      },
      {
        name: 'دکتر مرتضی مظفری',
        area: 'فیزیک ماده چگال',
        initials: 'م‌م',
        bio: 'دکتر مرتضی مظفری عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک از دانشگاه اصفهان در سال ۱۳۸۱ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'mozafari@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش جنوبی، راهروی دوم، انتهای راهرو سمت راست',
        },
      },
      {
        name: 'دکتر زهرا نوربخش حبیب آبادی',
        area: 'فیزیک ماده چگال',
        initials: 'زن',
        bio: 'دکتر زهرا نوربخش حبیب آبادی عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک - حالت جامد از دانشگاه اصفهان در سال ۱۳۸۴، کارشناسی ارشد را در سال ۱۳۸۳ و کارشناسی را در سال ۱۳۷۷ از همان دانشگاه دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'z.nourbakhsh@sci.ui.ac.ir',
          office: 'طبقه سوم، بخش جنوبی، راهروی دوم، سمت راست',
        },
      },
      {
        name: 'دکتر امین الله واعظ',
        area: 'فیزیک ماده چگال',
        initials: 'او',
        bio: 'دکتر امین الله واعظ عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک محاسباتی از پژوهشگاه دانش‌های بنیادی در سال ۱۳۸۸ و کارشناسی ارشد را در رشته فیزیک - حالت جامد از دانشگاه اصفهان در سال ۱۳۸۲ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'vaez@sci.ui.ac.ir',
          office: 'دانشکده فیزیک',
        },
      },
      {
        name: 'دکتر حشمت اله یاوری',
        area: 'فیزیک ماده چگال',
        initials: 'هی',
        bio: 'دکتر حشمت اله یاوری عضو هیئت علمی گروه فیزیک ماده چگال است. ایشان مدرک دکتری خود را در رشته فیزیک نظری از دانشگاه اصفهان در سال ۱۳۸۴، کارشناسی ارشد را از دانشگاه اصفهان در سال ۱۳۷۸ و کارشناسی را از دانشگاه تبریز در سال ۱۳۷۳ دریافت کرده‌اند.',
        publications: [],
        contact: {
          email: 'h.yavary@sci.ui.ac.ir',
          office: 'دانشکده فیزیک',
        },
      }
  ],
  floors: [
      { name: 'طبقه همکف', imageUrl: '/Floor one.png' },
      { name: 'طبقه اول', imageUrl: '/Floor Two.png' },
      { name: 'طبقه دوم', imageUrl: '/Floor Three.png' },
      { name: 'طبقه سوم', imageUrl: '/Floor Four.png' },
  ],
  departmentSections: [
    {
      title: 'آزمایشگاه‌ها', icon: '🔬', description: 'مجهزترین آزمایشگاه‌ها برای تحقیقات پیشرفته در فیزیک.',
      items: [
        { name: 'آزمایشگاه حالت جامد', description: 'واقع در طبقه اول، راهروی جنوبی. این آزمایشگاه به بررسی خواص فیزیکی مواد در حالت جامد می‌پردازد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه حالت جامد' }] },
        { name: 'آزمایشگاه فیزیک پایه ۱', description: 'واقع در طبقه اول، راهروی جنوبی. این آزمایشگاه برای انجام آزمایش‌های بنیادی مکانیک، حرارت و الکتریسیته طراحی شده است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه فیزیک پایه ۱' }] },
        { name: 'آزمایشگاه فیزیک پایه ۲', description: 'واقع در طبقه اول، راهروی جنوبی. این آزمایشگاه مکمل فیزیک پایه ۱ بوده و به مباحث پیشرفته‌تر مغناطیس و موج می‌پردازد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه فیزیک پایه ۲' }] },
        { name: 'آزمایشگاه اپتیک', description: 'واقع در طبقه اول، راهروی شمالی. در این آزمایشگاه، پدیده‌های مرتبط با نور و برهمکنش آن با ماده مطالعه می‌شود.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه اپتیک' }] },
        { name: 'آزمایشگاه آموزشی الکترواپتیک', description: 'واقع در طبقه اول، راهروی شمالی. این فضا برای آموزش مباحث ترکیبی الکترونیک و اپتیک استفاده می‌شود.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه آموزشی الکترواپتیک' }] },
        { name: 'آزمایشگاه اسپکتروسکوپی', description: 'واقع در طبقه اول، راهروی شمالی. این آزمایشگاه به تحلیل طیف الکترومغناطیسی مواد برای شناسایی ساختار آن‌ها اختصاص دارد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه اسپکتروسکوپی' }] },
        { name: 'آزمایشگاه نجوم', description: 'واقع در طبقه اول، راهروی شمالی. فضایی برای انجام مشاهدات و پروژه‌های عملی مرتبط با نجوم.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه نجوم' }] },
        { name: 'آزمایشگاه آموزشی اپتیک و لیزر', description: 'واقع در طبقه اول، راهروی شمالی. این آزمایشگاه به آموزش اصول اپتیک و کاربردهای لیزر می‌پردازد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه آموزشی اپتیک و لیزر' }] },
        { name: 'آزمایشگاه آموزشی لیزر', description: 'واقع در طبقه اول، راهروی شمالی. تمرکز این آزمایشگاه بر روی آموزش عملی کار با انواع لیزرها است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه آموزشی لیزر' }] },
        { name: 'آزمایشگاه فیزیک جدید', description: 'واقع در طبقه دوم، راهروی جنوبی. در این آزمایشگاه، مفاهیم مدرن فیزیک مانند کوانتوم و نسبیت به صورت عملی بررسی می‌شود.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه فیزیک جدید' }] },
        { name: 'آزمایشگاه فیزیک ۳', description: 'واقع در طبقه دوم، راهروی جنوبی. این آزمایشگاه به مباحث پیشرفته فیزیک مانند الکترومغناطیس و موج می‌پردازد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه فیزیک ۳' }] },
        { name: 'آزمایشگاه بیناب نمایی فروسرخ ۲', description: 'واقع در طبقه دوم، راهروی جنوبی. این آزمایشگاه برای تحلیل‌های طیف‌سنجی در ناحیه فروسرخ استفاده می‌شود.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه بیناب نمایی فروسرخ ۲' }] },
        { name: 'آزمایشگاه بیناب نمایی فروسرخ ۱', description: 'واقع در طبقه دوم، راهروی جنوبی. این آزمایشگاه مکمل آزمایشگاه فروسرخ ۲ بوده و به کاربردهای دیگر این حوزه می‌پردازد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه بیناب نمایی فروسرخ ۱' }] },
        { name: 'کارگاه برق ۲', description: 'واقع در طبقه دوم، راهروی شمالی. فضایی برای ساخت و تعمیر مدارهای الکتریکی پیشرفته.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کارگاه برق ۲' }] },
        { name: 'کارگاه برق ۱', description: 'واقع در طبقه دوم، راهروی شمالی. این کارگاه به آموزش مبانی و مدارهای الکتریکی پایه اختصاص دارد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کارگاه برق ۱' }] },
        { name: 'آزمایشگاه نانوفتونیک', description: 'واقع در طبقه دوم، راهروی شمالی. تحقیقات در این آزمایشگاه بر روی برهمکنش نور و ماده در مقیاس نانو متمرکز است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه نانوفتونیک' }] },
        { name: 'آزمایشگاه لایه نشانی', description: 'واقع در طبقه دوم، راهروی شمالی. این آزمایشگاه به ایجاد لایه‌های نازک مواد بر روی سطوح مختلف می‌پردازد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه لایه نشانی' }] },
        { name: 'آزمایشگاه تهیه مواد', description: 'واقع در طبقه دوم، راهروی شمالی. در این فضا، مواد و نمونه‌های مورد نیاز برای تحقیقات فیزیکی سنتز و آماده‌سازی می‌شوند.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه تهیه مواد' }] },
        { name: 'آزمایشگاه حالت جامد (راهروی میانی)', description: 'واقع در راهروی میانی طبقه دوم (به سمت جنوب). این آزمایشگاه به بررسی خواص فیزیکی مواد در حالت جامد می‌پردازد.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آزمایشگاه حالت جامد (راهروی میانی)' }] },
        { name: 'آونگ فوکو', description: 'واقع در راهروی میانی طبقه دوم (به سمت جنوب). این آونگ برای نمایش بصری چرخش زمین به کار می‌رود.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'آونگ فوکو' }] }
      ]
    },
    { title: 'کلاس‌های درس', icon: '🏛️', description: 'فضاهای آموزشی مدرن برای ارائه دروس نظری و تخصصی.',
      items: [
        { name: 'کلاس درس ۱', description: 'این کلاس در طبقه دوم، راهروی میانی (بخش شمالی) قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۱' }] },
        { name: 'کلاس درس ۲', description: 'این کلاس در طبقه دوم، راهروی میانی (بخش شمالی) قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۲' }] },
        { name: 'کلاس درس ۳', description: 'این کلاس در طبقه همکف، راهروی جنوبی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۳' }] },
        { name: 'کلاس درس ۴', description: 'این کلاس در طبقه همکف، راهروی جنوبی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۴' }] },
        { name: 'کلاس درس ۵', description: 'این کلاس در طبقه همکف، راهروی جنوبی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۵' }] },
        { name: 'کلاس درس ۶', description: 'این کلاس در طبقه همکف، راهروی جنوبی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۶' }] },
        { name: 'کلاس درس ۷', description: 'این کلاس در طبقه همکف، راهروی جنوبی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۷' }] },
        { name: 'کلاس درس ۸', description: 'این کلاس در طبقه همکف، راهروی شمالی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۸' }] },
        { name: 'کلاس درس ۹', description: 'این کلاس در طبقه همکف، راهروی شمالی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۹' }] },
        { name: 'کلاس درس ۱۰', description: 'این کلاس در طبقه همکف، راهروی شمالی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۱۰' }] },
        { name: 'کلاس درس ۱۱', description: 'این کلاس در طبقه همکف، راهروی شمالی قرار دارد. مجهز به تجهیزات صوتی و تصویری مدرن برای برگزاری کلاس‌های تخصصی است.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس درس مدرن شماره ۱۱' }] }
      ]
    },
    { title: 'رصدخانه', icon: '🔭', description: 'رصد آسمان شب و انجام پروژه‌های نجومی با تلسکوپ‌های حرفه‌ای.',
      items: [
        { name: 'رصدخانه دانشگاه اصفهان', description: `
**تاریخچه و ساخت:**
طراحی و ساخت گنبد رصدخانه کاملاً ایرانی بوده و زیر نظر مرحوم دکتر احمد کیاست‌پور و به دست صنعتگران اصفهانی انجام گرفته است. نصب و راه‌اندازی تلسکوپ نیز تحت نظارت ایشان و توسط دکتر کاظم نفیسی در سال ۱۳۸۳ صورت پذیرفته است. مرحوم دکتر کیاست‌پور، پیشکسوت برجسته عرصه نجوم، اپتیک و لیزر، چهره‌ای شناخته‌شده جهانی و از افتخارات دانشگاه اصفهان بودند.

**مختصات فنی و مکان:**
- **مکان:** پشت بام دانشکده فیزیک
- **فضای اصلی:** اتاقی دایره‌ای به قطر ۱۱ متر و دو اتاق کوچک جانبی
- **ویژگی خاص:** پایه تلسکوپ به طور کامل از بدنه ساختمان ایزوله است تا لرزش‌های ساختمان به آن منتقل نشود.
- **مختصات جغرافیایی:**
  - طول جغرافیایی: ۵۱° ۳۹’ ۱۵’’ شرقی
  - عرض جغرافیایی: ۳۲° ۳۶’ ۱۵’’ شمالی
  - ارتفاع از سطح دریا: ۱۶۹۸ متر

**مشخصات تلسکوپ اصلی:**
- **مدل:** تلسکوپ ۱۶ اینچ ساخت کارخانه Meade مدل LX200 GPS
- **سیستم اپتیکی:** اشمیت-کاسگرین
- **فاصله کانونی:** ۴۰۶۴ میلی‌متر
- **نسبت کانونی:** f/10
- **نحوه برپایی:** استوایی
- **سیستم کنترل:** Autostar با قابلیت ذخیره ۱۴۵۰۰۰ جسم سماوی و سیستم هدایت خودکار GoTo

**تجهیزات جانبی:**
- **فتومتر:** مدل Optec_ssp_5A با فیلترهای استاندارد U,B,V,R جانسون
- **تلسکوپ‌های قابل حمل:**
  - ۱ عدد تلسکوپ ۱۲ اینچ کاسگرین Meade
  - ۱ عدد تلسکوپ ۸ اینچ کاسگرین Meade
  - ۱ عدد تلسکوپ ۸ اینچ نیوتنی Vixen
  - ۲ عدد تلسکوپ ۸ اینچ نیوتنی Celestron
- **سایر تجهیزات:** ۱ عدد دستگاه نورسنج نجومی و ۱ عدد دوربین عکس‌برداری CCD مستهلک
        `.trim(),
          gallery: [ { src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'نمای نزدیک از تلسکوپ اصلی رصدخانه' }, { src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'گنبد رصدخانه در شب' } ]
        }
      ]
    },
    { title: 'سایت‌های پردازشی', icon: '💻', description: 'دسترسی به کلاسترهای محاسباتی برای شبیه‌سازی‌های پیچیده.',
      items: [
        { name: 'سایت محاسباتی تخصصی (طبقه همکف)', 
          description: `این سایت تخصصی برای پروژه‌های تحقیقاتی دانشجویان تحصیلات تکمیلی و پژوهشگران پسادکتری در زمینه محاسبات موازی کوانتومی (نظریه تابعی چگالی) و دینامیک مولکولی کلاسیک طراحی شده است. تجهیزات آن شامل:
- یک سیستم Z840 با دو پردازنده ۱۲ هسته‌ای (مجموعاً ۲۴ هسته) و ۶۴ گیگابایت رم.
- سیستم‌های متعدد با پردازنده‌های ۲، ۴ و ۶ هسته‌ای و رم‌های ۱۶ تا ۶۴ گیگابایت.
این سایت توسط دو دستگاه UPS (۱۰ kVA و ۶ kVA) و دو دستگاه خنک‌کننده پشتیبانی می‌شود.`,
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'دانشجویان در حال کار در سایت کامپیوتر' }]
        },
        { name: 'سایت پردازش سریع (طبقه اول)',
          description: 'یک سایت دومنظوره که شامل ۱۰ سیستم پردازش سریع برای محاسبات پژوهشی (پردازنده ۶ هسته‌ای، ۸ گیگابایت رم) و ۱۱ سیستم عمومی با نرم‌افزارهای کاربردی (پردازنده ۶ هسته‌ای، ۴ گیگابایت رم) می‌باشد.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'اتاق کامپیوتر با چندین سیستم' }]
        },
        { name: 'اتاق سرور و کلاستر محاسباتی (طبقه اول)',
          description: `اتاق سرور دانشکده میزبان کلاستر محاسباتی اصلی است. این کلاستر از ۵ نود Tyan-FT48 تشکیل شده که هر کدام دارای ۴ پردازنده ۱۶ هسته‌ای AMD Opteron و ۱۲۸ گیگابایت رم DDR3 هستند. در حال حاضر، ۴ نود به صورت موازی تحت لینوکس کار می‌کنند و یک نود برای ارائه سرویس‌های مجازی‌سازی شده به دانشجویان استفاده می‌شود. برق اضطراری توسط یک دستگاه UPS قدرتمند ۲۰ kVA تامین می‌گردد.`,
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'رک‌های سرور در یک مرکز داده' }]
        },
        { name: 'سایت محاسباتی دانشجویان (طبقه اول)',
          description: `این سایت شامل ۱۲ سیستم قدرتمند است که به طور خاص در اختیار دانشجویان محاسباتی قرار دارد. مشخصات سیستم‌ها:
- پردازنده: i9-12900kf
- رم: 64GB DDR4
- هارد: 512GB SSD`,
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کامپیوترهای قدرتمند برای محاسبات' }]
        },
        { name: 'سایت عمومی دانشجویان تحصیلات تکمیلی (طبقه اول)',
          description: 'یک سایت عمومی با ۱۲ سیستم کامپیوتری که برای استفاده عمومی دانشجویان تحصیلات تکمیلی و همچنین برگزاری کلاس‌های آموزشی مبتنی بر کامپیوتر طراحی شده است.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'کلاس کامپیوتر برای دانشجویان' }]
        },
        { name: 'اتاق فیبر نوری (طبقه همکف)',
          description: 'این اتاق محل قرارگیری تجهیزات اصلی شبکه و زیرساخت فیبر نوری دانشکده است و در طبقه همکف واقع شده است.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'تجهیزات شبکه و فیبر نوری' }]
        }
      ]
    },
    { title: 'سالن‌های همایش', icon: '🎤', description: 'برگزاری سمینارها، کنفرانس‌ها و رویدادهای علمی.',
      items: [
        { name: 'آمفی‌تئاتر اصلی', description: 'سالن همایش اصلی دانشکده با ظرفیت ۲۰۰ نفر، مجهز به سیستم‌های صوتی و تصویری پیشرفته برای برگزاری سمینارهای هفتگی، دفاعیه‌ها و کنفرانس‌های ملی و بین‌المللی است.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'سالن همایش بزرگ و خالی' }]
        }
      ]
    },
    { title: 'سالن‌های مطالعه', icon: '📚', description: 'محیطی آرام و مناسب برای مطالعه و پژوهش دانشجویان.',
      items: [
        { 
          name: 'سالن مطالعه دانشجویان کارشناسی', 
          description: 'واقع در طبقه همکف، راهروی شمالی. این سالن مطالعه فضایی آرام و مجهز برای دانشجویان دوره کارشناسی فراهم می‌کند.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'سالن مطالعه دانشجویان کارشناسی' }]
        },
        { 
          name: 'سالن مطالعه ارشد خواهران', 
          description: 'واقع در طبقه دوم، راهروی میانی به سمت جنوب. این فضا به صورت اختصاصی برای دانشجویان خواهر در مقطع کارشناسی ارشد طراحی شده است.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'سالن مطالعه ارشد خواهران' }]
        },
        { 
          name: 'سالن مطالعه دکتری و پسادکتری', 
          description: 'واقع در طبقه سوم. این سالن مطالعه محیطی تخصصی و آرام برای پژوهشگران و دانشجویان مقاطع دکتری و پسادکتری فراهم می‌آورد.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=تصویر+به+زودی', alt: 'سالن مطالعه دکتری و پسادکتری' }]
        }
      ]
    }
  ],
  home: {
    heroTitle: "دانشکده فیزیک",
    heroSubtitle: "کاوش در مرزهای دانش، از بزرگترین مقیاس‌های کیهانی تا کوچکترین ذرات بنیادی.",
    heroButton: "ورود به بازدید سه بعدی",
    aboutTitle: "به دنیای فیزیک خوش آمدید",
    aboutText: "دانشکده فیزیک ما یکی از پیشروترین مراکز علمی در کشور است که با تکیه بر اساتید برجسته و امکانات پژوهشی مدرن، به تربیت نسل جدیدی از فیزیکدانان و محققان می‌پردازد. این دانشکده شامل بخش‌های مختلفی از جمله فیزیک نظری، فیزیک تجربی، نجوم و اخترفیزیک می‌باشد.",
    sectionsTitle: "بخش‌های مختلف دانشکده",
    sectionsSubtitle: "با امکانات و فضاهای آموزشی و پژوهشی ما آشنا شوید.",
    professorsTitle: "با اساتید ما آشنا شوید",
    professorsSubtitle: "رهبران فکری و پژوهشگران برجسته‌ای که آینده فیزیک را شکل می‌ده دهند.",
    mapTitle: "کاوش در دانشکده",
    mapSubtitle: "از نقشه تعاملی برای یافتن راه خود در ساختمان دانشکده استفاده کنید.",
    chatbotTitle: "از دستیار هوشمند بپرسید",
  },
  modals: {
    mapTitle: "نقشه",
    mapAlt: "نقشه",
    closeAria: "بستن",
    zoomInAria: "بزرگنمایی",
    zoomOutAria: "کوچک نمایی",
    resetViewAria: "بازنشانی نما",
    profProfileTitle: "پروفایل استاد",
    bioTitle: "بیوگرافی",
    pubsTitle: "آخرین مقالات",
    contactTitle: "اطلاعات تماس",
    emailLabel: "ایمیل:",
    officeLabel: "دفتر:",
    backButton: "بازگشت",
    noPubsFound: "مقاله جدیدی یافت نشد.",
    pubFetchError: "در حال حاضر امکان دریافت مقالات وجود ندارد.",
    loadingPubs: "در حال بارگذاری مقالات...",
  },
  chatbot: {
    profDesc: "متخصص در",
    sectionDesc: "شامل",
    dateLabel: "تاریخ",
    context: `
# اطلاعات کلی درباره دانشکده فیزیک:
دانشکده فیزیک ما یکی از پیشروترین مراکز علمی در کشور است که با تکیه بر اساتید برجسته و امکانات پژوهشی مدرن، به تربیت نسل جدیدی از فیزیکدانان و محققان می‌پردازد. این دانشکده شامل بخش‌های مختلفی از جمله فیزیک نظری، فیزیک تجربی، نجوم و اخترفیزیک می‌باشد.

# اساتید دانشکده:
{profInfo}

# بخش‌های مختلف دانشکده:
{sectionsInfo}
    `.trim(),
    systemInstruction: `
شما یک دستیار هوشمند و مفید برای دانشکده فیزیک هستید.
از اطلاعات زیر به عنوان منبع اصلی خود برای پاسخ به سوالات استفاده کنید.
پاسخ‌های خود را بر اساس این اطلاعات ارائه دهید. اگر سوالی پرسیده شد که جواب آن در اطلاعات زیر نیست، به صورت محترمانه بگویید که اطلاعاتی در این زمینه ندارید.
دوستانه و آموزنده باشید. همیشه به زبان فارسی پاسخ دهید.

---اطلاعات دانشکده---
{context}
---پایان اطلاعات---
    `.trim(),
    initialMessage: "سلام! من دستیار هوشمند دانشکده فیزیک هستم. چطور می‌توانم کمکتان کنم؟ سوالات خود را در مورد دانشکده بپرسید.",
    errorMessage: "متاسفانه در حال حاضر امکان برقراری ارتباط با دستیار هوشمند وجود ندارد.",
    sendError: "خطایی در پردازش درخواست شما رخ داد. لطفا دوباره تلاش کنید.",
    placeholder: "پیام خود را بنویسید...",
    sendAriaLabel: "ارسال پیام",
  },
  worldView: {
    title: "کاوشگر دنیای سه بعدی",
    instruction: "برای ورود و کنترل دوربین کلیک کنید.",
    touchInstruction: "برای حرکت از نیمه چپ و برای نگاه کردن از نیمه راست صفحه استفاده کنید.",
    controlsTitle: "کنترل ها",
    mouse: "ماوس",
    look: "نگاه به اطراف",
    ws: "W / S",
    move: "راه رفتن به جلو / عقب",
    ad: "A / D",
    strafe: "راه رفتن به چپ / راست",
    space: "Space",
    flyUp: "پرواز به بالا",
    esc: "ESC",
    release: "رهاسازی کنترل ها"
  }
};

const en = {
  professors: [
    {
      name: 'Dr. Malek Bagheri Harouni',
      area: 'Atomic and Molecular Physics',
      initials: 'MB',
      bio: 'Dr. Malek Bagheri Harouni is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Theoretical Physics from the University of Isfahan in 2009, his M.Sc. from Shahid Beheshti University in 2004, and his B.Sc. from Bu-Ali Sina University, Hamedan in 2002.',
      publications: [],
      contact: {
        email: 'm.bagheri@sci.ui.ac.ir',
        office: 'Third Floor, North Section, First Corridor, Right Side',
      },
    },
    {
      name: 'Dr. Morteza Haji Mahmoodzadeh',
      area: 'Atomic and Molecular Physics',
      initials: 'MH',
      bio: 'Dr. Morteza Haji Mahmoodzadeh is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Solid State Physics from Moscow State University in 2005, his M.Sc. from the University of Isfahan in 1992, and his B.Sc. also from the University of Isfahan in 1987.',
      publications: [],
      contact: {
        email: 'm.hajimahmoodzadeh@sci.ui.ac.ir',
        office: 'Third Floor, North Section, First Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Alireza Khorsandi',
      area: 'Atomic and Molecular Physics',
      initials: 'AK',
      bio: 'Dr. Alireza Khorsandi is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Laser Physics from Clausthal University of Technology in 2004, his M.Sc. from the University of Isfahan in 1994, and his B.Sc. also from the University of Isfahan in 1990.',
      publications: [],
      contact: {
        email: 'a.khorsandi@sci.ui.ac.ir',
        office: 'Third Floor, North Section, Second Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Rasoul Roknizadeh',
      area: 'Atomic and Molecular Physics',
      initials: 'RR',
      bio: 'Dr. Rasoul Roknizadeh is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Theoretical Physics from Clausthal University of Technology in 1996, and two M.Sc. degrees from Ferdowsi University of Mashhad (1990) and the University of Isfahan (1986).',
      publications: [],
      contact: {
        email: 'rokni@sci.ui.ac.ir',
        office: 'Third Floor, North Section, Second Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Razieh Talebi',
      area: 'Atomic and Molecular Physics',
      initials: 'RT',
      bio: 'Dr. Razieh Talebi is a faculty member of the Atomic and Molecular Physics group. She received her Ph.D. in Theoretical Atomic and Molecular Physics from the University of Tehran in 2014, her M.Sc. from the University of Isfahan in 2008, and her B.Sc. also from the University of Isfahan in 2005.',
      publications: [],
      contact: {
        email: 'r.talebi@sci.ui.ac.ir',
        office: 'Third Floor, North Section, Second Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Majid Amooshahi Khoozani',
      area: 'Atomic and Molecular Physics',
      initials: 'MA',
      bio: 'Dr. Majid Amooshahi Khoozani is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Physics from the University of Isfahan in 2006, his M.Sc. from the University of Tehran in 1997, and his B.Sc. in 1995.',
      publications: [],
      contact: {
        email: 'amooshahi@sci.ui.ac.ir',
        office: 'Third Floor, North Section, Second Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Hamidreza Fallah',
      area: 'Atomic and Molecular Physics',
      initials: 'HF',
      bio: 'Dr. Hamidreza Fallah is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Physics from Imperial College London in 1997, his M.Sc. from the University of London in 1993, and his B.Sc. in Applied Physics from the University of Isfahan in 1987.',
      publications: [],
      contact: {
        email: 'hfallah@sci.ui.ac.ir',
        office: 'Third Floor, South Section, Second Corridor, Right Side',
      },
    },
    {
      name: 'Dr. Ebrahim Ghanbari Adivi',
      area: 'Atomic and Molecular Physics',
      initials: 'EG',
      bio: 'Dr. Ebrahim Ghanbari Adivi is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Theoretical Atomic and Molecular Physics from Shahid Bahonar University of Kerman in 2003, and his M.Sc. from the same university in 1995.',
      publications: [],
      contact: {
        email: 'ghanbari@sci.ui.ac.ir',
        office: 'Third Floor, North Section, Second Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Saeed Ghavami Sabouri',
      area: 'Atomic and Molecular Physics',
      initials: 'SG',
      bio: 'Dr. Saeed Ghavami Sabouri is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Physics from the University of Isfahan in 2012, his M.Sc. from Malek-Ashtar University of Technology in 2007, and his B.Sc. from Ferdowsi University of Mashhad in 2004.',
      publications: [],
      contact: {
        email: 'ghavami@sci.ui.ac.ir',
        office: 'Third Floor, North Section, First Corridor, Right Side',
      },
    },
    {
      name: 'Dr. Hamidreza Mohammadi Khashouei',
      area: 'Atomic and Molecular Physics',
      initials: 'HM',
      bio: 'Dr. Hamidreza Mohammadi Khashouei is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Theoretical Atomic and Molecular Physics from the University of Isfahan in 2009, his M.Sc. in 2005, and his B.Sc. from the Islamic Azad University, Shahreza Branch in 2005.',
      publications: [],
      contact: {
        email: 'hr.mohammadi@sci.ui.ac.ir',
        office: 'Physics Department',
      },
    },
    {
      name: 'Dr. Mohammad Malek Mohamad',
      area: 'Atomic and Molecular Physics',
      initials: 'MM',
      bio: 'Dr. Mohammad Malek Mohamad is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Physics from the University of Isfahan in 2011, his M.Sc. from Sharif University of Technology in 2001, and his B.Sc. also from Sharif University of Technology in 1999.',
      publications: [],
      contact: {
        email: 'm.malekmohammad@sci.ui.ac.ir',
        office: 'Third Floor, South Section, Second Corridor, Right Side',
      },
    },
    {
      name: 'Dr. Ali Mahdifar',
      area: 'Atomic and Molecular Physics',
      initials: 'AM',
      bio: 'Dr. Ali Mahdifar is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Theoretical Physics from the University of Isfahan in 2007, his M.Sc. in Solid State Physics from Isfahan University of Technology in 2003, and his B.Sc. also from Isfahan University of Technology in 2000.',
      publications: [],
      contact: {
        email: 'a.mahdifar@sci.ui.ac.ir',
        office: 'Third Floor, South Section, Second Corridor, End of Hallway (Left)',
      },
    },
    {
      name: 'Dr. Mohammad Hossein Naderi',
      area: 'Atomic and Molecular Physics',
      initials: 'MN',
      bio: 'Dr. Mohammad Hossein Naderi is a faculty member of the Atomic and Molecular Physics group. He received his Ph.D. in Theoretical Atomic and Molecular Physics from the University of Isfahan in 2003, and his M.Sc. from the University of Isfahan in 1996.',
      publications: [],
      contact: {
        email: 'mhnaderi@sci.ui.ac.ir',
        office: 'Third Floor, South Section, Second Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Mohsen Amini Abchuyeh',
      area: 'Condensed Matter Physics',
      initials: 'MA',
      bio: 'Dr. Mohsen Amini Abchuyeh is a faculty member of the Condensed Matter Physics group. He received his Ph.D. in Physics from Isfahan University of Technology in 2013, and his M.Sc. (2008) and B.Sc. (2006) from the same university.',
      publications: [],
      contact: {
        email: 'msn.amini@sci.ui.ac.ir',
        office: 'Third Floor, South Section, Second Corridor, Beginning of Hallway (Right)',
      },
    },
    {
      name: 'Dr. Ehsan Bolhasani',
      area: 'Condensed Matter Physics',
      initials: 'EB',
      bio: 'Dr. Ehsan Bolhasani is a faculty member of the Condensed Matter Physics group. He received his Ph.D. in Physics from the Institute for Advanced Studies in Basic Sciences (IASBS), Zanjan in 2015, his M.Sc. from the same institute in 2009, and his B.Sc. from Arak University in 2006.',
      publications: [],
      contact: {
        email: 'e.bolhasani@phys.ui.ac.ir',
        office: 'Third Floor, North Section, First Corridor, Right Side',
      },
    },
    {
      name: 'Dr. Gholamreza Rashedi',
      area: 'Condensed Matter Physics',
      initials: 'GR',
      bio: 'Dr. Gholamreza Rashedi is a faculty member of the Condensed Matter Physics group. He received his Ph.D. in Physics from the Institute for Advanced Studies in Basic Sciences (IASBS), Zanjan in 2004, his M.Sc. from Shahid Chamran University of Ahvaz in 1996, and his B.Sc. from the University of Isfahan in 1992.',
      publications: [],
      contact: {
        email: 'rashedi@sci.ui.ac.ir',
        office: 'Third Floor, North Section, Second Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Amir Lohrasebi',
      area: 'Condensed Matter Physics',
      initials: 'AL',
      bio: 'Dr. Amir Lohrasebi is a faculty member of the Condensed Matter Physics group. He received his Ph.D. in Computational Physics from the Institute for Research in Fundamental Sciences (IPM) in 2008, his M.Sc. (2003) and B.Sc. (2001) from Isfahan University of Technology.',
      publications: [],
      contact: {
        email: 'a.lohrasebi@sci.ui.ac.ir',
        office: 'Third Floor, North Section, First Corridor, Left Side',
      },
    },
    {
      name: 'Dr. Morteza Mozafari',
      area: 'Condensed Matter Physics',
      initials: 'MM',
      bio: 'Dr. Morteza Mozafari is a faculty member of the Condensed Matter Physics group. He received his Ph.D. in Physics from the University of Isfahan in 2002.',
      publications: [],
      contact: {
        email: 'mozafari@sci.ui.ac.ir',
        office: 'Third Floor, South Section, Second Corridor, End of Hallway (Right)',
      },
    },
    {
      name: 'Dr. Zahra Nourbakhsh Habibabadi',
      area: 'Condensed Matter Physics',
      initials: 'ZN',
      bio: 'Dr. Zahra Nourbakhsh Habibabadi is a faculty member of the Condensed Matter Physics group. She received her Ph.D. in Solid State Physics from the University of Isfahan in 2005, her M.Sc. in 2004, and her B.Sc. in 1998, all from the same university.',
      publications: [],
      contact: {
        email: 'z.nourbakhsh@sci.ui.ac.ir',
        office: 'Third Floor, South Section, Second Corridor, Right Side',
      },
    },
    {
      name: 'Dr. Aminollah Vaez',
      area: 'Condensed Matter Physics',
      initials: 'AV',
      bio: 'Dr. Aminollah Vaez is a faculty member of the Condensed Matter Physics group. He received his Ph.D. in Computational Physics from the Institute for Research in Fundamental Sciences (IPM) in 2009 and his M.Sc. in Solid State Physics from the University of Isfahan in 2003.',
      publications: [],
      contact: {
        email: 'vaez@sci.ui.ac.ir',
        office: 'Physics Department',
      },
    },
    {
      name: 'Dr. Heshmatollah Yavary',
      area: 'Condensed Matter Physics',
      initials: 'HY',
      bio: 'Dr. Heshmatollah Yavary is a faculty member of the Condensed Matter Physics group. He received his Ph.D. in Theoretical Physics from the University of Isfahan in 2005, his M.Sc. from the University of Isfahan in 1999, and his B.Sc. from the University of Tabriz in 1994.',
      publications: [],
      contact: {
        email: 'h.yavary@sci.ui.ac.ir',
        office: 'Physics Department',
      },
    }
  ],
  floors: [
    { name: 'Ground Floor', imageUrl: '/Floor one.png' },
    { name: 'First Floor', imageUrl: '/Floor Two.png' },
    { name: 'Second Floor', imageUrl: '/Floor Three.png' },
    { name: 'Third Floor', imageUrl: '/Floor Four.png' },
  ],
  departmentSections: [
    {
      title: 'Laboratories', icon: '🔬', description: 'State-of-the-art laboratories for advanced physics research.',
      items: [
        { name: 'Solid State Laboratory', description: 'Located on the first floor, south corridor. This lab focuses on studying the physical properties of materials in their solid state.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Solid State Laboratory' }] },
        { name: 'Basic Physics Laboratory 1', description: 'Located on the first floor, south corridor. Designed for fundamental experiments in mechanics, heat, and electricity.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Basic Physics Laboratory 1' }] },
        { name: 'Basic Physics Laboratory 2', description: 'Located on the first floor, south corridor. A continuation of Basic Physics 1, covering more advanced topics in magnetism and waves.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Basic Physics Laboratory 2' }] },
        { name: 'Optics Laboratory', description: 'Located on the first floor, north corridor. This lab is for studying phenomena related to light and its interaction with matter.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Optics Laboratory' }] },
        { name: 'Educational Electro-Optics Laboratory', description: 'Located on the first floor, north corridor. A space for teaching combined topics in electronics and optics.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Educational Electro-Optics Laboratory' }] },
        { name: 'Spectroscopy Laboratory', description: 'Located on the first floor, north corridor. Dedicated to analyzing the electromagnetic spectrum of materials to identify their structure.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Spectroscopy Laboratory' }] },
        { name: 'Astronomy Laboratory', description: 'Located on the first floor, north corridor. A space for conducting observations and practical projects related to astronomy.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Astronomy Laboratory' }] },
        { name: 'Educational Optics and Laser Laboratory', description: 'Located on the first floor, north corridor. This lab is dedicated to teaching the principles of optics and laser applications.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Educational Optics and Laser Laboratory' }] },
        { name: 'Educational Laser Laboratory', description: 'Located on the first floor, north corridor. The focus of this lab is on practical training with various types of lasers.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Educational Laser Laboratory' }] },
        { name: 'Modern Physics Laboratory', description: 'Located on the second floor, south corridor. In this lab, modern physics concepts like quantum mechanics and relativity are explored experimentally.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Physics Laboratory' }] },
        { name: 'Physics 3 Laboratory', description: 'Located on the second floor, south corridor. This lab deals with advanced physics topics such as electromagnetism and waves.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Physics 3 Laboratory' }] },
        { name: 'Infrared Spectroscopy Laboratory 2', description: 'Located on the second floor, south corridor. Used for spectroscopic analysis in the infrared region.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Infrared Spectroscopy Laboratory 2' }] },
        { name: 'Infrared Spectroscopy Laboratory 1', description: 'Located on the second floor, south corridor. Complements the Infrared Spectroscopy 2 lab, focusing on other applications in this field.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Infrared Spectroscopy Laboratory 1' }] },
        { name: 'Electrical Workshop 2', description: 'Located on the second floor, north corridor. A space for building and repairing advanced electrical circuits.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Electrical Workshop 2' }] },
        { name: 'Electrical Workshop 1', description: 'Located on the second floor, north corridor. This workshop is dedicated to teaching the fundamentals and basic electrical circuits.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Electrical Workshop 1' }] },
        { name: 'Nanophotonics Laboratory', description: 'Located on the second floor, north corridor. Research in this lab focuses on the interaction of light and matter at the nanoscale.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Nanophotonics Laboratory' }] },
        { name: 'Thin Film Deposition Laboratory', description: 'Located on the second floor, north corridor. This lab is dedicated to creating thin layers of materials on various substrates.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Thin Film Deposition Laboratory' }] },
        { name: 'Materials Preparation Laboratory', description: 'Located on the second floor, north corridor. In this space, materials and samples needed for physics research are synthesized and prepared.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Materials Preparation Laboratory' }] },
        { name: 'Solid State Laboratory (Middle Corridor)', description: 'Located in the middle corridor of the second floor (south side). This lab focuses on studying the physical properties of materials in their solid state.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Solid State Laboratory (Middle Corridor)' }] },
        { name: 'Foucault Pendulum', description: 'Located in the middle corridor of the second floor (south side). This pendulum is used to visually demonstrate the rotation of the Earth.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Foucault Pendulum' }] }
      ]
    },
    { title: 'Lecture Halls', icon: '🏛️', description: 'Modern educational spaces for theoretical and specialized courses.',
      items: [
        { name: 'Lecture Hall 1', description: "Located on the second floor, in the middle corridor's north section. Equipped with modern audio-visual equipment for specialized courses.", gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 1' }] },
        { name: 'Lecture Hall 2', description: "Located on the second floor, in the middle corridor's north section. Equipped with modern audio-visual equipment for specialized courses.", gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 2' }] },
        { name: 'Lecture Hall 3', description: 'Located on the ground floor, south corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 3' }] },
        { name: 'Lecture Hall 4', description: 'Located on the ground floor, south corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 4' }] },
        { name: 'Lecture Hall 5', description: 'Located on the ground floor, south corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 5' }] },
        { name: 'Lecture Hall 6', description: 'Located on the ground floor, south corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 6' }] },
        { name: 'Lecture Hall 7', description: 'Located on the ground floor, south corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 7' }] },
        { name: 'Lecture Hall 8', description: 'Located on the ground floor, north corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 8' }] },
        { name: 'Lecture Hall 9', description: 'Located on the ground floor, north corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 9' }] },
        { name: 'Lecture Hall 10', description: 'Located on the ground floor, north corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 10' }] },
        { name: 'Lecture Hall 11', description: 'Located on the ground floor, north corridor. Equipped with modern audio-visual equipment for specialized courses.', gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Modern Lecture Hall 11' }] }
      ]
    },
    { title: 'Observatory', icon: '🔭', description: 'Observing the night sky and conducting astronomical projects with professional telescopes.',
      items: [
        { name: 'University of Isfahan Observatory', description: `
**History and Construction:**
The observatory's dome was entirely designed and built in Iran under the supervision of the late Dr. Ahmad Kiastpour and constructed by Isfahani craftsmen. The telescope was installed and commissioned in 2004 under his supervision by Dr. Kazem Nafisi. The late Dr. Kiastpour was a distinguished pioneer in astronomy, optics, and lasers, and an internationally recognized figure and a source of pride for the University of Isfahan.

**Technical Specs & Location:**
- **Location:** Rooftop of the Physics Department building.
- **Main Area:** An 11-meter diameter circular room with two small adjacent rooms.
- **Special Feature:** The telescope's base is completely isolated from the building's structure to prevent vibrations from being transmitted to it.
- **Geographical Coordinates:**
  - Longitude: 51° 39’ 15’’ E
  - Latitude: 32° 36’ 15’’ N
  - Altitude: 1698 meters above sea level

**Main Telescope Specifications:**
- **Model:** 16-inch Meade LX200 GPS
- **Optical System:** Schmidt-Cassegrain
- **Focal Length:** 4064 mm
- **Focal Ratio:** f/10
- **Mount:** Equatorial
- **Control System:** Autostar with a database of 145,000 celestial objects and a GoTo auto-guiding system.

**Auxiliary Equipment:**
- **Photometer:** Optec SSP-5A model with standard Johnson U,B,V,R filters.
- **Portable Telescopes:**
  - 1x 12-inch Meade Cassegrain reflector
  - 1x 8-inch Meade Cassegrain reflector
  - 1x 8-inch Vixen Newtonian reflector
  - 2x 8-inch Celestron Newtonian reflectors
- **Other Gear:** 1x astronomical photometer, 1x depreciated CCD imaging camera.
        `.trim(),
          gallery: [ { src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Close-up of the main observatory telescope' }, { src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'The observatory dome at night' } ]
        }
      ]
    },
    { title: 'Computing Sites', icon: '💻', description: 'Access to computational clusters for complex simulations.',
      items: [
        { name: 'Specialized Computational Site (Ground Floor)',
          description: `This specialized site is designed for research projects by graduate students and postdoctoral researchers in quantum parallel computing (Density Functional Theory) and classical molecular dynamics. Its equipment includes:
- One Z840 system with two 12-core processors (24 cores total) and 64GB RAM.
- Multiple systems with 2, 4, and 6-core processors and RAM ranging from 16GB to 64GB.
The site is supported by two UPS units (10 kVA and 6 kVA) and two cooling units.`,
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Students working in a computer lab' }]
        },
        { name: 'High-Speed Processing Site (First Floor)',
          description: 'A dual-purpose site containing 10 high-speed processing systems for research calculations (6-core CPU, 8GB RAM) and 11 general-purpose systems with application software (6-core CPU, 4GB RAM).',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Computer room with multiple systems' }]
        },
        { name: 'Server Room & Computing Cluster (First Floor)',
          description: `The department's server room hosts the main computing cluster. This cluster consists of 5 Tyan-FT48 nodes, each with four 16-core AMD Opteron processors and 128GB of DDR3 RAM. Currently, 4 nodes operate in parallel under Linux, and one node provides virtualized services to students. Emergency power is supplied by a powerful 20 kVA UPS.`,
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Server racks in a data center' }]
        },
        { name: 'Student Computational Site (First Floor)',
          description: `This site features 12 powerful systems specifically available for computational students. The system specifications are:
- CPU: i9-12900kf
- RAM: 64GB DDR4
- H.D.D: 512GB SSD`,
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Powerful computers for calculations' }]
        },
        { name: 'General Graduate Student Site (First Floor)',
          description: 'A general-purpose site with 12 computer systems, designed for general use by graduate students and for holding computer-based training classes.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Computer classroom for students' }]
        },
        { name: 'Fiber Optic Room (Ground Floor)',
          description: 'Located on the ground floor, this room houses the main networking equipment and fiber optic infrastructure for the department.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Networking and fiber optic equipment' }]
        }
      ]
    },
    { title: 'Conference Halls', icon: '🎤', description: 'Hosting seminars, conferences, and scientific events.',
      items: [
        { name: 'Main Auditorium', description: 'The main conference hall of the department with a capacity of 200 people, equipped with advanced sound and video systems for weekly seminars, defenses, and national and international conferences.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Large empty auditorium' }]
        }
      ]
    },
    { title: 'Study Halls', icon: '📚', description: 'A quiet and suitable environment for students to study and research.',
      items: [
        { 
          name: 'Undergraduate Students Study Hall', 
          description: 'Located on the ground floor, north corridor. This study hall provides a quiet and equipped space for undergraduate students.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Undergraduate Students Study Hall' }]
        },
        { 
          name: 'Graduate (Female) Students Study Hall', 
          description: 'Located on the second floor, middle corridor (south side). This space is exclusively designed for female graduate students.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'Graduate (Female) Students Study Hall' }]
        },
        { 
          name: 'PhD and Post-doc Study Hall', 
          description: 'Located on the third floor. This study hall offers a specialized and quiet environment for researchers and students at PhD and postdoctoral levels.',
          gallery: [{ src: 'https://placehold.co/800x600/1f2937/94a3b8?text=Image+Coming+Soon', alt: 'PhD and Post-doc Study Hall' }]
        }
      ]
    }
  ],
  home: {
    heroTitle: 'Department of Physics',
    heroSubtitle: 'Exploring the frontiers of knowledge, from the largest cosmic scales to the smallest fundamental particles.',
    heroButton: 'Enter 3D Tour',
    aboutTitle: 'Welcome to the World of Physics',
    aboutText: 'Our Department of Physics is one of the leading scientific centers in the country, dedicated to training the next generation of physicists and researchers with its distinguished faculty and modern research facilities. The department includes various sections such as theoretical physics, experimental physics, astronomy, and astrophysics.',
    sectionsTitle: 'Department Sections',
    sectionsSubtitle: 'Discover our educational and research facilities and spaces.',
    professorsTitle: 'Meet Our Professors',
    professorsSubtitle: 'The thought leaders and distinguished researchers shaping the future of physics.',
    mapTitle: 'Explore the Department',
    mapSubtitle: 'Use the interactive map to find your way around the department building.',
    chatbotTitle: 'Ask the AI Assistant',
  },
  modals: {
    mapTitle: 'Map',
    mapAlt: 'Map of',
    closeAria: 'Close',
    zoomInAria: 'Zoom In',
    zoomOutAria: 'Zoom Out',
    resetViewAria: 'Reset View',
    profProfileTitle: 'Professor Profile',
    bioTitle: 'Biography',
    pubsTitle: 'Latest Publications',
    contactTitle: 'Contact Information',
    emailLabel: 'Email:',
    officeLabel: 'Office:',
    backButton: 'Back',
    noPubsFound: "No recent publications found.",
    pubFetchError: "Could not fetch publications at this time.",
    loadingPubs: "Loading publications...",
  },
  chatbot: {
    profDesc: 'specializing in',
    sectionDesc: 'includes',
    dateLabel: 'Date',
    context: `
# General Information about the Department of Physics:
Our Department of Physics is one of the leading scientific centers in the country, dedicated to training the next generation of physicists and researchers with its distinguished faculty and modern research facilities. The department includes various sections such as theoretical physics, experimental physics, astronomy, and astrophysics.

# Department Professors:
{profInfo}

# Department Sections:
{sectionsInfo}
    `.trim(),
    systemInstruction: `
You are a helpful and intelligent assistant for the Department of Physics.
Use the information below as your primary source to answer questions.
Provide your answers based on this information. If a question is asked that is not answered in the information below, politely state that you do not have information on that topic.
Be friendly and informative. Always respond in English.

---Department Information---
{context}
---End Information---
    `.trim(),
    initialMessage: 'Hello! I am the AI assistant for the Physics Department. How can I help you? Ask your questions about the department.',
    errorMessage: 'Unfortunately, I cannot connect to the AI assistant at the moment.',
    sendError: 'An error occurred while processing your request. Please try again.',
    placeholder: 'Write your message...',
    sendAriaLabel: 'Send message',
  },
  worldView: {
    title: "3D World Explorer",
    instruction: "Click to enter and control the camera.",
    touchInstruction: "Use the left half of the screen to move and the right half to look.",
    controlsTitle: "Controls",
    mouse: "Mouse",
    look: "Look Around",
    ws: "W / S",
    move: "Move Forward / Backward",
    ad: "A / D",
    strafe: "Strafe Left / Right",
    space: "Space",
    flyUp: "Fly Up",
    esc: "ESC",
    release: "Release Controls"
  }
};

// FIX: Export the translations object to make it accessible for import in other files.
export const translations = { fa, en };