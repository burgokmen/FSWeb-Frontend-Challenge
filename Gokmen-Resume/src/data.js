import pizza from "../src/assets/pizza.png";
import cart from "../src/assets/cart.png";
import JAVASCRIPTPng from "../src/assets/JAVASCRIPT.png";
import NODEPng from "../src/assets/NODE.png";
import REACTPng from "../src/assets/REACT.png";
import VS_CODEPng from "../src/assets/VS CODE.png";
import REDUXPng from "../src/assets/REDUX.png";
import FIGMAPng from "../src/assets/FIGMA.png";

const data = {
  tr: {
    header: {
      name: "GÖKMEN",
      title: "Ben Bir Önyüz",
      titleSecond: "Yazılımcı'sıyım...",
      description: "...mükemmel kullanıcı deneyimlerine sahip",
      description2: "sağlam ve ölçeklenebilir ürünleri oluşturmayı seven.",
      to: "TO",
      languageSwitch: "ENGLISH",
    },
    skills: {
      skils: "Yetenekler",
      skillsArr: ["JAVASCRIPT", "NODE", "REACT"],
      skillsArr2: ["VS CODE", "REDUX", "FIGMA"],
      skillsPng: [JAVASCRIPTPng, NODEPng, REACTPng],
      skillsPng2: [VS_CODEPng, REDUXPng, FIGMAPng],
    },
    profile: {
      profile: "Profil",
      title: "Temel Bilgiler",

      profileArr: [
        "Doğum:",
        " Şehir:",
        " Eğitim Durumu:",
        "Tercih Ettiği Rol:",
      ],
      profileArr2: [
        "01.08.1989 ",
        "Berkeley",
        "Boğaziçi Üni. Ekonomi, 2014",
        "Frontend, UI",
      ],
      aboutMe: "Hakkımda",
      aboutMeFirstP:
        "Kod yazmak benim icin bir isten öte yasam bicimine donustu, gec kavustum ve cok mutluyum ",
      aboutMeSecondP:
        "Problem cozmeyi seven bir yapim var, sectigim meslekte bu ve arastirip, ogrenmek cok onemli, bunlarda bende olan ozellikler ",
    },
    projects: {
      title: "Projelerim",

      buttonArr: ["react", "redux", "vercel"],
      projectsArray: [
        {
          title: "Pizza Sipariş Sayfası",
          img: pizza,
          description:
            "React uygulamasıyla yapılmış bir Pizza Sipariş Sitesi Projesi. Ana sayfa , Sipariş Sayfası ve Sipariş Tamamlandı Sayfası SPA kullanılarak oluşturulmuştur.",
          github: "https://github.com/burgokmen/fsweb-s7-challenge-pizza",
          url: "https://pizza-order-page.vercel.app",
          visit: "Siteyi Görüntüle",
        },
        {
          title: "Siparis Sepeti",
          img: cart,
          description:
            "Film siparis sayfasi, fiyat hesaplama, film ekleme kaldirma.",
          github: "https://github.com/burgokmen/fsweb-s11g1-shopping-cart/",
          url: "https://fsweb-s11g1-shopping-cart-nu.vercel.app",
          visit: "Siteyi Görüntüle",
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
      description: "...who likes to craft solid and scalable frontend",
      description2: "products with great user experiences.",
      to: "TÜRKÇE",
      languageSwitch: "'YE GEÇ",
    },
    skills: {
      skils: "Skills",
      skillsArr: ["JAVASCRIPT", "NODE", "REACT"],
      skillsArr2: ["VS CODE", "REDUX", "FIGMA"],
      skillsPng: [JAVASCRIPTPng, NODEPng, REACTPng],
      skillsPng2: [VS_CODEPng, REDUXPng, FIGMAPng],
    },
    profile: {
      profile: "Profile",
      title: "Basic Information",
      profileArr: [
        "Birthday:",
        " Location:",
        "Status of Education:",
        "Preferred Role:",
      ],

      profileArr2: [
        "08.01.1989 ",
        "Berkeley",
        "Boğaziçi Uni. Economics, 2014",
        "Frontend, UI",
      ],
      aboutMe: "About Me",
      aboutMeFirstP:
        "Coding became a lifestyle for me. I did not find it early but it became everything for me",
      aboutMeSecondP:
        "I am problem solver. This is very crucial for this chosen occupation. Being a lifelong learner to catch up new skills needed ",
    },
    projects: {
      title: "Projects",
      buttonArr: ["react", "redux", "vercel"],
      projectsArray: [
        {
          title: "Pizza Challenge",
          img: pizza,
          description:
            "A Pizza Ordering Site Project made with React application. Home page, Order Page and Order Completed Page were created using SPA.",
          github: "https://github.com/burgokmen/fsweb-s7-challenge-pizza",
          url: "https://pizza-order-page.vercel.app",
          visit: "View Site",
        },
        {
          title: "Shopping Cart",
          img: cart,
          description:
            "A movie shopping cart project. You can add, delete , check prices ",
          github: "https://github.com/burgokmen/fsweb-s11g1-shopping-cart/",
          url: "https://fsweb-s11g1-shopping-cart-nu.vercel.app",
          visit: "View Site",
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
