interface Photo {
  src: string;
  alt: string;
  caption: string;
}

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
        ],
      },
      {
        name: "Joseph O’Brien",
        slug: "joseph-obrien",
        photos: [
          {
            src: "/resources/images/people/joseph-lorenz-portugal.webp",
            alt: "Joseph and Lorenz together in Portugal",
            caption: "Joseph and Lorenz in Portugal",
          },
          {
            src: "/resources/images/people/joseph-bday.webp",
            alt: "Celebrating Joseph's birthday",
            caption: "Joseph's birthday",
          },
          {
            src: "/resources/images/people/samat-joseph-triathlon.webp",
            alt: "Samat and Joseph at a triathlon",
            caption: "Samat and Joseph at a triathlon",
          },
          {
            src: "/resources/images/people/content-team-brunch.webp",
            alt: "The content team together at brunch",
            caption: "Content team brunch",
          },
        ],
      },
      "Filip Ruisl",
      "Helene Karlinger",
      "Christopher Simerle",
      "Filip Greš",
      "Thomas Sattlecker",
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
