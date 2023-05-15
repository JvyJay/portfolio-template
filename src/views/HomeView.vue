<template>
  <div>
    <!-- HERO AREA -->
    <!-- DESKTOP VISIBILITY -->
    <section data-aos="zoom-in" class="my-5 d-none d-xl-block d-lg-block d-md-block d-md-block d-sm-none">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="d-flex flex-column align-items-xxl-start align-items-center text-xxl-start text-center w-25">
            <span class="span-color mb-2">John Doe - Web Developer/Designer</span>
            <div class="d-flex flex-row position-relative">
              <h1 class="fw-bold text-index">Web Developer/Designer Turning Your Vision Into Business <img width="15%" :src=code alt="Code Icon" /></h1>
              <img class="position-absolute top-100 bottom-0 start-0 translate-middle banner-index" width="120px" :src=designbanner alt="Design Banner" />
            </div>
        </div>
        <div class="d-flex flex-column align-items-xxl-end justify-content-xxl-end align-items-center text-xxl-end text-center text-justify right-aligned w-25">
          <p class="grey-text text-index text-xxl-end text-center">I help small businesses begin their marketing/branding campaigns & then implement a fully fleshed functional online store/website to industry standards</p>
          <button class="primary-button fw-medium">
            <img width="10%" :src=mail alt="Mail Icon" />
            contact@gmail.com
          </button>
        </div>
      </div>
    </section>
    <!-- TABLET/ MOBILE VISIBILITY -->
    <section data-aos="zoom-in" class="my-5 container d-xl-none d-lg-none d-md-none w-100">
      <div class="d-flex flex-column justify-content-center align-items-center text-center">
        <span class="span-color mb-2">John Doe - Web Developer/Designer</span>
          <h2 class="fw-bold mobile-friendly">Web Developer/Designer Turning Your Vision Into Business</h2>
          <p class="grey-text text-center">I help small businesses begin their marketing/branding campaigns & then implement a fully fleshed functional online store/website to industry standards</p>
          <button class="primary-button fw-medium">
            <img width="10%" :src=mail alt="Mail Icon" />
            contact@gmail.com
          </button>
        </div>
    </section>
    <!-- HERO AREA END -->


    <!-- PROJECT SHOWCASE -->
    <!-- DESKTOP VISIBILITY -->
    <section class="container d-flex justify-content-center align-items-center mt-5 mx-5 flex-column d-none d-xl-block">
      <h1 data-aos="fade-right"><span class="outline-text">Project Showcase </span></h1>
      <!-- TOP SECTION/GRID -->
      <div class="project-container">
         <ProjectCard
         data-aos="flip-down"
         v-for="project in projects"
         :key="project.id"
         :title="project.title"
         :image="project.image"
         :desc="project.desc"
         :link="project.link"
         />
      </div>
      <!-- BOTTOM SECTION -->
      <div class="d-flex flex-row justify-content-center align-items-start bottom-container ">
        <img data-aos="fade-right" class="mb-5" width="15%" :src=friendspicks alt="Friends Picks Badge" />
        <ProjectCard
        data-aos="flip-up"
        :key="bottomProject.id"
        :title="bottomProject.title"
        :image="bottomProject.image"
        :desc="bottomProject.desc"
        :link="bottomProject.link"
        />
      </div>
    </section>
    <!-- TABLET - PHONE VISIBILITY -->
    <section class="container d-flex justify-content-center align-items-center flex-column mx-auto d-xl-none">
      <h2 data-aos="fade-right"><span class="outline-text">Project Showcase </span></h2>
      <!-- TOP SECTION/GRID -->
      <div class="container d-flex justify-content-center align-items-center flex-row flex-wrap mt-5 mx-auto">
         <ProjectCard
         data-aos="flip-down"
         v-for="project in projects"
         :key="project.id"
         :title="project.title"
         :image="project.image"
         :desc="project.desc"
         :link="project.link"
         />
      </div>
      <!-- BOTTOM SECTION -->
      <div class="d-flex flex-row justify-content-center align-items-start">
        <img data-aos="fade-right" class="mb-5 d-none d-lg-block d-xl-none img-fluid" width="50%" :src=friendspicks alt="Friends Picks Badge" />
        <ProjectCard
        data-aos="flip-up"
        :key="bottomProject.id"
        :title="bottomProject.title"
        :image="bottomProject.image"
        :desc="bottomProject.desc"
        :link="bottomProject.link"
        />
      </div>
    </section>
    <!-- PROJECT SHOWCASE END -->

    <!-- CONTACT & SERVICES SECTION -->
    <section class="container my-5">
      <h2 data-aos="fade-right" class="text-lg-start text-center"><span class="outline-text">Contact & Services</span></h2>
      <div class="d-flex flex-lg-row justify-content-lg-start align-items-lg-center flex-column justify-content-center align-items-center">
        <div data-aos="fade-up-left" class="d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center align-items-center text-lg-start text-center colored-card m-5 p-4">
          <h4 class="text-dark">I`m Building UI Layouts & Functional Interfaces </h4>
          <p class="text-dark fw-normal">Focused on functional, but fluid UI/UX experiences for startups to thriving businesses</p>
          <hr class="text-dark" width="100%">
          <button class='primary-button fw-medium'>About</button>
        </div>
        <div data-aos="fade-up-right" class="w-50 d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center align-items-center text-lg-start text-center">
          <span class="span-color">Contact</span>
          <h2>Want To Learn More? Let`s Get Started</h2>
          <p>feel free to reach out on Linkedin, Twitter or Instagram!</p>
          <button class="primary-button fw-medium">
            <img width="10%" :src=mail alt="Mail Icon" />
            contact@gmail.com
          </button>
        </div>
      </div>
    </section>
    <!-- CONTACT & SERVICES SECTION END -->
    
    <!-- FOOTER -->
    <FooterNav />
  </div>
