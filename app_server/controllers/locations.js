const homelist = (req, res) => {
  res.render("locations-list", {
    title: "Ojas Services- Wide Range space of Milk And Its Products",
    pageHeader: {
      title: "Ojas Services",
      strapline: "Wide Range space of Milk And Its Products!",
    },
    sidebar:
      "Looking for Milk and a Sweet? Ojas helps you find places to when out and about. Perhaps with Milk, curd or a Sweet?Let Ojas help you find the place you're looking for.",
    locations: [
      {
        name: "Ojas Milk ",
        address: "Suryapet, Available, Road N0.6",
        rating: 4,
        facilities: ["Milk", "Curd", "Sweets"],
        distance: "1Km",
      },
    ],
  });
};
const locationInfo = function (req, res) {
  res.render("location-info", {
    title: "Ojas Services",
    pageHeader: { title: "Ojas Services" },
    sidebar: {
      context:
        "is on Ojas because it has Milk and space to Eat the Sweets with your friends andnfamily and get some Joy.",
      callToAction:
        "If you've been and you like it - or if you don't -➥please leave a review to help other people just like you.",
    },
    location: {
      name: "Ojas Milk",
      address: "Suryapet, Available, Road N0.6",
      rating: 4,
      facilities: ["Milk", "Curd", "Sweets"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday -Saturday",
          opening: "5:00am",
          closing: "9:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          opening: "4:00am",
          closing: "9:00pm",
          closed: false,
        },
      
      ],
      reviews: [
        {
          author: "Narendra  ",
          rating: 5,
          timestamp: "14 August 2024",
          reviewText:
            "Great place.",
        },
        {
          author: "Udaya Sree  ",
          rating: 4,
          timestamp: "16 July 2024",
          reviewText:
            "What a great place. I can't say enough good things about it.",
        },
        {
          author: "Sai Niheth ",
          rating: 3,
          timestamp: "21 June 2023",
          reviewText:
            "It was okay. Halwa wasn't great, and the Milk and Curd were Good.",
        },
      ],
    },
  });
};
const addReview = function (req, res) {
  res.render("location-review-form", {
    title: "Review Ojas  on Ojas Services",
    pageHeader: { title: "Review Ojas" },
  });
};
const contactPage = (req, res) => {
  res.render("contact", {
    title: "Contact Ojas Services",
    pageHeader: { title: "Get in Touch with Ojas Services" },
    sidebar: "Have questions or feedback? We'd love to hear from you!",
  });
};


module.exports = {
  homelist,
  locationInfo,
  addReview,
  contactPage,
};
