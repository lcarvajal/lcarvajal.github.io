interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface AcknowledgementPage {
  name: string;
  slug: string;
  description: string;
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
        description:
          "A thank-you to Samat Kadyrov, who built things with Lukas at Mimo.",
        photos: [
          {
            src: "/resources/images/people/samat-hiking.JPG",
            alt: "Samat hiking in the mountains",
            caption: "samat-hiking.JPG",
          },
          {
            src: "/resources/images/people/samat-and-lukas-office.jpg",
            alt: "Samat and Lukas together in an office",
            caption: "samat-and-lukas-office.jpg",
          },
          {
            src: "/resources/images/people/samat-and-lukas-waterfall.jpg",
            alt: "Samat and Lukas beside a waterfall",
            caption: "samat-and-lukas-waterfall.jpg",
          },
          {
            src: "/resources/images/people/mimo-triathlon.JPG",
            alt: "The Mimo team at a triathlon",
            caption: "mimo-triathlon.JPG",
          },
          {
            src: "/resources/images/people/samat-and-lukas-chess.jpeg",
            alt: "Samat and Lukas playing chess",
            caption: "samat-and-lukas-chess.jpeg",
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
