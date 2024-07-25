import stayBnbHome from './image/StayBnb/stayBnbHome.png'
import stayBnbHome2 from './image/StayBnb/stayBnbHome2.png'
import stayBnbProperty from './image/StayBnb/stayBnbProperty.png'
import stayBnbSignUp from './image/StayBnb/stayBnbSignUp.png'
import stayBnbSignIn from './image/StayBnb/stayBnbSignIn.png'
import stayBnbPayment from './image/StayBnb/stayBnbPayment.png'
import stayBnbProperty2 from './image/StayBnb/stayBnbProperty2.png'
import sparkleHome from './image/Sparkle/sparkleHome.png'
import sparkleProduct from './image/Sparkle/sparkleProduct.png'
import sparkleSignUp from './image/Sparkle/sparkleSignUp.png'
import sparkleSignIn from './image/Sparkle/sparkleSignIn.png'
import sparkleWishlist from './image/Sparkle/sparkleWishlist.png'
import sparkleCart from './image/Sparkle/sparkleCart.png'
import sparkleStore from './image/Sparkle/sparkleStore.png'
import eventHome from './image/eventMestro/eventHome.png'
import eventHome2 from './image/eventMestro/eventHome2.png'
import eventHome3 from './image/eventMestro/eventHome3.png'
import eventCard from './image/eventMestro/eventCard.png'
import eventLogin from './image/eventMestro/eventLogin.png'
import eventCreator from './image/eventMestro/eventCreator.png'
import eventDetails from './image/eventMestro/eventDetails.png'

const projectsData = {
  portfolio: [
    
    {
      title: "Sparkle",
      images: [sparkleHome,sparkleProduct,sparkleStore, sparkleSignUp,sparkleSignIn,sparkleWishlist,sparkleCart],
      githubLink: "https://github.com/Anujkumar960/Sparkle",
      liveLink: "https://sparkle-clone.netlify.app/",
      about: "Sparkle is a captivating online jewelry platform, created as a clone, inspired by the elegance and craftsmanship of Tanishq. Our mission is to provide users with a simulated experience of exploring a curated collection of exquisite jewelry pieces that symbolize life's special moments."
    },
    {
      title: "Staybnb",
      images: [stayBnbHome,stayBnbHome2, stayBnbProperty,stayBnbProperty2, stayBnbSignUp, stayBnbSignIn,stayBnbPayment],
      githubLink: "https://github.com/AbhinavTyagi30/StayBnB",
      liveLink: "https://stay-bnb-in.vercel.app/",
      about: "Your go-to platform for unique accommodations worldwide. Inspired by Airbnb, StayBnb offers seamless booking for diverse lodging options, from vacation rentals to boutique hotels. With user-friendly features, StayBnb redefines travel, ensuring memorable stays wherever you go. Join us and explore the world like never before."
    },
    {
      title: "Event Maestro",
      images: [eventHome, eventHome2,eventHome3,eventCard,eventDetails,eventLogin,eventCreator],
      githubLink: "https://github.com/bgpkrishna123/EventMaestro",
      liveLink: "https://event-maestro-jfkz.vercel.app/",
      about: "Event Maestro is a website designed for event planners and ticket booking. It helps organizers plan events and allows attendees to purchase tickets easily."
    },
  ]
};

export default projectsData;
