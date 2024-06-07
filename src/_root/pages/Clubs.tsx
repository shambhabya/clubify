import Club from "@/components/shared/Club";
let clubs = [
  {
    club_name: "Pixel Painters",
    club_description:
      "Explore digital art software, share techniques & create masterpieces.",
  },
  {
    club_name: "Coding Club",
    club_description: "Build cool apps & websites. Learn to code with us!",
  },
  {
    club_name: "Art Club",
    club_description:
      "Express yourself! Explore various art forms & techniques.",
  },
  {
    club_name: "Music Enthusiasts",
    club_description:
      "Love music? Join us to explore genres, learn instruments & jam!",
  },
  {
    club_name: "Global Tasters",
    club_description:
      "Embark on a culinary adventure! Explore cuisines & share recipes.",
  },
  {
    club_name: "Thespian Society",
    club_description:
      "Unleash your inner performer! Explore theatre & put on student plays.",
  },
  {
    club_name: "Debate Society",
    club_description:
      "Sharpen your arguments & public speaking skills. Debate current issues.",
  },
  {
    club_name: "Movie Buffs",
    club_description:
      "Discuss films, analyze genres & watch classics together!",
  },
  {
    club_name: "Bookworms & Bibliophiles",
    club_description:
      "Love to read? Discuss favorite books & discover hidden gems.",
  },
  {
    club_name: "Green Defenders",
    club_description:
      "Protect our planet! Raise awareness & advocate for sustainable practices.",
  },
];

const Clubs = () => {
  return (
    <div>
      <p className=" flex flex-center text-4xl h3-bold md:h2-bold pt-6">
        Clubs
      </p>
      <div className="flex py-6 justify-center overflow-scroll">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-5/6 ">
          {clubs.map((club) => (
            <Club club={club} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
