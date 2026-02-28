import { BlogItemType } from "./types";

export const blogInfo:BlogItemType = {
  title: "Blog world",
  items: [
    {
      title: " What can I afford to do? ",
      link: "https://medium.com/@viswajithvishnusai/what-can-i-afford-to-do-4f93e94647e1?source=rss-e0fdc140a3a9------2",
      tag: "musings",
      imageUrl: "medium-icon.svg",
    },
    {
      title: " Heartfelt Connections: The Emotional Perception of Animals ",
      link: "https://medium.com/@viswajithvishnusai/heartfelt-connections-the-emotional-perception-of-animals-7acbf16e5795?source=rss-e0fdc140a3a9------2",
      tag: "musings",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TKlyV1aaF_YtN87Gvhivyw.jpeg",
    },
    {
      title: " The Monkey Mind? ",
      link: "https://medium.com/@viswajithvishnusai/the-monkey-mind-a567bbd5a948?source=rss-e0fdc140a3a9------2",
      tag: "musings",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:750/format:webp/1*BiAUPF7EW6o087ugGZ3VuA.jpeg",
    },
    {
      title: " Oh captain ! MI captain ! ",
      link: "https://medium.com/@viswajithvishnusai/oh-captain-mi-captain-acd7b3f711e2?source=rss-e0fdc140a3a9------2",
      tag: "sports",
      imageUrl: "medium-icon.svg",
    },
    {
      title: " TM Krishna —and the Thyagaraja connection. ",
      link: "https://medium.com/@viswajithvishnusai/tm-krishna-and-the-thyagaraja-connection-39b810e70113?source=rss-e0fdc140a3a9------2",
      tag: "music",
      imageUrl: "medium-icon.svg",
    },
    {
      title: " A December at Chennai — The Carnatic version ",
      link: "https://medium.com/@viswajithvishnusai/a-december-at-chennai-the-carnatic-version-18facb538267?source=rss-e0fdc140a3a9------2",
      tag: "music",
      imageUrl: "medium-icon.svg",
    },
    {
      title: "Market Segmentation using R",
      link: "/blog/market_segmentation",
      tag: "IBA",
      imageUrl: "Rlogo.svg",
    },
    {
      title: "Market Basket Analysis using R",
      link: "/blog/market_basket_analysis",
      tag: "IBA",
      imageUrl: "Rlogo.svg",
    },
    {
      title: "Customer Review analyis using R",
      link: "/blog/customer_review_analysis",
      tag: "IBA",
      imageUrl: "Rlogo.svg",
    },
    {
      title: "Predictive analytics using R",
      link: "/blog/predictive_analytics",
      tag: "IBA",
      imageUrl: "Rlogo.svg",
    },
    {
      title: "Regression analysis of ten companies using R",
      link: "/blog/regression_project",
      tag: "IBA",
      imageUrl: "Rlogo.svg",
    },
    {
      title: "Management Information Systems",
      link: "/reports/r1",
      tag: "MIS",
      imageUrl: "/mis-icon.png",
      size:125
    },
    {
      title: "Foundations of business intelligence: Database and Information Management",
      link: "/reports/r2",
      tag: "MIS",
      imageUrl: "/mis-icon.png",
      size:125
    },
    {
      title: "Creating a simple blockchain application using Python",
      link: "/blog/Block_Chain",
      tag: "MIS",
      imageUrl: "/python-logo.png",
      size:150
    },
    {
      title:"Watch ! I represented Amrita University at the Times India Economic Conclave",
      link:"https://www.facebook.com/Timesnow/videos/vishnusai-viswajith-tharoor-mba-amrita-school-of-business-coimbatore-says-two-ma/1905995493287314/",
      tag:"musings",
      imageUrl:"/tn_logo.svg",
      size:250
    }
  ],
};

export const htmlBlogInfo: {
  [x: string]: string;
} = {
  market_segmentation: "Document3",
  market_basket_analysis: "Document5",
  customer_review_analysis: "Document6",
  predictive_analytics: "Document8",
  regression_project: "Document9",
  Block_Chain:"Block_Chain"
};
