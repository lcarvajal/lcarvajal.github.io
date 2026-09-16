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
      "Eric Strohmaier",
      "Lori Porumb",
      "Radu Meister",
      "Joseph O’Brien",
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
