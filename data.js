// export const travelCards = [
//   {
//     name: "Paris",
//     price: "₹22,425",
//     description: "Experience the romance and charm of the City of Light.",
//     rating: 4.8,
//     image: "/images/paris.jpg",
//     buttonText: "Book Now",
//   },
//   {
//     name: "Swiss Alps",
//     price: "₹22,425",
//     description: "Discover breathtaking mountain views and pristine nature.",
//     rating: 4.9,
//     image: "/images/swissalps.jpg",
//     buttonText: "Book Now",
//     availableAllYear: true,
//     flightIncluded: true,
//   },
//   {
//     name: "Thailand",
//     price: "₹22,425",
//     description: "Explore exotic beaches and vibrant cultural experiences.",
//     rating: 4.7,
//     image: "/images/thailand.jpg",
//     buttonText: "Book Now",
//   },
// ];

const travelPackages = {
  japan: {
    slug: "japan01",
    country: "Japan",
    images:
      "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 175000,
    description: "An island nation in East Asia, known for its rich culture, advanced technology, stunning landscapes, and iconic landmarks like cherry blossoms and Mount Fuji.",
    rating: 4.7,
    btn: "Read More",
    url:"/packages-details/japan",
    itinerary: {
      day1: {
        title: "Tokyo Arrival",
        details: "Tokyo arrival, Transfer to hotel and stay at Tokyo. (Dinner)",
      },
      day2: {
        title: "Tokyo Local",
        details:
          "Visit Asakusa Temple Complex, Nakamise Shopping area, Shinjuku Garden, photo stops at Tokyo Skytree, Tokyo Tower, and Rainbow Bridge, then visit Shibuya Sky for a 360° open-air observation deck view. (Breakfast)",
      },
      day3: {
        title: "Mt. Fuji - Hakone - Hiroshima (Bullet Train Journey)",
        details:
          "Proceed to Mt. Fuji 5th Station, explore Owakudani, ride Hakone Ropeway, take a cruise on Lake Ashi. Later board a bullet train to Hiroshima. (Breakfast)",
      },
      day4: {
        title: "Hiroshima - Miyajima - Osaka",
        details:
          "Visit Miyajima Shrine and Floating Torii Gate, Hiroshima Peace Park, and museum, then travel to Osaka. (Breakfast)",
      },
      day5: {
        title: "Osaka - Kyoto - Osaka",
        details:
          "Walk through Arashiyama Bamboo Grove, Togetsukyo Bridge, Golden Pavilion, Gion, Fushimi Inari Shrine, and Osaka Castle. (Breakfast)",
      },
      day6: {
        title: "Osaka - Nara - Kaiyukan Aquarium - Osaka",
        details:
          "Visit Nara Deer Park, Todaji Temple, and Kaiyukan Aquarium. (Breakfast, Dinner)",
      },
      day7: {
        title: "Osaka - Mumbai",
        details: "Transfer to the airport for departure. (Breakfast)",
      },
    },
    inclusions: {
      accommodation: true,
      mealPlan: "Breakfast",
      sightseeing: "Mentioned in itinerary",
      transfers: "All transfers on SIC",
    },
  },
  europe: {
    slug: "europe02",
    country: "Multiple (Europe)",
    images:
      "https://images.pexels.com/photos/753337/pexels-photo-753337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 214000,
    description: "A continent in the Northern Hemisphere, known for its rich history, cultural diversity, and iconic landmarks, blending ancient traditions with modern developments.",
    rating: 4.7,
    btn: "Read More",
    url:"/packages-details/europe",
    itinerary: {
      day1: {
        title: "Arrival in London",
        details:
          "Welcome to London! After arriving, head to your hotel and take some time to settle in. Enjoy a pleasant dinner and relax as you prepare for the exciting days ahead. Meals: Dinner | Overnight: London",
      },
      day2: {
        title: "Exploring London",
        details:
          "Start your day with a guided tour of London’s famous landmarks: Big Ben, Houses of Parliament, Westminster Abbey, Trafalgar Square, Piccadilly Circus, Tower Bridge, and Hyde Park. Watch the Changing of the Guard at Buckingham Palace (subject to operations). Visit Madame Tussauds and the Tower of London, where you can admire the Crown Jewels. Experience a breathtaking view of the city with a ride on the London Eye. Meals: Breakfast | Lunch | Dinner | Overnight: London",
      },
      day3: {
        title: "London to Paris by Eurostar",
        details:
          "Board the Eurostar train and travel to Paris. Upon arrival, visit the Louvre Museum to see the famous Mona Lisa. In the evening, enjoy a relaxing Seine River Cruise. Meals: Breakfast | Lunch | Dinner | Overnight: Paris",
      },
      day4: {
        title: "Paris Sightseeing",
        details:
          "Visit the Eiffel Tower and go up to the third level for amazing views of the city. Explore the grand Versailles Palace. Continue with a guided tour of Paris, visiting places like the Arc de Triomphe, Champs-Élysées, Concorde Square, and Notre Dame Cathedral. Meals: Breakfast | Lunch | Dinner | Overnight: Paris",
      },
      day5: {
        title: "Paris to Brussels",
        details:
          "Leave Paris and travel to Brussels. Visit the stunning Grand Place, see the Manneken Pis statue, and stop for photos at the Atomium. Later, continue your journey to the Netherlands. Meals: Breakfast | Lunch | Dinner | Overnight: Netherlands",
      },
      day6: {
        title: "A Day in the Netherlands",
        details:
          "Spend the day exploring the Netherlands. Visit the beautiful Keukenhof Gardens (if open) or explore the miniature park Madurodam. Visit a cheese and wooden shoe factory to see traditional Dutch crafts. Later, enjoy a relaxing canal cruise in Amsterdam. Meals: Breakfast | Lunch | Dinner | Overnight: Netherlands",
      },
      day7: {
        title: "Travel to Cologne, Germany",
        details:
          "Head to Cologne and visit the famous Cologne Cathedral. Afterwards, take a scenic cruise along the Rhine River, enjoying the picturesque views. Meals: Breakfast | Lunch | Dinner | Overnight: Germany",
      },
      day8: {
        title: "Black Forest and Switzerland",
        details:
          "Travel to the Black Forest region, known for its cuckoo clocks and beautiful scenery. Visit the charming Titisee Lake and a local clock-making workshop. Later, head to Switzerland and visit the breathtaking Rhine Falls, Europe’s largest waterfall. Meals: Breakfast | Lunch | Dinner | Overnight: Central Switzerland",
      },
      day9: {
        title: "Mt. Titlis and Lucerne",
        details:
          "Take a thrilling cable car ride to the top of Mt. Titlis, where you’ll experience stunning views of the snow-capped Alps. Afterward, enjoy a boat cruise on the tranquil Lake Lucerne. Meals: Breakfast | Lunch | Dinner | Overnight: Central Switzerland",
      },
      day10: {
        title: "Jungfraujoch and Interlaken",
        details:
          "Embark on an exciting trip to Jungfraujoch, known as the 'Top of Europe,' where you’ll experience incredible mountain views. End the day with a visit to the picturesque town of Interlaken. Meals: Breakfast | Lunch | Dinner | Overnight: Central Switzerland",
      },
      day11: {
        title: "Switzerland to Innsbruck",
        details:
          "Travel through Switzerland and stop in Vaduz, the capital of Liechtenstein, for a city tour. Continue to Innsbruck, Austria, and visit the famous Swarovski Crystal Museum. End the day with an orientation tour of Innsbruck. Meals: Breakfast | Lunch | Dinner | Overnight: Tyrol, Austria",
      },
      day12: {
        title: "Venice",
        details:
          "Arrive in Venice and enjoy a boat ride to the city. Explore Venice’s narrow streets and canals on a walking tour, then take a scenic gondola ride through the city’s waterways. Meals: Breakfast | Lunch | Dinner | Overnight: Veneto Region, Italy",
      },
      day13: {
        title: "Pisa and Florence",
        details:
          "Visit Pisa and see the famous Leaning Tower in the Square of Miracles. Continue to Florence for a guided walking tour of this beautiful Renaissance city. Meals: Breakfast | Lunch | Dinner | Overnight: Tuscany, Italy",
      },
      day14: {
        title: "Rome and Vatican City",
        details:
          "Discover the wonders of Rome with a guided tour. Visit the Colosseum and Trevi Fountain, then explore Vatican City, including the Vatican Museum, Sistine Chapel, and St. Peter’s Basilica. Meals: Breakfast | Lunch | Dinner | Overnight: Rome",
      },
      day15: {
        title: "Departure from Rome",
        details:
          "After breakfast, it’s time to say goodbye to Europe. You’ll be transferred to the airport for your flight home. Meals: Breakfast",
      },
    },
    inclusions: {
      accommodation: "Mentioned as per itinerary",
      mealPlan: "Breakfast",
      citiesCovered:
        "London, Paris, Brussels, Amsterdam, Cologne, Lucerne, Interlaken, Innsbruck, Vienna, Venice, Pisa, Florence, Rome, Vatican",
      sightseeing: "As mentioned in the itinerary",
      transfers: "All sightseeing by private coach",
      visaProcessing: "Included (one-time process)",
    },
  },
  australia: {
    slug: "australia03",
    country: "Australia",
    images:
      "https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Australia, located in the Southern Hemisphere, is known for its unique wildlife, iconic landmarks like the Sydney Opera House, and diverse landscapes.",
      rating: 4.7,
      btn: "Read More",
      url:"/packages-details/australia",
    price: 245000,
    itinerary: {
      day1: {
        title: "Mumbai - Sydney",
        details:
          "Mumbai as per the scheduled flight departure time proceed to Sydney. Upon arrival, proceed to the city. Welcome to Sydney – largest city of Australia situated on the coast between Blue Mountains and Tasman Sea, also listed as one of the world’s most livable cities. Transfer to hotel and relax.",
      },
      day2: {
        title: "Sydney - Blue Mountain Tour",
        details:
          "Breakfast. Coach pick up commences Blue Mountain Tour. Upon arrival at Blue Mountain, take a tour of Katoomba & visit Echo Point to see the 3 SISTERS Rock Formation. The Blue Mountains was declared a World Heritage park in November 2000. Visit the Featherdale Wildlife Park – cuddle the Koalas & play with the Kangaroos. Evening return to Sydney.",
      },
      day3: {
        title:
          "Sydney - Opera House - Sydney Tower - Sea Aquarium - Showboat Cruise",
        details:
          "After breakfast, take a city tour starting with Australia’s most famous surf beach Bondi. City tour includes the Rocks, the Opera House, the Harbour Bridge, Darling Harbour, Chinatown, and Cosmopolitan Kings Cross. Visit the Sydney Opera Theatre, Sydney Sea Life Aquarium, and Sydney Tower for breathtaking views. Drop at hotel to relax for a while, followed by a Showboat Dinner Cruise featuring performances and dinner. Overnight in Sydney.",
      },
      day4: {
        title: "Sydney - Cairns - Kuranda Rainforest",
        details:
          "After breakfast, transfer to Sydney Airport for flight departing to Cairns. Arrive at Cairns Domestic Airport, pick up by coach & transfer to Kuranda Rainforest. Explore the Skyrail Rainforest Cableway, traverse the tropical rainforest with your guide aboard an Army Duck amphibious vehicle. Evening free. Overnight in Cairns.",
      },
      day5: {
        title: "Cairns - Great Barrier Reef",
        details:
          "Breakfast at the hotel. Transfer to Big Cat Green Island Reef Cruises. Relax on the beach or experience the underwater marvels through a glass-bottom boat. Evening return to the hotel.",
      },
      day6: {
        title: "Cairns - Melbourne",
        details:
          "Morning flight to Melbourne. See landmarks like Federation Square, St. Paul’s Cathedral, and the Royal Exhibition Building. Drive to Phillip Island and witness the Penguin Parade. Overnight in Melbourne.",
      },
      day7: {
        title: "Melbourne - Great Ocean Road",
        details:
          "Breakfast at the hotel; Experience the iconic Great Ocean Road with stunning ocean views, the Twelve Apostles, Otways National Park, and more. Return to Melbourne for overnight stay.",
      },
      day8: {
        title: "Melbourne - MCG Visit - Phillip Island",
        details:
          "Visit Melbourne Cricket Ground from inside (subject to availability). Proceed to Phillip Island to witness the spectacular world-famous Penguin Parade. Overnight in Melbourne.",
      },
      day9: {
        title: "Australia - India",
        details:
          "Early morning transfer to Melbourne Airport for the return flight to Mumbai. Tour concludes.",
      },
    },
    inclusions: {
      accommodation: "All accommodations as per itinerary",
      mealPlan: "Breakfast and Dinner",
      sightseeing: "Entry fees for all places mentioned in the itinerary",
      transfers: "All transfers and transportation as per the itinerary",
    },
  },
};

export default travelPackages;
