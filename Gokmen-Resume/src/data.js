export const skillsArr = [
  "JAVASCRIPT",
  "NODE",
  "REACT",
  "VS CODE",
  "REDUX",
  "FIGMA",
];
//export const skillsArr2 = ["VS CODE", "REDUX", "FIGMA"];
export const profileArrTr = [
  "Doğum tarihi:",
  " İkamet Şehri:",
  " Eğitim Durumu:",
  "Tercih Ettiği Rol:",
];
export const profileArrEn = [
  "Birthday:",
  " Location:",
  " Education:",
  "Preferred Role:",
];

export const profileArr2tr = [
  "01.08.1989 ",
  "Berkeley",
  "Boğaziçi Üni. Ekonomi Lisans, 2014",
  "Frontend, UI",
];

export const profileArr2en = [
  "08.01.1989 ",
  "Berkeley",
  "Boğaziçi Uni. Economics BS, 2014",
  "Frontend, UI",
];

export const projectsData = [
  {
    h3: "Workintech",
    p: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
  },
  {
    h3: "Journey",
    p: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
  },
];

export const buttonArr = ["react", "redux", "vercel"];

/* const data = {
  tr: {
    header: {
      name: "GÖKMEN",
      title: "Ben Bir Önyüz",
      titleSecond: "Yazılımcı'sıyım...",
      description:
        "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ürünleri oluşturmayı seven.",
      to: "TO",
      languageSwitch: "ENGLISH",
    },
    skills: {
      skils: "Yetenekler",
      skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
      skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
      skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
      skillsDarkArray2: [nodeDark, vsDark, figmaDark],
    },
    profile: {
      profile: "Profil Bilgilerim",
      title: "Özgeçmişim",
      birthday: "Doğum Tarihi",
      city: "İkamet Şehri",
      graduatedFrom: "Eğitim Durumu",
      role: "Tercih Ettiği Rol",
      response: {
        birthday: "01.08.1989",
        city: "Berkeley",
        graduatedFrom: "Boğaziçi Üniversitesi Ekonomi, 2014",
        role: "Frontend Developer",
      },
      aboutMe: "Hakkımda",
      aboutMeFirstP:
        "Kod yazmak benim icin bir isten öte yasam bicimine donustu, gec kavustum ve cok mutluyum ",
      aboutMeSecondP:
        "Problem cozmeyi seven bir yapim var, sectigim meslekte bu ve arastirip, ogrenmek cok onemli, bunlarda bende olan ozellikler ",
    },
    projects: {
      title: "Projelerim",
      visit: "Siteyi Görüntüle",
      projectsArray: [
        {
          title: "Pizza Sipariş Sayfası",
          img: pizza,
          description:
            "React uygulamasıyla yapılmış bir Pizza Sipariş Sitesi Projesi. Ana sayfa , Sipariş Sayfası ve Sipariş Tamamlandı Sayfası SPA kullanılarak oluşturulmuştur.",
          programs: ["Redux", "React", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s7-challenge-pizza",
          url: "https://mypizzasite.vercel.app/",
        },
        {
          title: "Yapılacaklar Listesi",
          img: todo,
          description:
            "Hem işiniz hem de günlük yaşantınız için kullanabileceğiniz hayatınızı kolaylaştıracak bir ajanda uygulaması.",
          programs: ["React", "Redux", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s9g2-task-yonetimi-2",
          url: "https://agendatasks.vercel.app/",
        },
      ],
    },
    footer: {
      title: "Bana mesaj gönderin!",
      description:
        "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam edin...",
      mail: "burgokmen@gmail.com",
    },
  },

  en: {
    header: {
      name: "BRUNO",
      title: "I am a Frontend",
      titleSecond: "Developer...",
      description:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      to: "TÜRKÇE",
      languageSwitch: "'YE GEÇ",
    },
    skills: {
      skils: "Skills",
      skillsArray1: [JavascriptLogo, ReactLogo, ReduxLogo],
      skillsArray2: [NodeLogo, VsCodeLogo, FigmaLogo],
      skillsDarkArray1: [JavascriptDark, ReactDark, ReduxDark],
      skillsDarkArray2: [nodeDark, vsDark, figmaDark],
    },
    profile: {
      profile: "Profile",
      title: "Basic Information",
      birthday: "Birthday",
      location: "Location",
      graduatedFrom: "Education",
      role: "Preferred Role",
      response: {
        birthday: "01.08.1989",
        city: "Berkeley",
        graduatedFrom: "Boğaziçi Üniversitesi Ekonomi, 2014",
        role: "Frontend Developer",
      },
      aboutMe: "About Me",
      aboutMeFirstP:
        "Coding became a lifestyle for me. I did not find it early but it became everything for me",
      aboutMeSecondP:
        "I am problem solver. This is very crucial for this chosen occupation. Being a lifelong learner to catch up new skills needed ",
    },
    projects: {
      title: "Projects",
      visit: "View Site",
      projectsArray: [
        {
          title: "Pizza Challenge",
          img: pizza,
          description:
            "A Pizza Ordering Site Project made with React application. Home page, Order Page and Order Completed Page were created using SPA.",
          programs: ["Redux", "React", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s7-challenge-pizza",
          url: "https://mypizzasite.vercel.app/",
        },
        {
          title: "To Do List",
          img: todo,
          description:
            "An organizer application that you can use for both your work and daily life to make your life easier",
          programs: ["React", "Redux", "Vercel"],
          github: "https://github.com/AnilEnsari/fsweb-s9g2-task-yonetimi-2",
          url: "https://agendatasks.vercel.app/",
        },
      ],
    },
    footer: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      mail: "burgokmen@gmail.com",
    },
  },
};

export default data;
 */
