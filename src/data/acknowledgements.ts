interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const mimoTeamPhoto: Photo = {
  src: "/resources/images/people/mimo-team.webp",
  alt: "The Mimo team together",
  caption: "The Mimo team",
};

export interface AcknowledgementPage {
  name: string;
  slug: string;
  photos: Photo[];
}

export interface AcknowledgementGroup {
  title: string;
  names: (string | AcknowledgementPage)[];
}

export const acknowledgementTitle = "A special thanks to the people that";

export const acknowledgementGroups: AcknowledgementGroup[] = [
  {
    title: "Shaped me",
    names: [
      "Milton & Karoline Carvajal",
      "Dr Anthony Krupp",
      "Luis Carlos Perea",
    ],
  },
  {
    title: "Bet on me",
    names: [
      "Dr Gokila Dorai",
      "Dave Carvajal",
      "The Tip Yourself Founders",
      "The Mimo Founders",
      "The Friends in Flats Founders",
      "Andrew Strait",
    ],
  },
  {
    title: "Built things with me",
    names: [
      {
        name: "Samat Kadyrov",
        slug: "samat-kadyrov",
        photos: [
          {
            src: "/resources/images/people/samat-hiking.webp",
            alt: "Samat hiking in the mountains",
            caption: "Samat summiting new heights",
          },
          {
            src: "/resources/images/people/mimo-triathlon.webp",
            alt: "The Mimo team at a triathlon",
            caption: "Competing at the Neusiedlersee triathlon",
          },
          {
            src: "/resources/images/people/samat-and-lukas-waterfall.webp",
            alt: "Samat and Lukas beside a waterfall",
            caption:
              "Stopping for a classic Samat selfie with a waterfall in Kyrgyztan",
          },
          {
            src: "/resources/images/people/samat-and-lukas-chess.webp",
            alt: "Samat and Lukas playing chess",
            caption: "Playing a game of chess on Mariahilferstrasse",
          },
          mimoTeamPhoto,
        ],
      },
      {
        name: "Eric Strohmaier",
        slug: "eric-strohmaier",
        photos: [
          {
            src: "/resources/images/people/eric-fathy-wein-wandern.webp",
            alt: "Eric and Fathy outdoors together",
            caption: "Out walking with Eric and Fathy",
          },
          {
            src: "/resources/images/people/fif-wein-wandern.webp",
            alt: "Friends in Flats team on a walk",
            caption: "A Friends in Flats team walk",
          },
        ],
      },
      {
        name: "Lori Porumb",
        slug: "lori-porumb",
        photos: [
          {
            src: "/resources/images/people/content-team-brunch.webp",
            alt: "The content team together at brunch",
            caption: "Content team brunch",
          },
          {
            src: "/resources/images/people/lori-radu-brunch.webp",
            alt: "Lori and Radu together at brunch",
            caption: "Brunch with Lori and Radu",
          },
          mimoTeamPhoto,
        ],
      },
      {
        name: "Radu Meister",
        slug: "radu-meister",
        photos: [
          {
            src: "/resources/images/people/content-team-brunch.webp",
            alt: "The content team together at brunch",
            caption: "Content team brunch",
          },
          {
            src: "/resources/images/people/fif-hike.webp",
            alt: "Friends in Flats team hiking together",
            caption: "A Friends in Flats team hike",
          },
          {
            src: "/resources/images/people/mimo-brewery.webp",
            alt: "Mimo team together at a brewery",
            caption: "A visit to the brewery with Mimo",
          },
          {
            src: "/resources/images/people/lori-radu-brunch.webp",
            alt: "Lori and Radu together at brunch",
            caption: "Brunch with Lori and Radu",
          },
          mimoTeamPhoto,
        ],
      },
      {
        name: "Joseph O’Brien",
        slug: "joseph-obrien",
        photos: [
          {
            src: "/resources/images/people/joseph.webp",
            alt: "Joseph standing on a mountain summit",
            caption: "Joseph in the mountains",
          },
          {
            src: "/resources/images/people/samat-joseph-triathlon.webp",
            alt: "Samat and Joseph at a triathlon",
            caption: "Samat and Joseph at a triathlon",
          },
          {
            src: "/resources/images/people/joseph-lorenz-portugal.webp",
            alt: "Joseph and Lorenz together in Portugal",
            caption: "Joseph and Lorenz in Portugal",
          },
          {
            src: "/resources/images/people/content-team-brunch.webp",
            alt: "The content team together at brunch",
            caption: "Content team brunch",
          },
          {
            src: "/resources/images/people/joseph-bday.webp",
            alt: "Celebrating Joseph's birthday",
            caption: "Joseph's birthday",
          },
          {
            src: "/resources/images/people/oktoberfest-with-joseph.webp",
            alt: "Joseph and friends together at Oktoberfest",
            caption: "Oktoberfest with Joseph",
          },
          {
            src: "/resources/images/people/skiing-with-joseph.webp",
            alt: "Joseph and friends skiing in the mountains",
            caption: "Skiing with Joseph",
          },
          mimoTeamPhoto,
        ],
      },
      {
        name: "Filip Ruisl",
        slug: "filip-ruisl",
        photos: [
          {
            src: "/resources/images/people/filip-ruisl.webp",
            alt: "Filip Ruisl outdoors",
            caption: "A moment with Filip",
          },
          mimoTeamPhoto,
        ],
      },
      {
        name: "Helene Karlinger",
        slug: "helene-karlinger",
        photos: [
          {
            src: "/resources/images/people/helene-planning.webp",
            alt: "Helene planning with colleagues around a table",
            caption: "Planning together with Helene",
          },
          {
            src: "/resources/images/people/mimo-friends.webp",
            alt: "The Mimo team celebrating together",
            caption: "Celebrating with friends on the Mimo team",
          },
        ],
      },
      {
        name: "Christopher Simerle",
        slug: "christopher-simerle",
        photos: [
          {
            src: "/resources/images/people/christopher-hiking.webp",
            alt: "Christopher hiking in the mountains",
            caption: "Hiking with Christopher",
          },
          {
            src: "/resources/images/people/mimo-friends.webp",
            alt: "The Mimo team celebrating together",
            caption: "Celebrating with friends on the Mimo team",
          },
          mimoTeamPhoto,
        ],
      },
      {
        name: "Filip Greš",
        slug: "filip-gres",
        photos: [
          {
            src: "/resources/images/people/foosball-filip-gres.webp",
            alt: "Filip playing foosball",
            caption: "Playing foosball with Filip",
          },
          {
            src: "/resources/images/people/lukas-working-with-mimo-team.webp",
            alt: "Lukas working with the Mimo team",
            caption: "Working with the Mimo team",
          },
        ],
      },
      {
        name: "Thomas Sattlecker",
        slug: "thomas-sattlecker",
        photos: [
          {
            src: "/resources/images/people/thomas-hiking.webp",
            alt: "Thomas hiking in the mountains",
            caption: "Hiking with Thomas",
          },
          {
            src: "/resources/images/people/thomas-inspecting-the-office.webp",
            alt: "Thomas inspecting the office",
            caption: "Thomas inspecting the office",
          },
          mimoTeamPhoto,
        ],
      },
    ],
  },
];

export const acknowledgementPages: AcknowledgementPage[] = acknowledgementGroups
  .flatMap(({ names }) => names)
  .filter(
    (person): person is AcknowledgementPage => typeof person !== "string",
  );

export const acknowledgementNote =
  "You make life a lot of fun and taught me loads over the years.\nEverything on this site happened because of you.";
