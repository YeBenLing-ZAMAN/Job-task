export const filtersData = [
  {
    id: "fd-1",
    title: "Ratings",
    slug: "ratings",
    type: "radio",
    filtersData: [
      { txt: "4.5 & up", count: "9998", stars: true, value: "4.5" },
      { txt: "4.0 & up", count: "3655", stars: true, value: "4.0" },
      { txt: "3.5 & up", count: "3563", stars: true, value: "3.5" },
      { txt: "3.0 & up", count: "3456", stars: true, value: "3.0" },
    ],
  },
  {
    id: "fd-2",
    title: "Category",
    slug: "Category",
    type: "checkbox",
    filtersData: [
      { txt: "Mobile", count: "1442", stars: false, value: "mobile" },
      { txt: "PC", count: "6918", stars: false, value: "pc" },
      { txt: "Laptop", count: "7240", stars: false, value: "laptop" },
      { txt: "Ram", count: "8498", stars: false, value: "ram" },
      { txt: "CPU", count: "3502", stars: false, value: "cpu" },
    ],
  },
  {
    id: "fd-3",
    title: "Band",
    slug: "Band",
    type: "checkbox",
    filtersData: [
      { txt: "Sony", count: "25635", stars: false, value: "sony" },
      { txt: "Intel", count: "356", stars: false, value: "intel" },
      { txt: "AMD", count: "2345", stars: false, value: "amd" },
      { txt: "ASUS", count: "245", stars: false, value: "asus" },
      { txt: "ANTCE", count: "2452", stars: false, value: "antce" },
    ],
  },
  {
    id: "fd-4",
    title: "Warranty Type",
    slug: "Warranty Type",
    type: "checkbox",
    filtersData: [
      {
        txt: "No Warranty",
        count: "25245",
        stars: false,
        value: "no-warranty",
      },
      {
        txt: "Seller Warranty",
        count: "252435",
        stars: false,
        value: "seller-warranty",
      },
      {
        txt: "Brand Warranty",
        count: "24524",
        stars: false,
        value: "brand-warranty",
      },
      {
        txt: "Non-local Warranty",
        count: "25345",
        stars: false,
        value: "non-local-warranty",
      },
    ],
  },
];
