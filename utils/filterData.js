export const filterData = [
  {
    items: [
      { name: "Buy", value: "for-sale" },
      { name: "Rent", value: "for-rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
    defaultValue: "for-rent",
  },
  {
    items: [
      { name: "Daily", value: "daily" },
      { name: "Weekly", value: "weekly" },
      { name: "Monthly", value: "monthly" },
      { name: "Yearly", value: "yearly" },
    ],
    placeholder: "Rent Frequency",
    queryName: "rentFrequency",
    defaultValue: "yearly",
  },
  {
    items: [
      { name: "10,000", value: "10000" },
      { name: "20,000", value: "20000" },
      { name: "30,000", value: "30000" },
      { name: "40,000", value: "40000" },
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
    ],
    placeholder: "Min Price(AED)",
    queryName: "minPrice",
    defaultValue: "0",
  },
  {
    items: [
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
      { name: "110,000", value: "110000" },
      { name: "135,000", value: "135000" },
      { name: "160,000", value: "160000" },
      { name: "185,000", value: "185000" },
      { name: "200,000", value: "200000" },
      { name: "300,000", value: "300000" },
      { name: "400,000", value: "400000" },
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "700,000", value: "700000" },
      { name: "800,000", value: "800000" },
      { name: "900,000", value: "900000" },
      { name: "1000,000", value: "1000000" },
    ],
    placeholder: "Max Price(AED)",
    queryName: "maxPrice",
    defaultValue: "1000000",
  },
  {
    items: [
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-desc" },
      { name: "Newest", value: "date-asc" },
      { name: "Oldest", value: "date-desc" },
      { name: "Verified", value: "verified-score" },
      { name: "City Level Score", value: "city-level-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
    defaultValue: "price-desc",
  },
  {
    items: [
      { name: "50", value: "50" },
      { name: "100", value: "100" },
      { name: "200", value: "200" },
      { name: "300", value: "300" },
      { name: "400", value: "400" },
      { name: "500", value: "500" },
      { name: "1000", value: "1000" },
    ],
    placeholder: "Max Area(sqft)",
    queryName: "areaMax",
    defaultValue: "35000",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Rooms(Min)",
    queryName: "roomsMin",
    defaultValue: "0",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Baths (Min)",
    queryName: "bathsMin",
    defaultValue: "0",
  },
  {
    items: [
      { name: "Furnished", value: "furnished" },
      { name: "Unfurnished", value: "unfurnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
    defaultValue: "furnished",
  },
  {
    items: [
      { name: "Apartment", value: "4" },
      { name: "Townhouses", value: "16" },
      { name: "Villas", value: "3" },
      { name: "Penthouses", value: "18" },
      { name: "Hotel Apartments", value: "21" },
      { name: "Villa Compound", value: "19" },
      { name: "Residential Plot", value: "14" },
      { name: "Residential Floor", value: "12" },
      { name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "categoryExternalID",
    defaultValue: "4",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    furnishingStatus,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: "purpose",
      value: purpose,
    },
    {
      name: "rentFrequency",
      value: rentFrequency,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },
    {
      name: "areaMax",
      value: areaMax,
    },
    {
      name: "roomsMin",
      value: roomsMin,
    },
    {
      name: "bathsMin",
      value: bathsMin,
    },
    {
      name: "sort",
      value: sort,
    },
    {
      name: "locationExternalIDs",
      value: locationExternalIDs,
    },
    {
      name: "categoryExternalID",
      value: categoryExternalID,
    },
    {
      name: "furnishingStatus",
      value: furnishingStatus,
    },
  ];

  return values;
};
