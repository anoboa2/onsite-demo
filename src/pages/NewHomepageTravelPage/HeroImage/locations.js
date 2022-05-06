const locations = [
  {
    "City": "New York",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Los Angeles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Chicago",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Miami",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Dallas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Philadelphia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Houston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Atlanta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": "admin"
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "District of Columbia",
    "capital": "primary"
  },
  {
    "City": "Boston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": "admin"
  },
  {
    "City": "Phoenix",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": "admin"
  },
  {
    "City": "Seattle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "San Francisco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Detroit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "San Diego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Minneapolis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Tampa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Denver",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": "admin"
  },
  {
    "City": "Brooklyn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Queens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Riverside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Baltimore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Las Vegas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Portland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "San Antonio",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "St. Louis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Sacramento",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": "admin"
  },
  {
    "City": "Orlando",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "San Jose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cleveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Pittsburgh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Austin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": "admin"
  },
  {
    "City": "Cincinnati",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Kansas City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Manhattan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Indianapolis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": "admin"
  },
  {
    "City": "Columbus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": "admin"
  },
  {
    "City": "Charlotte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Virginia Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bronx",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Milwaukee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": "admin"
  },
  {
    "City": "Jacksonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Salt Lake City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": "admin"
  },
  {
    "City": "Nashville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": "admin"
  },
  {
    "City": "Richmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": "admin"
  },
  {
    "City": "Memphis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Raleigh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": "admin"
  },
  {
    "City": "New Orleans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Louisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Oklahoma City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": "admin"
  },
  {
    "City": "Bridgeport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Buffalo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fort Worth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Hartford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": "admin"
  },
  {
    "City": "Tucson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Omaha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "El Paso",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Honolulu",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": "admin"
  },
  {
    "City": "McAllen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Hempstead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Albuquerque",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Birmingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Sarasota",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Dayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Rochester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fresno",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Allentown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Tulsa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Cape Coral",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Colorado Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Charleston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Grand Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Mission Viejo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Albany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": "admin"
  },
  {
    "City": "Knoxville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Bakersfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ogden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Baton Rouge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": "admin"
  },
  {
    "City": "Akron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "New Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Columbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": "admin"
  },
  {
    "City": "Mesa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Palm Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Provo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Worcester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Murrieta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Brookhaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wichita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Toledo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Staten Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Des Moines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": "admin"
  },
  {
    "City": "Long Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Port St. Lucie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Denton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": "admin"
  },
  {
    "City": "Reno",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Harrisburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": "admin"
  },
  {
    "City": "Little Rock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": "admin"
  },
  {
    "City": "Oakland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Durham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Winston-Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Bonita Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Indio",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Palm Coast",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Chattanooga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Spokane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Syracuse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lancaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Arlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Stockton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Poughkeepsie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Augusta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Boise",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": "admin"
  },
  {
    "City": "Oxnard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Scranton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Modesto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kissimmee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Aurora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Youngstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Fayetteville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Anaheim",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pensacola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Victorville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lancaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Greensboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Corpus Christi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Fort Wayne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Santa Ana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Flint",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Islip",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fayetteville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": "admin"
  },
  {
    "City": "Santa Rosa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lansing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": "admin"
  },
  {
    "City": "Lexington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Ann Arbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Henderson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Huntsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Mobile",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Fort Collins",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Asheville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Santa Clarita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "St. Paul",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": "admin"
  },
  {
    "City": "Antioch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lakeland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Oyster Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Trenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": "admin"
  },
  {
    "City": "Lincoln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": "admin"
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Anchorage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Plano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Irvine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Davenport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Rockford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Newark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "South Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Shreveport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Round Lake Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Savannah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Myrtle Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Chula Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Eugene",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lubbock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Reading",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Winter Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": "admin"
  },
  {
    "City": "St. Petersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lafayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Laredo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Jersey City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Columbus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Chandler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "McKinney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Scottsdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Killeen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Tallahassee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": "admin"
  },
  {
    "City": "Peoria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wilmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Montgomery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": "admin"
  },
  {
    "City": "Gilbert",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Glendale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "North Las Vegas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Chesapeake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Barnstable",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Norfolk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fremont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kennewick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Garland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Irving",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Visalia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Atlantic City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Paradise",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Nashua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Arlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Hialeah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "York",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "North Hempstead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Evansville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Avondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Brownsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Gulfport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Appleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Bremerton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hickory",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Tacoma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "San Bernardino",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "College Station",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Kalamazoo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Thousand Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Roanoke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fontana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Moreno Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Babylon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Port",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fargo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Green Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Spring Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Amarillo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Portland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Santa Barbara",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Gainesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Huntington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Olympia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": "admin"
  },
  {
    "City": "Frisco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Yonkers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Norwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Glendale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Huntington Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Deltona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Aurora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Tempe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Overland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Grand Prairie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Sunrise Manor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Waco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Salinas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Waterbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Clarksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Cedar Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Sioux Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Huntington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Ontario",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hagerstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Erie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Vancouver",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Nampa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Spartanburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Gastonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Fort Lauderdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lorain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Murfreesboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "High Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Newport News",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Rancho Cucamonga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hemet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Santa Cruz",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Danbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Peoria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Oceanside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Elk Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pembroke Pines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Vallejo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Garden Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Enterprise",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Medford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Cary",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Marysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Corona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ocala",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fredericksburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Gainesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Champaign",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Alexandria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Hayward",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": "admin"
  },
  {
    "City": "Lakewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Lafayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Frederick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Lake Charles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Odessa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Tuscaloosa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Warner Robins",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Palmdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hollywood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Midland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Leesburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Port Arthur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Muskegon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Macon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Kansas City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Sunnyvale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pomona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Escondido",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pasadena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "New Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Fairfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Naperville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bellevue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Binghamton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Elkhart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Topeka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": "admin"
  },
  {
    "City": "Joliet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Beaumont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Paterson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Merced",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pueblo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Tyler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Torrance",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Yuma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Metairie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Surprise",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Columbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Athens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Roseville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Thornton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Miramar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pasadena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mesquite",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Olathe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Santa Maria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Houma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Carrollton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Grand Junction",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Charleston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": "admin"
  },
  {
    "City": "Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Fullerton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Greeley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Las Cruces",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Panama City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Harlingen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ramapo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Valley City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Hampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Warren",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Mauldin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Bloomington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Coral Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Round Rock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Yakima",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Sterling Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Kent",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Bellingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Santa Clara",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Racine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Stamford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Elizabeth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Johnson City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Lynchburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Simi Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Amherst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fort Smith",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Kenosha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Norman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "South Lyon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Boulder",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Abilene",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lehigh Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pearland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Berkeley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Richardson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Redding",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Arvada",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "East Los Angeles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "St. George",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Billings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Yuba City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rochester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Leominster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Kingsport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Duluth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Rock Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Gilroy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cambridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Sugar Land",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Texas City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Iowa City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Saginaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Chico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Dover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": "admin"
  },
  {
    "City": "Clearwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Coeur d'Alene",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Seaside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Independence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Smithtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Jordan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Brandon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bloomington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "El Monte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Charleston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Carlsbad",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "St. Cloud",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Temecula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Clovis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Meridian",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "The Woodlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Westminster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Costa Mesa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Utica",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Pompano Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "West Palm Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Waterloo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Everett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "El Centro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Santa Fe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": "admin"
  },
  {
    "City": "Downey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Spring Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lowell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Centennial",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Elgin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Richmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Broken Arrow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Miami Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Jurupa Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sandy Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Gresham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Lewisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Hillsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "San Buenaventura",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Jacksonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Pottstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Inglewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "League City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Eau Claire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Turlock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Temple",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Sioux City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Salisbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Davie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Daly City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Highlands Ranch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Allen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "West Covina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sparks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Wichita Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "San Mateo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Columbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Norwalk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rialto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Manteca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Arden-Arcade",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "El Cajon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Burbank",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Longmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Lakewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Renton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Logan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Prescott Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Vacaville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Edinburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Carmel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Spokane Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "San Angelo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "La Crosse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Edison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Idaho Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Holland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Charlottesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Longview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Woodbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Tracy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bismarck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": "admin"
  },
  {
    "City": "Orem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Compton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sunrise",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Quincy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lynn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "South Gate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kirkland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Westminster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Germantown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Santa Monica",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Miami Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "San Leandro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Citrus Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "State College",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hawthorne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Whittier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Clifton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Milpitas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Alhambra",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Upper Darby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mountain View",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Buena Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Silver Spring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Somerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Deerfield Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cicero",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lawrence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Cheyenne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": "admin"
  },
  {
    "City": "Tustin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lakewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pine Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "New Rochelle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Alameda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Watsonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Davis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bellflower",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Baldwin Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Centreville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Camden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Evanston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "New Britain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Pawtucket",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Lauderhill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wilmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Lynwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Passaic",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Gaithersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Union City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "South San Francisco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mount Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Redondo Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Tamarac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Florence-Graham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Schenectady",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bayonne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "East Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Brentwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Miami",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Skokie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Pico Rivera",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Montebello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Bergen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "The Hammocks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "National City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Coconut Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fountainebleau",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "La Habra",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Malden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "South Whittier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "West Allis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Taylorsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Monterey Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Gardena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cupertino",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "La Mesa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Brookline",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Margate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Carson City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": "admin"
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Union",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "White Plains",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Jefferson City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": "admin"
  },
  {
    "City": "Arcadia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Huntington Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Medford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Tamiami",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kendale Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "New Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fountain Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ithaca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Oak Lawn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Berwyn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Aloha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Irvington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rosemead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Paramount",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Revere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Aspen Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Helena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": "admin"
  },
  {
    "City": "West New York",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hoboken",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Oak Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Levittown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Perth Amboy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Placentia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Aliso Viejo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Country Club",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Plainfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Wheaton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "North Bethesda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Cerritos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lakewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Bloomfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Cypress",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hollister",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ceres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "University",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Antelope",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "La Mirada",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Highlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Florin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Covina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rye",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Everett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Arlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Oakland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Altadena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Lauderdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hackensack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Cleveland Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": "admin"
  },
  {
    "City": "Annandale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Rohnert Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "North Miami Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Whitney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Freeport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "San Bruno",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hicksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Babylon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bell Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Campbell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Woonsocket",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Greenacres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wilkes-Barre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Teaneck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Montclair",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "San Gabriel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hallandale Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Keizer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Chelsea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "La Puente",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Waipahu",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Annapolis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": "admin"
  },
  {
    "City": "Culver City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Frankfort",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": "admin"
  },
  {
    "City": "Northglenn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Fort Lee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lake Worth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kendall West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Montclair",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "La Presa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Stanton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "East Meadow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mission Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Egypt Lake-Leto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Richmond West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Valley Stream",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hanover Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "South Miami Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Aventura",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Park Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "West Hollywood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Richfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Kearns",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Lincoln Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lauderdale Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Belleville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Watertown Town",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Foothill Farms",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Elmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Temple City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Chillum",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Bell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Westmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Manhattan Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Englewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Buenaventura Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Oildale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Norristown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Montgomery Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "University City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Midvale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Golden Glades",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Chester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Foster City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Beverly Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Glendale Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fair Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Long Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Eastchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Little River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fair Lawn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Huntington Station",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Lawndale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mount Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Spring Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "College Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Eastpointe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Franklin Square",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Uniondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Juneau",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": "admin"
  },
  {
    "City": "Garfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Parkville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Miami Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Ridley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "San Pablo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Burlingame",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Oceanside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "City of Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sterling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Long Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Santa Paula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "San Carlos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rahway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bay Shore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Westchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Suisun City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "West Falls Church",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Golden Gate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Oak Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "East Palo Alto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Port Chester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Nutley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Shamokin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Englewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Burbank",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Winchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Melrose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Drexel Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Isla Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mililani Town",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Imperial Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bergenfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Ladera Ranch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Easton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Indiana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Reisterstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Maywood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Belmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kiryas Joel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lemon Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lindenhurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Whittier-Los Nietos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Leisure City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "University Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Soledad",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cliffside Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Belmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Cloverleaf",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Decatur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Ewa Gentry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "San Lorenzo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "El Cerrito",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Coral Terrace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "South Pasadena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Bradenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Palm Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "University Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Terrytown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Riverbank",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Maplewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Baldwin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Melrose Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Palm Tree",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Herndon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Rockville Centre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Suitland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Watauga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Woodlawn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Lodi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "San Fernando",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Peekskill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mill Creek East",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Tysons",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bailey's Crossroads",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Elmwood Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Oak Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Valinda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Lynnwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Rosemont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cudahy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Copiague",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Winter Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hialeah Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Carteret",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "West Puente Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Maywood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Monsey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Rancho Dominguez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Blue Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Willowbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ives Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Landover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "The Crossings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Millbrae",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "West Carson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lealman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hayesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Hillside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Jasmine Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lennox",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Roselle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sunny Isles Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Massapequa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Bay Shore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kapolei",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Dover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hamtramck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "McNair",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Mountlake Terrace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "North Plainfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sweetwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "North Bellmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Palisades Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "South El Monte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Columbia Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Lomita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bayshore Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Harrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "West Chester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "South San Jose Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Elmwood Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "West Hempstead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Norwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Franconia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Albany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "La Crescenta-Montrose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Central Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Langley Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Schofield Barracks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Lynbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hermosa Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Morristown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sherrelwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Mineola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Evergreen Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bellaire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Point Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hawthorne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bellwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "North Valley Stream",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Seabrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Avenel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sudley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Winthrop",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "North Massapequa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bryn Mawr-Skyway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "North Amityville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Brookfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Rutherford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Merrifield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Idylwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Hyattsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Iselin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mountain House",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Burke Centre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Takoma Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Dover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Cedar Mill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Greenfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pinewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kingstowne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Dumont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Country Walk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Manassas Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Woodmere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "South Houston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Massapequa Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wahiawa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Lansdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hybla Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Brownsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "East Cleveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Glassmanor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Roosevelt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Live Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Clayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Glenmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Bull Run",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bostonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Artesia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Orange Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "New Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Ojus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "East Riverdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Four Corners",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Hillcrest Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Adelphi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Hazel Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Stanford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "East San Gabriel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Vincent",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cherryland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Walnut Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Floral Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "White Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Parkway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "East Rancho Dominguez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Eggertsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Arlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "McFarland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Palmetto Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Parlier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "West University Place",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "La Palma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Avocado Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pacific Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Asbury Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bellmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Berkley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Westbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "La Grange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wilkinsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fords",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "South Farmingdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "North New Hyde Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Seaford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kenmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ocean Pointe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Newport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "New Cassel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lemon Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kemp Mill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Pierre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": "admin"
  },
  {
    "City": "Falls Church",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Weehawken",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Haddon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Ewa Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Halawa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "North Fair Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Stone Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hawaiian Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Norridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Willowick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Waimalu",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Franklin Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Olympia Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Chicago Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Collingswood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Whitefish Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Bexley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Harper Woods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Princeton Meadows",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Highland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Forest Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Roselle Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Grover Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Edgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Huntington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "La Grange Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Shorewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Coatesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sugarland Run",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "New Carrollton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Ridgefield Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Key Biscayne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Federal Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Cornelius",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Kingston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ardmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "University Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Wilton Manors",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Clarkston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Lantana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pelham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cherry Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Minnehaha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Patchogue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Oak Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "North Merrick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Home Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Salisbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Emeryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hasbrouck Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Red Bank",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "South Miami",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Clawson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Newman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Naranja",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "View Park-Windsor Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Wantagh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bothell East",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Alum Rock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Westwood Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Yeadon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wallington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Waipio",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Maili",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "River Edge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Signal Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Piedmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rossmoor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Guttenberg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Summit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Orange Cove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Suffern",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "La Riviera",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Little Ferry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Darby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Northbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lansdowne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "North Lindenhurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lincoln Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Richmond Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Jacinto City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "East Whittier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Boulder Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lake Stickney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Great Neck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Haverstraw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bound Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Citrus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Charter Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Capitola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Del Aire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Country Club",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Timberlane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Watervliet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Inwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "White City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Marina del Rey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Stonegate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "West Perrine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "East Rockaway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "New Hyde Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Brookdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Westgate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "West Athens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Aiea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Keansburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Maywood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bladensburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Wood-Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Brentwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Woodlyn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "South Amboy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Leisure World",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "North Kensington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Leonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Farmingdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Plainedge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Stony Brook University",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Folsom",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Collingdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "West Miami",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "New Square",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Seven Corners",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Greenbriar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Coral Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Swissvale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Audubon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Malverne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "August",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Midway City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bogota",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Garden City Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Grandview Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Harwood Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Haledon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Dormont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Alondra Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Four Corners",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Cheviot",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Broadview Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "South San Gabriel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mount Rainier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Maplewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "North Bay Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Conshohocken",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bellevue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Paloma Creek South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Caldwell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Temple Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Riverside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Glenside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wilson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Rio Bravo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Guadalupe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Boyes Hot Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Fanwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Holtville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "East Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Baldwin Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Calumet Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Glen Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hatboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Waikele",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Hillcrest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Park City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Montpelier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": "admin"
  },
  {
    "City": "Sky Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Williston Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Dunellen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Glenolden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Nyack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Souderton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ridley Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Great Neck Plaza",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Orland Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Twin Rivers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hewlett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "South Valley Stream",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Clifton Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lauderdale-by-the-Sea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Notre Dame",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Cedarhurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Folcroft",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Guadalupe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Manorhaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ewa Villages",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "South Monrovia Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Contra Costa Centre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Tuckahoe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Castroville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "West View",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Naples Manor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Prospect Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ambler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Forest Glen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Bronxville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kingston Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Cameron Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Saranap",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kennett Square",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "West Loch Estate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Lakeview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Binghamton University",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fruitridge Pocket",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Larchmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Pleasure Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "District Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Naval Academy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Savannah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Penn Wynne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Norwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jamesburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mayflower Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Elsmere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "McKees Rocks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Prospect Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bay Harbor Islands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "White City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Mount Carmel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bellevue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "South Tucson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Lewisburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sharon Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Media",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "New Brighton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Surfside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Rochelle Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Deer Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Belmar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Shaw Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Palm Springs North",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Waipio Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "South Highpoint",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Friendship Heights Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Kaser",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Edgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Kensington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Shillington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Albertson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Highwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Cutler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Twin Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Broadmoor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bret Harte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Glendale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Turtle Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Carle Place",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kenneth City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Tara Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Pasadena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mechanicville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Boca Raton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lafayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Lee's Summit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Rio Rancho",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "South Fulton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Beaverton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Lawrence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "San Tan Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "San Marcos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sandy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Federal Way",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Greece",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mandeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Hesperia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Brockton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Riverview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fishers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Bowling Green",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Roswell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Menifee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Plantation",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Dover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Portsmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Chino",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Edmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Hanford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Dearborn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Livonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Vineland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Florence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Portsmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Slidell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Lawton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Missoula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Rapid City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Terre Haute",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Toms River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Suffolk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Blacksburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Mount Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Carson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Greenburgh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Conroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Alafaya",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Livermore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "New Braunfels",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Fall River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Albany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Norwalk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "O'Fallon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Newton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Muncie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Hamilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Town 'n' Country",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Decatur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Fort Myers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Goodyear",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Dalton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Clarkstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cheektowaga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bryan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Waukegan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Anderson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Redwood City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hoover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Lake Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Napa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Largo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bloomington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Johns Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Newport Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mission",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Troy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Madera",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Joplin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Chino Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Melbourne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Port Huron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Colonie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Zephyrhills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "St. Augustine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Flagstaff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Pleasanton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Atascocita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Westland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Cranston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Folsom",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Springdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Warwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Farmington Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Newark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Williamsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Brooklyn Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Hattiesburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Alexandria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Florence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Valdosta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Buckeye",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Georgetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cedar Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "The Villages",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kokomo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Perris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "St. Joseph",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Flower Mound",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Pharr",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Alton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Loveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Boynton Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Anderson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Jonesboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Parma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Layton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Elizabethtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Texarkana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Kankakee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Porterville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Baytown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Upland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Camarillo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Jordan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Battle Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "San Marcos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "San Ramon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lake Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bethlehem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wyoming",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Oshkosh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Hammond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Waldorf",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Missouri City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Pasco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Wheeling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Brick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Kendall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Rancho Cordova",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Conway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Gary",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Altoona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lodi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Arlington Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bolingbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Rochester Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Winchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Framingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Hilton Head Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Union City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Owensboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Cleveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Wausau",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Anniston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Apple Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mansfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Schaumburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Pocatello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Woodbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Southfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Ellicott City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Dale City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Maple Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Pittsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Morgantown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Mansfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Hammond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Dothan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Harrisonburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Wenatchee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Waukesha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Redmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Sumter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Redlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Daphne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Mount Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Weston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "St. Charles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Cherry Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Janesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Sherman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "North Richland Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Broomfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "El Paso de Robles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bristol",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Casas Adobes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Walnut Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Poinciana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Glen Burnie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Lehi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Homestead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "West Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Delray Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sheboygan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Lake Elsinore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Daytona Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Los Lunas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Lima",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Decatur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Rocklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rogers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Castle Rock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bossier City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Dubuque",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Rockville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Victoria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Saratoga Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ames",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "West Des Moines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Yorba Linda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Casper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Palatine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Corvallis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Ankeny",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Rowlett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lakeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Alpharetta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Longview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "DeKalb",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Petaluma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Laguna Niguel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Eagan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Kenner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Bay City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "North Little Rock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Sammamish",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Shawnee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Jupiter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Old Bridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Doral",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Carbondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Blaine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Weirton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Tulare",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Wellington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pflugerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Palo Alto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Great Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Michigan City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Eden Prairie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Port Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Dublin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Grand Forks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Noblesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "San Clemente",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Brentwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Carmichael",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Eastvale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Chapel Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Rocky Mount",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Haverhill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Beloit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Gloucester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Glens Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fairbanks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Bethesda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Johnstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "West Hartford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Dundalk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Castro Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Coon Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Elmira",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mankato",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Albany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Encinitas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Leander",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Greenwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Parkersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Waltham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Port Charlotte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Palm Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "San Luis Obispo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sebring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Council Bluffs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Hamilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Moore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Casa Grande",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Monessen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fairfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Rome",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Millcreek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Sanford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Burnsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Morristown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Reston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Lakewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hamden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Spring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Gadsden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Taylor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Novi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Marietta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Hot Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Woodland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bensalem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Commerce City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "South Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Bristol",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Columbus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Bangor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Greenwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Bartlett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Bradenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pontiac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Staunton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Meriden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Clay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Apex",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Royal Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Benton Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lower Merion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "St. Clair Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Des Plaines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lewiston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Midland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Bowie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Caldwell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "San Rafael",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hamburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Richland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "St. Peters",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Wesley Chapel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hendersonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Huntersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Southampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Santee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Beckley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Titusville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cartersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Walla Walla",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Orland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Towson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Weymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Parker",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Palm Beach Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bozeman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "East Stroudsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Taunton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Midwest City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Goldsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Euless",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Manhattan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Shoreline",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Piscataway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lake Havasu City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Smyrna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Cape Girardeau",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Grants Pass",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Blue Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Southaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Tinley Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Diamond Bar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pittsfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Eagle Pass",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lenexa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Hazleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Twin Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Brookhaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Novato",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Tigard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Abington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Highland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Dearborn Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Grapevine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Fond du Lac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Hacienda Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Apple Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Chicopee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Cathedral City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Delano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bentonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Stonecrest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Kettering",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Colton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kingston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "St. Cloud",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Normal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Arroyo Grande",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Minnetonka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Wayne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Yucaipa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Williamsport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Union",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Elyria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Leesburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Mount Prospect",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bristol",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pinellas Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bellevue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "West Sacramento",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Apopka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lewiston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Millcreek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Grand Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Palm Desert",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Milford city",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Watertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Little Elm",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Chambersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Peabody",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Wylie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Beaufort",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "DeSoto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Edina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Wheaton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lacey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Summerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Parsippany-Troy Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Maricopa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Stratford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Lompoc",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Howell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Kentwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Levittown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sierra Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Smyrna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Glendora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Burien",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Herriman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "New Bern",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Hinesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Beaumont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Collierville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "West Lafayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Florissant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Hoffman Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Queen Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Kannapolis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Methuen Town",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Sahuarita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Traverse City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Severn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Catalina Foothills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Galveston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cookeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Mishawaka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Rowland Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bullhead City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Irondequoit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Stillwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "East Hartford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Forney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Azusa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Orangetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ashburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bloomsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Morehead City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Coral Gables",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Enid",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Oroville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Wilson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Lawrence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Portage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Minot",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Dunwoody",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Poway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Haverford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "San Jacinto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Troy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Newark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cuyahoga Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lower Paxton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Downers Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Reedley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Dublin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Marana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Murray",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Roswell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Pascagoula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Tuckahoe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "St. Louis Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Rio Grande City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Draper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Palm Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Paducah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Findlay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Bel Air South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Kyle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lincoln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ocoee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Burleson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Farmers Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "East Lansing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Uniontown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jeffersonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Winder",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Wauwatosa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Littleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Cumberland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Cedar Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Carrollton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Rancho Santa Margarita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "East Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Beavercreek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Niagara Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "McLean",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "East Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "East Honolulu",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Chesterfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Bothell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "West Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Glenview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Mentor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Keller",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Danville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Spring Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Roseville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Elmhurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "New Philadelphia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Perinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Sandusky",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "El Dorado Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Salina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Euclid",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Kingman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Weatherford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Roseburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Biloxi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Leavenworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Fort Pierce",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Winter Garden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Oro Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Morgan Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Potomac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Pinehurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Danville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Rockwall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Coachella",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Wake Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Pearl City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Tupelo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "South Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "West Seneca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Attleboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Pine Bluff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Evesham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hilo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Mount Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lufkin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Manitowoc",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Lake Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Selma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Strongsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Wallingford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Webster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Danville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bridgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Quincy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lancaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Riverton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "The Colony",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Urbandale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Plainfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lombard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Prescott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Eureka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sayreville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Enfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Altamonte Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Del Rio",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bountiful",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Desert Hot Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Peachtree Corners",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Haltom City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Southington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Ormond Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cutler Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Adrian",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Goose Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Moorhead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Westfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Henrietta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Brea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Klamath Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Billerica",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lancaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Channelview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Centralia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Gallatin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Stevens Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Burke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Brentwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "North Fort Myers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Egg Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Edmonds",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Apache Junction",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Fairfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Oakley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hutchinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Greenwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Cortlandt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Richmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Linden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Puyallup",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Huntsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Urbana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Beverly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Clovis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Statesboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Hobbs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "McMinnville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Schertz",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Oviedo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Odenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Grove City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Berkeley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Wentzville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "North Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "La Quinta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Weslaco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Zanesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Newnan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Shakopee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Brighton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Catonsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Rancho Palos Verdes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mableton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Mount Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Coppell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Linton Hall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Moline",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Penn Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Delaware",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Westfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Shelton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Westerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Manassas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Kearny",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Los Banos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Richmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Hempfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Spanish Fork",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Belleville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Maplewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Pottsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Columbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Bartlett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bluefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Fitchburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Cedar Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Buffalo Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Jamestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Woodlawn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Clarksburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Royal Palm Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Covington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Coram",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Friendswood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Indian Trail",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Woburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "The Acreage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Holyoke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "South Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Torrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Cedar City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Marlboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Crystal Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Calexico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lake Oswego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Amherst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Muskogee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Romeoville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Plant City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Manalapan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "New Berlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Roy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Security-Widefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Marlborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Hillsborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Issaquah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Essex",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Bartlesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Northampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lancaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Streamwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Germantown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Carol Stream",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Asheboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Kalispell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Lynnwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Mooresville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Brookfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Crestview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Horizon West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Moses Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "New Castle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Olive Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Enterprise",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Sun City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Winslow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Groton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Warren",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Duncanville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Hurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Clermont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wheeling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Pacifica",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Land O' Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Eagle Mountain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Reynoldsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Oxford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Rosenberg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Martinez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pleasant Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Severna Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Huber Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Menomonee Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Granbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Waxahachie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Valrico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Holly Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Butler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Albertville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "London",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Ossining",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cottage Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Kailua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "St. Marys",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Mechanicsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Cleburne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Oswego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Shrewsbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Navarre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Oregon City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Winter Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Parkland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Pahrump",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Carpentersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Penfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wildomar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Greenfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Braintree",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Rock Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Cheltenham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Evans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Haverstraw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Fargo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Mount Juliet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "San Juan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Oakton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Georgetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Portage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Owasso",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Commack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Foley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "New Albany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Benton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Meridian",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Clifton Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bettendorf",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Yorktown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Dunedin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hilliard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Merritt Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Phenix City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Addison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Roseville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Oakville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Tucker",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Moorpark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Monrovia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Oak Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Brighton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Claremont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Oswego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Post Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Peachtree City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Natick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "French Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Portsmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Galloway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Shawnee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Ewing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Gillette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Tooele",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Trumbull",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Prattville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Woodburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Calumet City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "San Juan Capistrano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Andover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Cooper City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "El Mirage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Meadow Woods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "LaGrange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "La Vergne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Guilderland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Mount Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Carrollwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Junction City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Inver Grove Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Pennsauken",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Randallstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Gahanna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Sanford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Riviera Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wildwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Upper Arlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Plainfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Oak Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Olney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Chelmsford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "New City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Owings Mills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "La Porte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bethlehem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Freehold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "East Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "DeLand",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cumberland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Martinez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Pleasant Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Orangevale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Merrillville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Stow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "San Luis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Calhoun",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Leawood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Menlo Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sun Prairie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Dakota Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Coventry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Arcata",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Glastonbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Lockport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Pullman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Boardman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Nacogdoches",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Kearney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Vestavia Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "North Ridgeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Socorro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Randolph",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Redmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Firestone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Goshen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Carmel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Butte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Russellville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Dartmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Grass Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Parkland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Kennesaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Adelanto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ken Caryl",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Carlsbad",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "University Place",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Douglasville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Salisbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Laramie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Lake Stevens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Valparaiso",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Fairborn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Estero",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mason",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Cottonwood Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Kaneohe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Sonoma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Galesburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Warsaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "San Dimas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Dana Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Riverhead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Midlothian",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Newark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Alamogordo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Alabaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Pikesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Deer Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Derry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Woodridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bridgeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Greer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Lexington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Springville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Saratoga Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Copperas Cove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "American Fork",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Andover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Matthews",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Woodstock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Florence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Northbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "St. Charles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fairmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Ridgecrest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lower Makefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Salina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lawrence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Massillon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Spanaway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Starkville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Warminster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Clarence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Harker Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Elk Grove Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Kaysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Southlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ferry Pass",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Savage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Des Moines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Bethel Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Princeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Dania Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bowling Green",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Lower Macungie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "East Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Coos Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Smithfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Rome",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Clearfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Liberty",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Pekin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Westlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Chillicothe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "La Verne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Prairieville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Placerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bel Air North",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Manlius",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Redan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Martinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Pueblo West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Radnor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fallbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Willingboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Spring Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hopkinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Rochester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "South Riding",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Centereach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Milledgeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Syracuse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Sherwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Garner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Key West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Dracut",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Petersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "North Olmsted",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Kahului",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Wheat Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Fruit Cove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cibolo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Alliance",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Banning",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Warwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Laguna Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Central Islip",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Athens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Princeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Falmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Orcutt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Naugatuck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Eldersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Tewksbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Columbus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Mundelein",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fair Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rexburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Needham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Nogales",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Nicholasville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Goleta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Opelika",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Newburgh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Algonquin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Marrero",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Cranberry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Aiken",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Cicero",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Andover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lawrenceville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Winter Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lake Magdalene",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fitchburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Granger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Wooster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Fountain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Brooklyn Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "South Kingstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Kerrville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Barstow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ross",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Crown Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Lakeside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Deptford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "North Huntingdon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Gloucester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Gurnee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Orangeburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Holladay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Fuquay-Varina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Chamblee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Carney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Peru",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Upper Merion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Cornelius",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "North Tonawanda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Newington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Los Gatos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Lake Tahoe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Saratoga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Los Altos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ballwin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Atascadero",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Royalton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Somerset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Seguin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Hampden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fortuna Foothills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Milford Mill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Pasadena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Stockbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "East Liverpool",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Madison Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Livingston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Williston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Eagle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Maryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Walnut",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mamaroneck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Garden City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Texarkana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Kent",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "North Chicago",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Duluth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Aberdeen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Winona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Rotterdam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "O'Fallon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Drexel Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Ukiah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Atwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sanford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Highland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Westfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hermiston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Orchard Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Tredyffrin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pittsford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Central",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "East Lake-Orient Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Chicago Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Johnston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Norwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "East Fishkill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Glenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Newberg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Voorhees",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lewes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "North Attleborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Oak Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Cheshire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Crofton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Athens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Laplace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "SeaTac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Raytown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Paragould",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Graham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Southgate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "West Warwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Harrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Niles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fernandina Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mount Olive",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Big Spring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Bella Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Morrisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lacey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Casselberry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wellesley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "East Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Plattsburgh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wasco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Fleming Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Belle Glade",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Stoughton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lake in the Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Agawam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Wallkill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Shirley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Burton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Chili",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Geneva",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Schererville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Independence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "West Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Austintown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "McCandless",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "New Iberia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Northampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Gates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Vineyard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Zionsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Vestal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Short Pump",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Lumberton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Perry Hall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Aberdeen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Benicia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Oakleaf Plantation",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Jacksonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Rockledge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Saugus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Henderson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Monterey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Converse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Granite City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Yukon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Sonora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Shaler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Branford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Westport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Mehlville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Wisconsin Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Galt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hutto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bixby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Hobart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "West Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Oakdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Sunbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Summerlin South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "New Smyrna Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Tualatin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Forest Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Fridley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Newtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "East Chicago",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Kirkwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Sanger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Morgan City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Ramsey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Ruston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Jeffersontown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Glen Ellyn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Cañon City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Monticello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Ashtabula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Temescal Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bridgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Mint Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Danvers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Spring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Whitehall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Neptune",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Statesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Gloversville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Gladstone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Deer Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fremont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Queensbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Garfield Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Seneca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Florence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Bayonet Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lansing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Millville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Monroeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "St. Helens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Stafford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "New Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Horn Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "East Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Prior Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Huntley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Maple Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Oak Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Pemberton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Glen Cove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Shoreview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sterling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Dodge City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Colleyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Wilmette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Plum",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bernards",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mount Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "McHenry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Waterville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Norfolk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Shaker Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Citrus Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "New Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Erie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Brownsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Wakefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Chaska",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Ilchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Shelby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Maryland Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Magna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Xenia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Allen Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Mason City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "New Lenox",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Hanahan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Kinston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Searcy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "New London",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "West Islip",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Chicago",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Springettsbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "McDonough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "West Linn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Cortland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lemoore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Alvin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ocean",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Waynesboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marshalltown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Wappinger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lower Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Thomasville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Temple Terrace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lafayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Norco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Immokalee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Vernon Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Pearl",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Bethany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Marquette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Horsham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sedalia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Bessemer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Plainview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Batavia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Garden City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "West Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Chanhassen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Cabot",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Vicksburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Upper Dublin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Brawley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Neenah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Snoqualmie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Troy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Hercules",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mahwah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lake City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Paramus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Okeechobee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "North Kingstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Wethersfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Muscatine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Boone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Moscow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Sebastian",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Northport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Natchez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Winchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Twentynine Palms",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Holt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "East St. Louis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Sachse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Montgomery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Paris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Haines City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cave Spring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Merrimack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Superior",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "West Odessa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Medina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Conway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Barberton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Española",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Londonderry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Dix Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rock Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "South Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Mercer Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Heber",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "White Bear Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Marshfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Holbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bay Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mansfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Woodstock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lochearn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Green",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Wall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Owatonna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Pooler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Exeter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Lancaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Austin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Lockport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "South Salt Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Tarpon Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Edgewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Bluffton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Sevierville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Forest Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Randolph",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sun City West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "South Portland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Ruskin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Denison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Keystone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Moon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Claremore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Homewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Columbine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Canyon Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Kingsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Forest City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bainbridge Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Dedham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Caledonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "De Witt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Champlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Edwardsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fairland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Elk River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Rosemount",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Fountain Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Belvidere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Riverside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Reading",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Middle River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Walpole",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Muskego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Hazelwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Scottsbluff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Derry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fresno",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Rockaway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Ridgewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Yucca Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ridgefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Branson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Balch Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Timberwood Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "De Pere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Socastee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Susquehanna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Derby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Wilsonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Clayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Brookings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "North Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Walker",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Wyandotte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Grandview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Forest Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Middleborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Chesapeake Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Palm City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Simsbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Swatara",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Clarksburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "South Elgin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Auburn Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "North Tustin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ontario",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Ardmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Hastings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Norton Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Kernersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Windham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Easton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Sugar Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Emporia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Prosper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Palmetto Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Somerset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Avon Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lathrop",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Loma Linda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Homer Glen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Tifton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Dinuba",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "East Hempfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bloomingdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Westmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Opelousas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Camas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Harvey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Medford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Trotwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "West Memphis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Collinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Mequon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Ellensburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Ottumwa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Chantilly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Shelbyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Westford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Orchards",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Newport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Saginaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Port Angeles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Brandon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Sun City Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Inkster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Thomasville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Ponca City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Camillus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Melbourne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Warrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Faribault",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "San Benito",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Fort Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Lincolnton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Halfmoon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Simpsonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Scotch Plains",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Waverly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Fishkill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Okemos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Upper Macungie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Upper Moreland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ridgeland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "North Platte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Charles Town",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Freeport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Waukee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "South Plainfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Wadsworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Tumwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Fairfax",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Cranford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Candler-McAfee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Venice",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wright",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mansfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lincolnia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Westchase",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Upper Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Edgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "North Potomac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Pelham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Corsicana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Seal Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Fort Dodge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Dunkirk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Calabasas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Chalmette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "North Augusta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Palm River-Clair Mel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Montgomery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mount Pocono",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marple",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Farragut",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Jenks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Palatka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Coronado",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Centerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Van Buren",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Greeneville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Waycross",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Half Moon Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Belton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Jacksonville Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Acton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Ilion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Seymour",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Oakdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Madisonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Romulus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Leland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Rolling Meadows",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wekiwa Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Northdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fort Hood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Benbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Zion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Watertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Montrose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Columbus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Plainview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Arnold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Avon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Wilmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Loves Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Yarmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Vero Beach South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Medford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lisle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Greenbelt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Stoneham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Granite Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Dickinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Oxford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Kenmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Allison Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Hastings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Montgomery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Plainsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rockingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Greenfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "West Goshen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Frederickson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Willoughby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mustang",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Roxbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Patterson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Gallup",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Radcliff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Crystal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Belton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Pace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Marshall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Laguna Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Webster Groves",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Acworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Griffin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Morton Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lysander",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Keene",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Marina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Solon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Barnegat",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "New Brighton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Mandan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Winchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Pittsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Elizabeth City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Harriman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Greenfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Fairhope",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Cottage Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Machesney Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Braidwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Hurricane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Onondaga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wareham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Trussville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Waynesboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Johnston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Corcoran",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Meadville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Happy Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "East Peoria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Westerly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Hopewell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fort Walton Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Nixa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Munster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Christiansburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Anthem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Roselle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Garden City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Warrensburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Kihei",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Union City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Florida Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Silver Firs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Dolton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Duncan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Brent",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Northfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Highland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Sequim",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Lyndhurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Prairie Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Kuna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Coralville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Fort Mill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Morris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Niskayuna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rose Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lutz",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Taylors",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Roanoke Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Guilford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Raymore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Ensley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fremont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mukwonago",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Watertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "East Patchogue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Pickerington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lexington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Arvin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bristol",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Southold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Raritan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lino Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Augusta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": "admin"
  },
  {
    "City": "Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Shelbyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Corinth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Naples",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Maple Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Unity",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Chester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Gardner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Union Hill-Novelty Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Peters",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Siloam Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "East Hampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Piqua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Fish Hawk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Port Hueneme",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lakeside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Summit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Secaucus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Golden Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Mount Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Bloomington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Camp Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "New Hartford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Geneva",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Rancho San Diego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bloomingdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Watertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Darien",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Shafter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Eastmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Lincoln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Katy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Brownwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Del City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Smithfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Jacksonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Silverdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Allendale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lower",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Darien",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Perrysburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lewistown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "La Porte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Clarksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "New Castle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Bellview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Biddeford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Somers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Villa Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fernley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Essex",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Elkridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Mukilteo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "East Pennsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Atoka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Prichard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Le Ray",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hays",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Birmingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Montville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Easley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Brambleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Palmer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ramona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Owosso",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "King of Prussia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "DeBary",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Eustis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "South Euclid",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "South Holland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Palm Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Ludlow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Sapulpa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Duarte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Marietta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Battle Ground",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Stephenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Amsterdam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Oxford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Park Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Evans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Alexandria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Fort Atkinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Hazel Dell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Carrboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Bardstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "East Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Elko",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Covington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Gaffney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Sun Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "West Deptford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sidney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Bonney Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Dickinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Martha Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Little Egg Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bothell West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Arnold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Ballenger Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Rolla",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "West Pensacola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Harvey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Johnstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Grand Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cockeysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Jefferson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Pleasant Prairie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Shelbyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Bloomfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "St. Andrews",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Milwaukie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Bryant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Salmon Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hyde Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kill Devil Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "North Salt Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Apollo Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cornelia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Suwanee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "New Hope",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Wade Hampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Green Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Mill Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Universal City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Montclair",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Lorton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Clemmons",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Rosamond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bear",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Dyersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Manor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Oneida",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hunters Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Holiday",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Louisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Dixon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Murray",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Golden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Olean",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Clifton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Grayslake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "South Milwaukee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Gardner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Havelock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Lake Ronkonkoma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "East Moline",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Norwalk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Yorkville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Logansport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Dublin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "North Ogden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Lynn Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Ferguson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Arlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Willmar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Alice",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Swansboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Marblehead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Murphy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Culpeper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Berlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Ozark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "American Canyon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Papillion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Moorestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "The Dalles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Barre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Amherst Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Crest Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Punta Gorda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Neabsco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Newton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Poplar Bluff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Ennis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Coolbaugh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Tukwila",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Ogden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Prunedale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Payson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Mountain Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Glassboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sandwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "New Canaan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Shelton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Shenandoah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Buckingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Cherry Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Henderson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Linda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Muhlenberg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Agoura Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "East Hemet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Libertyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Durango",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "East Northport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Howard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Monmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Ypsilanti",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Rocky Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Mokena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Pleasantville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Affton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Millburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bartow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Scarborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Mead Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Miamisburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Merrick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Charleston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Germantown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Escanaba",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Selden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bayou Cane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Mililani Mauka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Snellville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Sulphur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "South St. Paul",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Oregon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Middleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Ferndale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Forest Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "La Cañada Flintridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hauppauge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Safford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Rocky River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "El Reno",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Saco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Fairwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Greenwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "West St. Paul",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Orinda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Helena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Cullman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Alamo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Sand Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Vernal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Laurinburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Painesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Sherwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Lake Zurich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Upper Allen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hazlet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rosedale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Ottawa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bourne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Meadowbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Casa de Oro-Mount Helix",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lake Shore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Parma Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "South Whitehall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Old Jamestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Selma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Makakilo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Tahlequah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Brockport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Norton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Rockport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Upper St. Clair",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mesquite",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Front Royal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "West Mifflin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Somerton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Blythe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Southbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Bethel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Horizon City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Montgomery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Stillwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Eloy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Brigham City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Murrysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Brainerd",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Rio Rico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Haslett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Tullahoma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Baldwin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Anna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Danville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "South Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "North Liberty",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Lake Butler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Vincennes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Sienna Plantation",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Holtsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Abbeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Bourbonnais",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Syosset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Matteson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lake Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Angleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lower Allen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Castaic",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Canby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Ferguson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wendell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Frankfort",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Laconia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Silverthorne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Altamont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Sheridan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Durant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Sylvania",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Corning",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Arbutus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "White Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Pinole",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Erlanger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Altoona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Bethany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Carlisle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Whitpain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Stevenson Ranch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Highland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Liberal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Cameron Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pinecrest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Horseheads",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lower Southampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Tiffin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Sudbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Mount Airy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Broadview Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Westbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Saugerties",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Holden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Red Bluff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Arcadia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Westborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Warwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "White Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Fox Crossing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "McKeesport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Limerick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Stroud",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Troy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Onalaska",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Waterford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Uwchlan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lexington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Springboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Whitehall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Sartell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Badger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Five Corners",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "McAlester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "La Follette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Terrell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Natchitoches",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Twinsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Central Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Seminole",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Montville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Coldwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Owego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "St. John",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Grandview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Marshfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Grafton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Cimarron Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "East Lyme",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Scituate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Sparta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Alsip",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Avon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Homewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Port Isabel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Marinette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Bay City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ansonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "West Whiteland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Deerfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Maple Shade",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Westminster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Creve Coeur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Berea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Cocoa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Moultrie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Forest Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Anacortes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Aberdeen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rancho Mirage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sharon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Gibsonton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lynden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Gautier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Mayfield Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Breaux Bridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Hopkins",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Wilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Defiance",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Stonington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Iron Mountain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Berea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Altus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Uvalde",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Brushy Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Brook Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Pembroke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Middle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Wallingford Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Sunnyside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Towamencin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "World Golf Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sycamore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Franklin Farm",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Avon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Chowchilla",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ronkonkoma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Newburyport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Hampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Kilgore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Radford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Palestine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Whitestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Crawfordsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Boerne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lake Placid",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "St. Michael",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "East Goshen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Maumelle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Windham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Niles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Somerset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Menomonie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Trenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Southeast",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wheatfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rutland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Imperial",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Otsego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "St. Matthews",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Alton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cudahy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Round Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Oxon Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Beeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cary",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "North Wilkesboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Goffstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "North Aurora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lithia Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Bon Air",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bensenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Eastlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Beaver Dam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Safety Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mattoon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Macomb",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "North Druid Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "West Columbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Fayetteville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Sunland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Estelle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "San Carlos Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Rockland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Zachary",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Kingsland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Marco Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Huntington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Ingleside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Whitemarsh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wantagh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lenoir",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Easton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "New Castle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Perry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Hannibal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Menasha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Oak Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Scarsdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Brenham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ocean Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Dallas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Woodcrest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "White Settlement",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Five Forks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Knightdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Shenandoah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ada",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Crossville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Beltsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Colonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Moraga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Midway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Steubenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Tavares",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Belgrade",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Foxborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lackawanna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Melville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Wailuku",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Buckhall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "El Dorado",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "South Hadley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Greene",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Valle Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Albert Lea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Maitland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Gretna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Hatfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hinsdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Santa Fe Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Franklin Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bethpage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "East Massapequa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Plainville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Blooming Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kirksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Nipomo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hopkinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Centerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Gorham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Butner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Tillmans Corner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Upper Grand Lagoon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Anoka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Amesbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Tallmadge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Nanuet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Maryland City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Shorewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Vero Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Clemson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Spanish Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lake Mary",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lakeport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Knik-Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Martinsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Tinton Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Doylestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jenison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Redland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Godfrey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pendleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Taylor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Pecan Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Nederland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Colonial Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Portsmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Stafford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Willimantic",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Harborcreek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Silver Spring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ocean Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "La Marque",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Colchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Versailles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Morris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lemont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Gainesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Sayre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Portland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lindenwold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Clive",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Oneonta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Shippensburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Killingly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Pampa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "McKinleyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ferndale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "South Ogden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Albemarle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Coalinga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "La Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Ashwaubenon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Dickson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "North Adams",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Waxhaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "North Babylon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bastrop",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ammon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Bellingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Yelm",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Parole",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Glenvar Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Palos Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Camano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Streator",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wyckoff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Brookfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "East Lampeter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Buffalo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Lincoln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Sylacauga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Oconomowoc",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Webster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Fort Hunt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Phoenixville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mountain Home",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Americus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Republic",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Upper Chichester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lemay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Buda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cutlerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Calverton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Gainesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Southbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Wilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Myrtle Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lake St. Louis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Seagoville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Crescent City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Picayune",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Rosedale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Myrtle Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Wayne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Bemidji",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Chestnuthill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Goodlettsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Ham Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Fairburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Bristol",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Lake Wales",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "New Port Richey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Upper Saucon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Truckee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lindsay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Aston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "North Decatur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Cohoes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "McComb",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Highland Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Athens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Auburndale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Scott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wolcott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "El Segundo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Holmdel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Denville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mercedes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Norcross",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Burrillville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Northbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Batavia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Morganton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Harrisburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Swansea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Delran",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "West Hempfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Murraysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Donaldsonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Solvang",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Los Osos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Groveton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Seymour",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Live Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Geddes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lock Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Vienna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Country Club Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Durham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Streetsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Jasper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Eden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Pearl River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Douglas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Crowley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Highland Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Cinco Ranch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Wolf Trap",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Abington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Chickasha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Kings Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Groveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cinnaminson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mount Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "River Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Hernando",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Ripon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Penn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Rio Linda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bluffdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "East Greenbush",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Storrs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Burley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Aurora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Donna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Red Wing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Fallon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Fairview Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Celina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Gun Barrel City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "North Whitehall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Morton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Port Jervis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Red Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Kaukauna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Addison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Fort Thomas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Mebane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Mount Holly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Conyers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Centerton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "East Longmeadow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Stuart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sikeston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Sulphur Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Boulder City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Centralia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Dixon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Troutdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Ellington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Mount Clemens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Fairview Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Discovery Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Evans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Stallings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Cambridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Frankfort",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Westwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Barrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Westchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Center Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Canyon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "West Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Washougal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Bridgeview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Troy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Griffith",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Villa Rica",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Fairhaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Alma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Fort Leonard Wood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Long Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Lady Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Aberdeen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Welby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Indianola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Phelan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lakeway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Dyer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Archer Lodge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Niceville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Clearlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Fillmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hood River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Bellevue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Spanish Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Westport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "New Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "New River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Sayville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Malta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Readington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Millbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Carthage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "West Lampeter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Prospect Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "King City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Opa-locka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pataskala",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Sunset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Colchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Grandville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Hibbing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Sarasota Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Laguna Woods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hope Mills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Sierra Vista Southeast",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Wilmington Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Upper Gwynedd",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lewiston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Easthampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Patton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Humble",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Payson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Duxbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Port Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Circleville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Longmeadow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Fullerton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sterling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Tiverton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "White",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Powder Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Flowing Wells",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Clark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Purcellville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Greenwood Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Middle Smithfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Warren",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Farmingville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Andrews",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Newberry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Parma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Blytheville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Shively",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Suffield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Mitchell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "West Norriton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Graham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Tanque Verde",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Elkton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Three Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "South Fayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Riverdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Fort Mohave",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Chubbuck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "North Reading",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Newton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "La Grange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Antrim",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Miami",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "McMinnville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Potsdam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Longwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Overland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Dunn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Houghton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Ladson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Blackfoot",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Buford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Lake Geneva",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Harrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "La Grande",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Narragansett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "East Highland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Glen Allen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Seven Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Groves",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Mastic",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hermitage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Forks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Cloverly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Talladega",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Hartford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Holly Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Belvedere Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Seekonk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Hayden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Middleburg Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mount Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Hilltown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Cumru",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pulaski",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Northview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "South Middleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Moreau",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lower Salford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Stony Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Grosse Pointe Woods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Hueytown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Aldine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bradley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Southchase",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kerman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hugo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Damascus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Mineral Wells",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bay Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Pequannock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sullivan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Elk Plain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Weston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Hereford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Galion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "College Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Dentsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Grovetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Pleasanton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Great Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Gantt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Rossville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Plainfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Bennington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Englewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Jamestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Exeter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "West Richland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Park City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Oldsmar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Washington Court House",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Northborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Coto de Caza",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Whitman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Upper Southampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Depew",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Susanville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Belchertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Swampscott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Vandalia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Willow Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fort Carson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Mantua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Beech Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Hewitt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Thompson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Tehachapi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Astoria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Alamo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Taft",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ferndale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Livingston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Whitewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Clarksdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "West Lealman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Franklin Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ramsey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "New Freedom",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Alpine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Victor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Great Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Yankton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "London",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Salem Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Brooklyn Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Hampton Bays",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Yazoo City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Mount Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Jacksonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "California",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Guilford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Grimes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Bellair-Meadowbrook Terrace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lamont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Hot Springs Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "St. Simons",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Campbellsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Ledyard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Nocatee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Tonawanda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cambridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Holliston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Calera",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Tolland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Youngsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Royse City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Azalea Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hartsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Worthington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "North Fayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Las Vegas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Southern Pines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Hershey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Berea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Saraland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "El Dorado",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Manor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Williamstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Wilbraham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Paradise Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Pewaukee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Warwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Windham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Gonzalez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Port Orchard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Forest City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Muscle Shoals",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Jennings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Henderson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Connersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Royal Kunia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Metuchen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Grain Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Mount Dora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Skippack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Dryden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Glasgow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Little Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Branchburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fraser",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Sun Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Corinth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Hartselle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "East Bridgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Thonotosassa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Fostoria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Tenafly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Beekman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Strabane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Chaparral",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Scottsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Lockhart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Thibodaux",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Bradley Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Greenlawn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Robbinsdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Clewiston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Warren",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Chippewa Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Robbinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Ocean View",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Glasgow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Bridgetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Warrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Midlothian",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Summerfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Hollins",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Mountain Home",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Alexander City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Camden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Hooksett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Toppenish",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Ozark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Douglas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Malone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mill Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Tamaqua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Destin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Salida",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lewisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Kings Park West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Caln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "East Wenatchee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Lindenhurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Phillipsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Covington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Jefferson Valley-Yorktown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rincon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "California City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Taos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Raynham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "North Branford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Hopatcong",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hidalgo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cambridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Gardendale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Antioch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "New Paltz",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Johnson City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hendersonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Seabrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Mashpee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Crowley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Sauk Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Greendale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lockhart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "New Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Chelsea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Ionia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Pineville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Iona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cleveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Greensburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Middleburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Harrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Chesterton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Steamboat Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Sweden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Black Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Fort Payne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Cherry Hill Mall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fruitville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lakewood Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Callaway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Oatfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Pomfret",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Waunakee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Wixom",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Luling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Pell City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Pecos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bay St. Louis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Belle Chasse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Havre de Grace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "East Norriton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "D'Iberville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Cayce",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Effingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Santaquin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Hobe Sound",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Uxbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Wauchula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Colesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Goshen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Dayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Reidsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Hutchinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Dallas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Plumstead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Oxford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Beacon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ipswich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Dumas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Raymondville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Frederick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Artesia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "New Fairfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "North Mankato",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Shawangunk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Dennis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Glenpool",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Oil City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Hammonton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "New Kingman-Butler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Deming",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Big Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Miami Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fulshear",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cromwell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "South Venice",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Allouez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Princeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Baraboo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Jericho",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Salisbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "El Sobrante",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cahokia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Springdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Oak Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Gramercy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Atlantic Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Teays Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Ephrata",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Oak Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Saddle Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Richmond Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Brandermill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Forrest City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Sun Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Moorestown-Lenola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Wayland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Pelham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Fergus Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Aurora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Conneaut",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Nether Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Thomaston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Levelland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Palmetto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Piney Green",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Fort Campbell North",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Millbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Hickory Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Robinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Beach Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "East Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sharonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "West Freehold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Middlesex",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Spring Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "St. James",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Maumee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lawrenceburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Brevard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Arcadia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Adams",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Soddy-Daisy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Moberly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Port Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Waianae",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Vadnais Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Wood Dale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Brecksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "New Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Shiloh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Rantoul",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Colonial Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Broadlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Kingston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Hazel Crest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Price",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "LaBelle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Charlton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Alpena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Conway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kettering",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Rocky Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Elizabethton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Wauconda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lake Forest Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Avenal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rogers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Marshall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Jensen Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fruita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Homosassa Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Middlesborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Red Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Olivehurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Big Bear City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Fortuna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Santa Fe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "North Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Lindale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Verona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Englewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lakeland South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jasper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Short Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Huron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Sault Ste. Marie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Andover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Brookside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "South Park Township",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "South Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mountain Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Carpinteria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Glenn Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Powell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lyndhurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Artondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Glenn Dale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Western Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Okmulgee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "DeRidder",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Azle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Newtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Vidalia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Swansea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Moss Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Fort Morgan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Dardenne Prairie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "River Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Newark",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Van Buren",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Medway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Mounds View",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Jefferson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Berkeley Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rochester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Solana Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Nesconset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Richton Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Franconia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Palos Verdes Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Richland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Woodinville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Manorville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bellefontaine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Timberlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Kent",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Channahon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Port Royal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Verona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Bensville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Clayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "East Islip",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "New Ulm",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Newington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Baker",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Cedar Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Globe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Newton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Warrenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lower Moreland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hockessin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Rendon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Sandpoint",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Loveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Trenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Coolidge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "North Palm Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Schodack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Pine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Stoughton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Mount Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Warrensville Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Worthington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Plover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Martinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Mahomet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Superior",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Oxford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Lone Tree",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Montgomeryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "East Greenwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "South Daytona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Riverdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lumberton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Villas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "York",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Moody",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "McPherson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Fort Lewis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Davidson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Edgewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Suamico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "San Marino",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Spring Garden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Portland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Fort Drum",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Bradford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Chatham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Amity",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lakeland Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bellefonte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Forest Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Vail",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Cypress Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Gladeview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Monfort Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Braselton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Lapeer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Dunmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Georgetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Kittanning",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Vinings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Sharon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Claremont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Oakland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fallsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Verde Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Lynnfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Irondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Lake Wylie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Sturgis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Loganville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Lawrenceburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Lakeland North",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "West Carrollton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Finneytown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Glen Carbon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "New Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marshall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Medfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lake Tapps",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Spearfish",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "East Hampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Cedartown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Cloquet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Weigelstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lilburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "South Sioux City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Maryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Wawarsing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "College",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lahaina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Glendale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Terryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Othello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Gulf Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Yulee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Athens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Jupiter Farms",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Tarboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Wickliffe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Elgin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Mercerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "La Homa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Dover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Borger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bonita",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Charlotte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Broussard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Herrin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Choctaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Manvel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Windsor Locks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Los Alamos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Oregon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Commerce",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Taylorville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Riviera Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Port Neches",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Prineville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Lakeland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Peru",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "White House",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Keokuk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "St. Ann",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Mastic Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Justice",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "German Flatts",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Elfers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lewisboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fulton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Minneola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Oskaloosa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Urbana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Grand Terrace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Panama City Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Woodland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Richmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Pennsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fredericksburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Muscoy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Belmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Florence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Annapolis Neck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Woolwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Jacksonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Endicott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hopewell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Cheney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Palos Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Cedar Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Boone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "North St. Paul",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Ocean Pines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Paris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Irmo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Cecil",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "San Anselmo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Marysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Ulster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Woodhaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Trophy Club",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cornwall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Riverton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Shepherdsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Coventry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Waconia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Stony Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "St. Peter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Kingsbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kelso",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "North Smithfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Elkhorn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Gatesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Goldenrod",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Virginia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Logan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Chino Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Lakeside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Newington Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Blue Ash",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lewisburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Wilmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Tyngsborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Harrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Holly Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lansdowne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "New Baltimore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Gulfport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Forestville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Derby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Kewanee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Orange City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lakeland Highlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bastrop",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Gladstone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Winnetka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Markham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Leon Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Joppatowne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "West Plains",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Delhi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Winchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Newcastle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "New Kensington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Beatrice",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Poquoson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Clayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "St. Marys",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ottawa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Larkspur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Cottonwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Mays Chapel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Shady Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lincolnwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Arkansas City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "North Castle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Elon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Palmer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lumberton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Massena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "West Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Parker",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Batesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Amherst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Grenada",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "North Union",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ishpeming",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Jesup",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Ringwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Overlea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Speedway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Enumclaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Neosho",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Wells Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "North Greenbush",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rehoboth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lincoln City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Highlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Northlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Eatontown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Newport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "New Garden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Harwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Falmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Freeport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Webb City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Woodward",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Lower Pottsgrove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Melissa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Brock Hall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Weston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "James Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Kingsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pepperell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Platteville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Eureka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lovington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Little Chute",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Bainbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Sedro-Woolley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Minden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Grantsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Somerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Middle Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Union Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "South Charleston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Fairfax Station",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Leeds",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Holiday City-Berkeley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "East Bethel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Richland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Festus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Riverview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Bath",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Smithfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Weatherford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Miller Place",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rapho",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Spring Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Folkston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Macedonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Carnot-Moon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jerome",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Prairie Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Union",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Hamilton Square",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Moncks Corner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Goulds",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "North Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Newton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Maltby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Garden City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Somersworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Bordentown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Norton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Ellwood City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Glenwood Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Greensburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Tucson Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Macclenny",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Echelon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "East Grand Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Newberry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Lansing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Brookhaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Winfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Norwalk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "West Deer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Camp Pendleton South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Spencer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Robinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Newport East",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Portales",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Port Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Waimea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Green River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Tremonton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Cottage Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Upper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Valley Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Stafford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Berkley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Robertsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Delavan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Patterson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Vineyard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Richfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Port Lavaca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Otsego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Malvern",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Cadillac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lake Station",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Healdsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Sandy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "East Renton Highlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "East Whiteland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Red Bank",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Brown Deer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Crestwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Grants",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Wrentham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Malibu",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Smyrna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Bucyrus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Valencia West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Viera East",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Norfolk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Tomball",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Florida City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wanaque",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Scotts Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Robstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Georgetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Lake Los Angeles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Arlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Somerset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Elma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Excelsior Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Diamond Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kalaoa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Dudley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Carver",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Cordele",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Mendota",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Grafton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Athol",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Eufaula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Glen Rock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Cocoa Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Clute",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Tamalpais-Homestead Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Port St. John",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Endwell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Plano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Madison Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Guthrie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Dranesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "El Campo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Accokeek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Evanston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Pontiac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Griswold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Dingman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Gold Canyon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Cedarburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Claiborne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Putnam Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Middleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Beachwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Seven Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Upper Montclair",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Martinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Elk City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Scottdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Silver City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Upper Uwchlan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wakefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Mitchellville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Spirit Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Woodland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Brattleboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Bridgeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lower Gwynedd",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mexico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Archdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Bogalusa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Newport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Elwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Florham Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Trinity",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Roma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Mountain Top",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Port Salerno",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Magalia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Magnolia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Emmaus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Nanakuli",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Mamakating",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Webster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Richland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Elizabethtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "East Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Show Low",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Woods Cross",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Byram",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "North Bellport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fort Bliss",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Highland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Kennebunk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Lyndon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Salisbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hailey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Scottsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Urbana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Schiller Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lunenburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Bayou Blue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Los Alamitos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Destrehan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Minooka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Gardere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Cascades",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Hillsborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lansing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Gardnerville Ranchos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Collegedale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Summerfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Lakeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Snyder",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Tarrytown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Viera West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wyandanch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fairfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Mount Sterling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Granby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Ravenna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Catskill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bellmawr",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Angola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Coshocton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mendota Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Haysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "New Britain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Tega Cay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Amherst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Dent",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Haddonfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Groton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Beachwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bradford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "North Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Leicester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Travilah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Kaneohe Station",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Winton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Celina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Hartsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Canyon Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Burkburnett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lighthouse Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Eunice",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Greentree",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Westview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "DuBois",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lamesa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "North Logan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Berlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Waupun",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Big Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Hillsdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Broomall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Gloucester City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Grand Rapids",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Hawaiian Paradise Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Arizona City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Seymour",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Camp Verde",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Weddington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Ridgefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Poulsbo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Nantucket",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Stayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Springdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Brookings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Damascus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Red Hook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Niles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Fuller Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mango",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fitzgerald",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Huntingdon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Selma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Satellite Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mayfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Lanham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Franklin Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Gulf Gate Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Yorktown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Town and Country",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Fulton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mount Sinai",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Princess Anne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Jefferson Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lindon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Hamilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Maysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "South Yarmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Campton Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Woodbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rifle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Bennettsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Walden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Grove City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lexington Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Canandaigua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Merriam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Westwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lower Burrell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Valley Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "East Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Silverton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Wahpeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Bolivar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Storm Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Rostraver",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Whitehall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lake Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Moss Bluff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Norwell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Grosse Pointe Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Four Corners",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Grand Haven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Holbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Two Rivers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Lawrenceburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Dobbs Ferry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Shiloh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Munhall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Somers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Lake Morton-Berrydale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Florence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Loyalsock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Browns Mills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Guymon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Pike Creek Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Pompton Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Millsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Kings Mountain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Sussex",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Ballston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Pearsall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ocean City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Largo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "West Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Gonzales",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Liberty Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Spencer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Chalco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Willistown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Saddlebrooke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Decatur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Heath",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "New Albany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Vermillion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Wantage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Westtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Pocono",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Cusseta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Walker Mill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Elkins",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Halfway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Soquel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Fort Meade",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Montgomery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lake Monticello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Lowes Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Kearney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "West Caldwell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bacliff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Essex Junction",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Winchendon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Pleasant View",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Wasilla",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Oak Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "River Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Cheval",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "The Pinery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Panthersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Smithville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Mount Kisco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Sierra Madre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lower Saucon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Totowa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Hanson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Orono",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Highland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "North Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Winnemucca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Castle Pines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Burr Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Galena Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Maynard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Myrtle Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Ludington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Camden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Bellmead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Muskegon Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Mapleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Fruitland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Winchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Arkadelphia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Rochelle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Gig Harbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Crestwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Farmersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Waterford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Smithfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Gateway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Chenango",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Raceland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Sweet Home",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "DeForest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Cleveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Avon Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Van Wert",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Garden City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Hornell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Pacific",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Newcastle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Ketchikan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Alamosa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Toccoa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Brooklyn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Saks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Millington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Georgetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Ogdensburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Geneseo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wyomissing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Scituate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Petal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Anderson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Monroe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Easttown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Atchison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Highland City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kapaa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Waterloo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wyndham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Norton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fairfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Greencastle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Covington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Three Rivers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Timonium",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "East Cocalico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Morro Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lowell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Paris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Ironton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Star",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pasadena Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Acushnet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sandy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lloyd",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "San Diego Country Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Columbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Roscoe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Douglass",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jefferson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Little Canada",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Rosaryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Wapakoneta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Alpine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Doctor Phillips",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "East Greenwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Warren",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Exeter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Martin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Gifford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bernalillo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Pine Castle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Point Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Cape Canaveral",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sweetwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Fairview Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Worth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Portage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Tanaina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Bedford Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Hull",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Fox Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Oak Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Millstone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Linthicum",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Fountain Inn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "New Baltimore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Wellington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Kendallville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Raymond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Sumner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Pine Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Forestville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Shasta Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lehigh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Dayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Rodeo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Worcester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "West Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Vidor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "New Port Richey East",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bellefontaine Neighbors",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Vermilion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "South Union",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bonham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Kennett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Troy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fort Bragg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lyons",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wells",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Miami Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Columbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Beverly Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "West Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lexington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Richmond Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Harrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sedona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Summerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Union City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "South Huntington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fort Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Nanticoke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hillsdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Comstock Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Fredonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Helena-West Helena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Chatham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Park Forest Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Forest Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Coal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Reading",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Vashon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Weston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Arden Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Pine Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Medulla",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Independence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Doraville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Plattekill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cypress Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pebble Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Melvindale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Sauk Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Clearfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pella",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Sparta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Box Elder",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Middle Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Barrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fort Lupton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Victoria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Gunbarrel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Bluffton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Waverly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Fife",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Lehman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Somers Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Woodmere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Gages Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Asbury Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pike Road",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Havre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Snohomish",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Southampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Waynesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Glocester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Clarion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Kutztown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Conway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Danville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Southport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Vienna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Manville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Southborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Bel Air",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Warr Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Tipp City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Struthers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lincoln Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Waldwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Shawano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Red Bank",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "College",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Progress",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fairmount",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ontario",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Old Saybrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Kirkland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cedar Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Hobart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Le Mars",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Cresson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Standish",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Harrisonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Brandon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Littleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Nolensville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Wood River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Friendly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Sleepy Hollow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fair Oaks Ranch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "North Versailles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Holmen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Croydon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Coweta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Fairmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Warrenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Progress Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pleasant Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Waggaman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Laurens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Midland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Bull Mountain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Flat Rock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Quartz Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Molalla",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Scotchtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Alden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "River Vale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fort Oglethorpe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Alcoa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Lake Arbor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Garden Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Orland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Helotes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bee Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Key Largo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Westphalia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Wabash",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "East Bradford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Winterville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Clay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Celebration",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "St. Albans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Mission",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Berwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Alachua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kinnelon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Ventnor City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Colts Neck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rockcreek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Emmett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Sugar Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "River Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "South Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pingree Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Middleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Fort Irwin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Northampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ellisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Madera Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Gloucester Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Brandywine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Brewster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Carroll",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Port Townsend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Coffeyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Chillicothe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lake Barcroft",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Burtonsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Robertsdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Baker City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Itasca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Ware",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Jennings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Woodbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mentone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Little River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Cody",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Mooresville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Conning Towers Nautilus Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "George Mason",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fort Salonga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Russellville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "North Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Clarksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Philipsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Denham Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Scaggsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Corte Madera",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Jewett City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Cuero",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Butler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Budd Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Columbia City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Kittery",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Blacklick Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "East Aurora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Southwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Rio Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Herkimer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Philipstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Alexandria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Eidson Road",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Prospect",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Plains",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Boaz",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Pleasant Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Chesapeake Ranch Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Countryside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "St. Francis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Holualoa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "East Rutherford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Williston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Fort Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Commerce",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "West Tawakoni",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Warrenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Marysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Marlton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Rio del Mar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Picture Rocks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Penn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Cameron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Waterford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Memphis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fort Stewart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Hartford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Port Wentworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Yorkshire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Hermantown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Winfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Oxford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Cold Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Powdersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "La Plata",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Merrill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Bithlo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Penn Forest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Chevy Chase",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Wilmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Rainbow City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Howell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Pleasant Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Blackhawk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hope",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Roxboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Bishop",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "St. Pete Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Rice Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "North Gates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Alderwood Manor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Ecorse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Harleysville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "The Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Mount Holly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Woodbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Eagle Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Craig",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Willoughby Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Walterboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Hazle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "White Meadow Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mount Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Lowell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Silsbee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Sturbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Harvard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Central City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Tell City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Lambertville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Roxborough Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Rye Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Reedsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fair Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "DuPont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hebron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Mound",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Jessup",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Boiling Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Wakefield-Peacedale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Erwin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Rigby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Fort Stockton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Airway Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Parsons",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Fayetteville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Townsend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Meadowbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Lititz",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marcy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Siler City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Platte City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lantana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Woodfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Mount Airy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Carencro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Sutton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Winslow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Ruidoso",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "South Strabane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hondo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Miles City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Brownsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Maidencreek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Manistee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Rayne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Augusta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "New Richmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Greenwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Monticello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "St. Stephens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Little Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Bryan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Amityville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Tomah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Brunswick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Roanoke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Francisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Hickam Housing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Navasota",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Flowood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Pryor Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Bardmoor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bloomfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Cairo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Dayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Boonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Putnam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Louisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Beverly Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Salisbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Brownfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Hackettstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Stuarts Draft",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bay Minette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Golden Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Thompson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Edwards",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Woodmoor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Liberty",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Saline",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "St. Augustine Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Madras",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Heath",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Claymont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Stansbury Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Rotonda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Marlboro Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Lenoir City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Birch Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Portland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Hartland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Waihee-Waiehu",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Moore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "College Place",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Liberty",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Zimmerman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Freetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Newfane",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wesley Chapel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Detroit Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Fultondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "North College Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Cape Elizabeth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Cross Lanes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Benner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marathon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Westwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lexington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Blackstone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Bohemia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hernando",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Neshannock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hastings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cheat Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Harahan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Washington Terrace",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Sultan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Muncy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Madeira",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Anthony",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Gridley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Kendall Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Walworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Girard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Hillview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Burlington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Steger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Sans Souci",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "White Marsh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Spanish Fort",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Lake Elmo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Bethalto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Dallas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Cloverdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Independent Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Mendon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Crawford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Good Hope",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lynwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Basalt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Ivins",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Wagoner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Plainville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Bethel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "St. Marys",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Elwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Redding",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Bloomingdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Sullivan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Rensselaer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Perkiomen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Audubon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Calimesa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Dunn Loring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Flossmoor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Beckett Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Ridgefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hooper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Rathdrum",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Thief River Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Fairview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Anaconda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Murrells Inlet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Union",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Woodburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Monett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Grinnell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Jersey Shore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Grosse Pointe Farms",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Rapid Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Linganore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Edgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Atmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "West Caln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Economy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Burton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Berthoud",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Whitestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "San Elizario",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Dillon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Tiburon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Monmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Highland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Sugarmill Woods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Golden Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Northwest Harborcreek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Jeannette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marlton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Sutherlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Picnic Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Barrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Newmarket",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Seaside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Marshall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "North Codorus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Livingston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Fort Polk South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Micco",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Chanute",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Beecher",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Indianola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Brewer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "La Grange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "McFarland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Silver Springs Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Shelby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Weare",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Pineville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Woodway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Oakbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Valley Cottage",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lindstrom",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Shiprock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "St. Anthony",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Presque Isle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "East Haddam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Hamlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Manteno",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Lake Mohawk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Dexter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Delta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Mechanicsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Albion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Haiku-Pauwela",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Skidaway Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "LaSalle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fairfield Glade",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Waseca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Murphysboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "East Nottingham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fallston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Triangle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Chester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Derby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Lacombe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Felida",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Macedon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Summit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lake Arrowhead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Oakwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Sturgeon Bay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Harrisburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Independence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Forestdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Boonton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Oak Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Harrodsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Sheffield Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Cedar Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Upper Leacock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Aledo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Sellersburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Blanchard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Lisbon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Southside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Whitehouse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Merrydale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "South Abington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sheffield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "St. Albans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Pittsgrove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "O'Hara",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Oakland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "West Haven-Sylvan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Innsbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Evergreen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Logan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Lenox",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Gresham Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Hamilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Poteau",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Old Orchard Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Douglas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "New Prague",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Woodbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kodiak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Aliquippa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bridgeport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Berkeley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Riverdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Lower Swatara",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Covington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Rhinelander",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Seabrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Ville Platte",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Olmsted Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Woodbridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Glencoe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Orange Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Canal Winchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Absecon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Glens Falls North",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Palm Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "West Donegal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Topsham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "North Sarasota",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Richmond Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Oakville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Clanton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Airmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Quakertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Esopus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Monson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Citrus Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Villas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Frankfort Square",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wharton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Redlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Stillwater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "South Kensington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Canonsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Edgewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Graham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "New Albany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Clarendon Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Needles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Pitman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rock Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Perkasie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Clayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Cortez",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Princeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Olney",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Sanger",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Cape St. Claire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Seneca Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kirby",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Glenwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Dumbarton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Garden City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Crestline",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Jerseyville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "New Scotland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Thompsonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Nevada",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Des Peres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Perryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Corrales",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "London Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fort Knox",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Georgetown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Park Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fern Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Edgewater Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rutland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Montesano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Pleasant Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Andalusia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Newstead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Scott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Westampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Incline Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Glenshaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mount Pleasant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Cresskill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Earlimart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hawthorn Woods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Middlebury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Marlborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hoquiam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Brigantine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fishersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Kings Grant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Kennedale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Matawan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Monahans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "North Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Prairie du Sac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "York",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Hampstead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Hyrum",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Richlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Ladue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Rockland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Alamo Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Schuylkill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Reserve",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Orting",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Tuba City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Signal Mountain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Fairmount",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Riverside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Corning",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Orrville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "East Brandywine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Elsmere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Farmville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Long Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sheridan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Sanatoga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Kalifornsky",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Willowbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Green Cove Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Solebury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "White Horse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Perry Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lake Villa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Guntersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Montvale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Aspen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Ione",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Litchfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Brooksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Riverside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Wyoming",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "West Frankfort",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Indian Harbour Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lake Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Lucas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Piedmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Conover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Wetumpka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "East Grand Forks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Mansfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Park Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Yarmouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Laurel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Edgemere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Southampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Morrisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Rawlins",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Succasunna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Plumsted",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Perryton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Closter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "St. Johns",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Terrace Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Frostburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Rolesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Booneville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Sallisaw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "East York",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Sitka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Stuttgart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Coxsackie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mystic Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Waterford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cohasset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Willow Street",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lansdowne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Hillsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Summit View",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Corona de Tucson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Bushkill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Middleton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Tuscumbia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Tobyhanna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mason",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Humboldt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Barton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Londonderry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Helena Valley Southeast",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Sunset Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Sand Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "University of Virginia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Freeport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Prien",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Onalaska",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Pine Lake Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "West Manheim",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Los Altos Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Santa Clara",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Upper Makefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Monticello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Ogden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Lake of the Woods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Congers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Makaha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Spring Valley Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Bayport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Savoy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fair Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Tecumseh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Dover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "North Haledon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Paris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Gaylord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Aransas Pass",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Ellicott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Carbondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Arab",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Long Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fairless Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Highland Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Somers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Charlestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Fletcher",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Druid Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Baxter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Seffner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Millersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wimauma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Miramar Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Hempstead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Gulf Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Buckhannon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Kulpsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Socorro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "West Livingston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Tallulah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Orono",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Bath",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Clover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Petoskey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Beaver Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Tillamook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Oak Hills Place",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Westwego",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Flowery Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "St. Joseph",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Holly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Quincy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Larkfield-Wikiup",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Frostproof",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "West Earl",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Dalhart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "East Donegal",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Garrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Gonzales",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Orosi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Runnemede",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bel Aire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Milton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Aurora",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Firebaugh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Whitefish",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Lopatcong",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mahtomedi",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "West Vero Corridor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Floris",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Savannah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Brighton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Boxford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Montague",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Mount Joy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "McRae-Helena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Trinidad",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Kenton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Carl Junction",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Southeast Arcadia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kinderhook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Paw Paw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lake City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Skowhegan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Erwin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Colorado City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Oak Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Pawling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Moundsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Cumberland Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Montecito",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Denison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Locust Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Buxton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Half Moon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Lugoff",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Fort Mitchell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Conewago",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Manhattan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Honey Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Brooklyn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "North Weeki Wachee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mammoth Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Millis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Johnstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Spotswood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Haddam",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Waynesburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Kennett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Thomson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Irondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Westlake Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Castle Shannon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "North Elba",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Chester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Napoleon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Upper Saddle River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Mahopac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Temperance",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Oberlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Twin Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Lake Norman of Catawba",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Jefferson City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Country Club Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Kenilworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Schroeppel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cortlandville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ellsworth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Wedgefield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Monona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "South Londonderry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Center Line",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Venice Gardens",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pismo Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Beebe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Milliken",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Black Mountain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Crestwood Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Niagara",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Meadow Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Center Moriches",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Litchfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Port Jefferson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Middleport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Eaton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Tuskegee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Ephrata",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Rockwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Canton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Leesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Oradell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Minnetrista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Templeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Gering",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Adams",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Harrison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Kennedy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hazard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Summit Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Gray",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Cherry Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Omak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Vandenberg Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "West Dundee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Blandon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Duvall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Collier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ayer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Vinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Joshua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Oak Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Monument",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Hopkinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Croton-on-Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Bellevue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Briarcliff Manor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Sodus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Alliance",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Wickenburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Sterling",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Allegheny",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Selah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Shorewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Helena Valley West Central",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Applewood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Kronenwetter",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Gilberts",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Bargersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Hampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Sudden Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hollymead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Rockmart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Lake Carmel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lockwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Wyoming",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Lake Dallas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bloomingdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Rolling Hills Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Cleveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Willits",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Clinton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Skiatook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Decorah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Brookhaven",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Diamondhead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Floresville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bedminster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Ripley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Chardon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lancaster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Morehead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Boston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ripon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Odessa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Mayo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Hamilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Northfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Menominee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Pleasant Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pahokee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Ahuimanu",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Crete",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Loudoun Valley Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Chestnut Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Laurel Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Island Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Oak Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Seaford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Evergreen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Cumberland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Mascoutah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Brazil",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "North Coventry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Aberdeen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Jennings Lodge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Jefferson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Manhasset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Green",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Lampasas",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Village Green-Green Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Byram",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Kensington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Fort Belvoir",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "West Boylston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Brentwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Laughlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Chartiers",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Aztec",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "St. Martin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "La Junta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Murphy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Southwest Ranches",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Quincy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Richland Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Maryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Baltimore Highlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Hillside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Columbiana",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Logan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Batesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Glastonbury Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Sheboygan Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Wytheville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Hollis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "St. Francis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Hitchcock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Catalina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Bonner Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Long Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Camp Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Mansfield Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Wilmington Manor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Topanga",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Downingtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Grand Ledge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Old Forge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Upton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Lincolnshire",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Blair",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Jersey Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lexington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Richfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Centerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "West Long Branch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Flushing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Fruitvale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Seminole",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Altoona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Grand Blanc",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Abingdon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Bridge City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Woodlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hastings-on-Hudson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hardyston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bryans Road",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "York",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Waterboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Halifax",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Princeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Sangaree",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Templeton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "North Cornwall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Spring",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Los Fresnos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "South Weber",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Woodstock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Watford City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "Crookston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Madison Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Covington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Latrobe",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "DeFuniak Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Williamsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Olivette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Baldwinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Sound Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Winters",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Breckenridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Interlaken",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Southgate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Medina",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Strathmore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Seville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Kenai",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Carnegie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Aubrey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Pittston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Charlestown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Holly Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Withamsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Kaufman",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Campbell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Chester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Milan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Rhinebeck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Oroville East",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Estes Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Waite Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Antigo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Westminster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Park City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Greenfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Forsyth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "McGregor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cheraw",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Swainsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Jasper",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Wynne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Round Lake Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Quarryville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Salida",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "South Boston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Citrus Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Middlebury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Albion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Carneys Point",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "East Huntingdon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Wading River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Salem",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Dighton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Payette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Idaho",
    "capital": ""
  },
  {
    "City": "Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Gettysburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Highlands",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Welcome",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Upper Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Shelburne",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Kasson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Granite Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Creston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Clear Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Steele Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Thornbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fort Scott",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Pukalani",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Hornsby Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Plaistow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Polk",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Carbondale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Robinwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Berwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Perry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Sebastopol",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Upper Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Webster City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Hastings",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Plain City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Indiantown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Fort Dix",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Collinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Wellington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Piñon Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Auburn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Thurmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Old Jefferson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "North Patchogue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Brighton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Oakdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Lamar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Butler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Chehalis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Richmond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Rhode Island",
    "capital": ""
  },
  {
    "City": "Etowah",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Waller",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Chippewa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Orange",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Scotia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Big Flats",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "East Manchester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Marshfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Shirley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Eden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Devils Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Dakota",
    "capital": ""
  },
  {
    "City": "River Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Waupaca",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Wapato",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "South Beloit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Kula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Broadview",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Cushing",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Pike Creek",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Milan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Allegany",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Senatobia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Sioux Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Winslow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Escalon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lake Shore",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Thomaston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Pulaski",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Emerson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Bernardsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Caribou",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Tuttle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Palmyra",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "LaFayette",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Palmyra",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Livonia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Joshua Tree",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Leola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Dayton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Inwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Plumas Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hales Corners",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Schaghticoke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Hughson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Scappoose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Lawrence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "McCook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "East Fallowfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lago Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Columbia Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Dry Run",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "New Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Marshall",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Lower Windsor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Easton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Montrose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Albertville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Porters Neck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Gold River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Berlin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Delafield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Mount Horeb",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Big Stone Gap",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Gonzales",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Royalton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Brecknock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pikeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Haddon Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Page",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "North Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Fairfax",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Yreka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Benton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Norwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Marengo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Fairlawn",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Williamstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Robinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Tyrone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Chesterfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "North Star",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Purcell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Lowell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Landen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Dos Palos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Oceano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Fairfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Sappington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Maurice River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "McCordsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Silvis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Newport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Southwood Acres",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Mount Shasta",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "West Brandywine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ojai",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Berwick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Monticello",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Smithfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Villa Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "South Heidelberg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "St. Gabriel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Lander",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "Palmer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Dock Junction",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Keystone Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "West Cocalico",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "White Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Rockton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Ashland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Florence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Old Town",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "Edgerton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "New London",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Stratham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "North Bend",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hiawatha",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Hubbard",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "River Rouge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Sandwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Belen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Inverness",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cotati",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Wauseon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mills River",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Saranac Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Sanibel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Soldotna",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Port Jefferson Station",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Old Lyme",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Greenville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "West Concord",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "New Bremen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mentor-on-the-Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Waterloo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "East Marlborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Ancient Oaks",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Farr West",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "South Apopka",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Pembroke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Robeson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Upper Deerfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Providence Village",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Inverness",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Le Roy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Gypsum",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Clarkston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Tolleson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "New Roads",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Ponchatoula",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Camp Pendleton North",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Smithville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "East Pikeland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Eden Isle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Pomona",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Charles City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Stanwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Hampden",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maine",
    "capital": ""
  },
  {
    "City": "St. Rose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "St. Joseph",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Hudsonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Spring Hill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Philadelphia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Bellbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mexia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Frankfort",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Kenwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Middleborough Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Mantua",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Makawao",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Frankstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Gibsonville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Dade City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Middlesex",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Red Chute",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Village St. George",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Winooski",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Maxatawny",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Coeymans",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Valley Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kansas",
    "capital": ""
  },
  {
    "City": "Umatilla",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Oak Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Strasburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Geneva",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Whiteville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Derry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "University of California-Davis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Belmont",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Ephraim",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Buffalo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lochbuie",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "North Springfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Longboat Key",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Buena Vista",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Dahlonega",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Nebraska City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Hardeeville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Connellsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Torrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wyoming",
    "capital": ""
  },
  {
    "City": "New Cumberland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Pompey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Pinehurst",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Huron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Alta Sierra",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Northridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Moab",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Wildwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "New Sewickley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Baywood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Northport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Ralston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Madison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "Tanglewilde",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Ormond-by-the-Sea",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Wawayanda",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Delphos",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Stevensville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Lihue",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Hawaii",
    "capital": ""
  },
  {
    "City": "Murillo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "St. Louis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Hobart",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Pleasantville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Neptune Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Crystal City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Union Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Busti",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Richland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Bedford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Belle Isle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Woodstock",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Collinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Willow Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Emmitsburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Willows",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Parkville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Roosevelt",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "East Hills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Acton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Rockport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "La Feria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Tappan",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Cochituate",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "St. Johnsbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Vermont",
    "capital": ""
  },
  {
    "City": "Durham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Whitinsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Batesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Lake Lorraine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Seward",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Midland Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lebanon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Moapa Valley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nevada",
    "capital": ""
  },
  {
    "City": "Middletown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Corbin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Skaneateles",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Riverdale Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Shenango",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Knoxville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Swanzey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "West Bridgewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Unionville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Gunnison",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Conewago",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Morrow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Sandston",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Pembroke",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Earl",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Belle Plaine",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Nuevo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Enoch",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Pacific",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Canfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Independence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Elsa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Centerville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "Commerce",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Austell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Parkville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "East Vincent",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Hillsborough",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Crozet",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Pollock Pines",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Gilford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Tyrone",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Larose",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Lawrenceville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Brook Highland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Cottage Grove",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "De Soto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Palmyra",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Nappanee",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Atherton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Nibley",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Kingsland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Walled Lake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Stow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Bedminster",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Winsted",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Bonne Terre",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Live Oak",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Attica",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Rockville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Calipatria",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Mead",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Green Brook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Parkwood",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Washington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Russellville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Pinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Selma",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Marble Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Decatur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Fort Myers Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Dunbar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Byron Center",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Homestead Meadows South",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Portage Lakes",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Meridianville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Homeland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Osceola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Syracuse",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Clarkson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Flatwoods",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Fair Plain",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Gateway",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Mount Ivy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Milton-Freewater",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "River Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sausalito",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "South Lockport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Highland Heights",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Woodlake",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Virginia",
    "capital": ""
  },
  {
    "City": "Barnesville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Delaware",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Newbury",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Berrien Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "St. Helena",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Hudson Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Noble",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Gulf Park Estates",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Oak Ridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Rochester",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Orange City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Seminole",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Groesbeck",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Marksville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Truth or Consequences",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Summit",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Laurium",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Archbald",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Providence",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Willis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Rancho Calaveras",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kentfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kiel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Gouverneur",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Wellsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Mount Carmel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Crete",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Nebraska",
    "capital": ""
  },
  {
    "City": "Meraux",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Garden Home-Whitford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "St. Augustine Beach",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Cazenovia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Zuni Pueblo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Mexico",
    "capital": ""
  },
  {
    "City": "Mendota",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Cos Cob",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Adel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Heathrow",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Calverton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Galliano",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Eagle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Hillsboro",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Oakdale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Barberton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Keyport",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Beacon Square",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Brier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Trumann",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Milltown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Epping",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Hamilton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Montana",
    "capital": ""
  },
  {
    "City": "Leitchfield",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Creswell",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Bondurant",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "Stratford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Prairie View",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Catoosa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "Paintsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Atkinson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Plymouth Meeting",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Bremen",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Ocean City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Upper Freehold",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Vandalia",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Edgemoor",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Delaware",
    "capital": ""
  },
  {
    "City": "Southampton",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Westmere",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fort Meade",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Osprey",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Farmington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Franklin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Peru",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Fort Pierce North",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sturgis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Dakota",
    "capital": ""
  },
  {
    "City": "West Samoset",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Bern",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Treasure Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Spring Lake Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": ""
  },
  {
    "City": "Black Jack",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Lewisburg",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "West Virginia",
    "capital": ""
  },
  {
    "City": "Heber Springs",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Conemaugh",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "West Slope",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Woodland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Westbrook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Great Barrington",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Gulf Breeze",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Viola",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Freeland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Michigan",
    "capital": ""
  },
  {
    "City": "Avon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Lake Mills",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Byron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Latimer",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Thermalito",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Whitemarsh Island",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Colusa",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Union",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Junction City",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oregon",
    "capital": ""
  },
  {
    "City": "Merrimac",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Ben Lomond",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "University Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Illinois",
    "capital": ""
  },
  {
    "City": "Gleneagle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Colorado",
    "capital": ""
  },
  {
    "City": "Mountainside",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Moores Mill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "East Buffalo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Perry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Chestertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "St. Martinville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Louisiana",
    "capital": ""
  },
  {
    "City": "Harrisville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Utah",
    "capital": ""
  },
  {
    "City": "Huron",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Mechanicstown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Loomis",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Jackson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "King",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "West Glens Falls",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Youngtown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arizona",
    "capital": ""
  },
  {
    "City": "Phelps",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Upper Nazareth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lemoore Station",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Lutherville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Milford",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Upper Mount Bethel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Greenbrier",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Tabernacle",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "Lecanto",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Eldridge",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Iowa",
    "capital": ""
  },
  {
    "City": "East Earl",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Old Greenwich",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Connecticut",
    "capital": ""
  },
  {
    "City": "Idabel",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Oklahoma",
    "capital": ""
  },
  {
    "City": "South Patrick Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Sunnyvale",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Bee Cave",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Texas",
    "capital": ""
  },
  {
    "City": "Lovejoy",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Georgia",
    "capital": ""
  },
  {
    "City": "Clay",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Fircrest",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Washington",
    "capital": ""
  },
  {
    "City": "Dunbar",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lincoln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Milo",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Huntertown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Crossett",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Arkansas",
    "capital": ""
  },
  {
    "City": "Taneytown",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Maryland",
    "capital": ""
  },
  {
    "City": "Mount Vernon",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Fort Myers Shores",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": ""
  },
  {
    "City": "Kirtland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "Lakes of the Four Seasons",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Indiana",
    "capital": ""
  },
  {
    "City": "Marion",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "South Carolina",
    "capital": ""
  },
  {
    "City": "San Martin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Kimberly",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Taylor Mill",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Kentucky",
    "capital": ""
  },
  {
    "City": "Yardville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Jersey",
    "capital": ""
  },
  {
    "City": "East Shoreham",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "South Hanover",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Valley Park",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Missouri",
    "capital": ""
  },
  {
    "City": "Thousand Palms",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Amory",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Mississippi",
    "capital": ""
  },
  {
    "City": "Columbus",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Wisconsin",
    "capital": ""
  },
  {
    "City": "Lake Mathews",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Marvin",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "North Carolina",
    "capital": ""
  },
  {
    "City": "Fowler",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": ""
  },
  {
    "City": "Fishhook",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alaska",
    "capital": ""
  },
  {
    "City": "Hoosick",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Breinigsville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Lincoln",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Alabama",
    "capital": ""
  },
  {
    "City": "Groveland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Massachusetts",
    "capital": ""
  },
  {
    "City": "Myers Corner",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Millersville",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Tennessee",
    "capital": ""
  },
  {
    "City": "Cortland",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Ohio",
    "capital": ""
  },
  {
    "City": "East Coventry",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Pennsylvania",
    "capital": ""
  },
  {
    "City": "Williamson",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": ""
  },
  {
    "City": "Plymouth",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New Hampshire",
    "capital": ""
  },
  {
    "City": "Desert Palms",
    "Country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
  },
  {
  },