</template>

<script>
// IMAGES
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import code from '../assets/Code.svg';
import mail from '../assets/mail.svg';
import designbanner from '../assets/design-banner.svg';
import friendspicks from '../assets/FriendsPicks.svg';
// COMPONENTS
import ProjectCard from '../components/Project-Card.vue';
import FooterNav from '../components/FooterNav.vue';

export default {
  name: "HomeView",
  components: {
    ProjectCard,
    FooterNav
  },
  data() {
    return {
      // IMAGE DATA
      code: code,
      mail: mail,
      designbanner: designbanner,
      friendspicks: friendspicks,

      // PROJECT DATA
      projects: [
        {
          id: 1,
          title: 'Amad Furniture',
          image: project1,
          desc: 'Amad Furniture is one of the leading Manufacturer, Wholesaler, Trader And Supplier of Sofa Set, Double Bed etc',
          link: 'https://www.afastores.com/'
        },
        {
          id: 2,
          title: 'Photo Green',
          image: project2,
          desc: `This project is a photography website that showcases the work of professional photographers. The website is designed with a modern and minimalist approach, providing a clean and organized display of the photographers' best work.`,
          link: 'https://www.mpkelley.com/'
        },
        {
          id: 3,
          title: 'FundWatch',
          image: project3,
          desc: 'FundWatch is a secure & private digital wallet on Android that gives you quick access to payments cards, passes, tickets, keys, or IDs that you choose to store on it. The FundWatch Pay app helps you manage your money and your finances.',
          link: 'https://accounts.dwolla.com/sign-up'
        }
      ],
      bottomProject: {
          id: 4,
          title: 'PieMaker',
          image: project4,
          desc: 'Since 1988 The PieMaker has been baking delicious pies with the perfect combination of fresh local produce and spices.',
          link: 'https://www.villagepiemaker.com/'
        },
    }
  }
};
</script>

<style scoped>

/* HERO AREA TEXT */
.right-aligned {
  text-align: right !important;
}

.text-index {
  z-index: 1;
}

.banner-index {
  z-index: 0;
}

.mobile-friendly {
  font-size: 2rem !important;
}

/* PROJECT CONTAINER */
.project-container {
  justify-content: center;
  align-items: center;
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  justify-content: center;
}
.project-container div:nth-child(1) {
  /* width: 70%; */
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
}

.project-container div:nth-child(2) {
  /* width: 80%; */
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.project-container div:nth-child(3) {
  width: 50%;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  place-self: center;
}

.project-container div:nth-child(4) {
  /* width: 30%; */
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
}

/* BOTTOM PROJECT CONTAINER */
.bottom-container {
  margin-top: 50px;
  margin-bottom: 50px;
}
.bottom-container div {
  width: 40%;
}

</style>
