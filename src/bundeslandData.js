export async function getBundeslandData(bundesland) {
  let data;
  await fetchData().then((d) => {
    data = d;
  });
  let list = data.split("\\n");

  // remove first 8 + last 4 entries because irrelevant
  list.splice(0, 8);
  list.splice(list.length - 4, 4);

  // // map Bundesland to index
  let i;
  switch (bundesland) {
    case "Baden-Württemberg":
      i = 0;
      break;
    case "Bayern":
      i = 2;
      break;
    case "Berlin":
      i = 4;
      break;
    case "Brandenburg":
      i = 6;
      break;
    case "Bremen":
      i = 8;
      break;
    case "Hamburg":
      i = 10;
      break;
    case "Hessen":
      i = 12;
      break;
    case "Mecklenburg-Vorpommern":
      i = 14;
      break;
    case "Niedersachsen":
      i = 16;
      break;
    case "Nordrhein-Westfalen":
      i = 18;
      break;
    case "Rheinland-Pfalz":
      i = 20;
      break;
    case "Saarland":
      i = 22;
      break;
    case "Sachsen-Anhalt":
      i = 24;
      break;
    case "Sachsen":
      i = 26;
      break;
    case "Schleswig-Holstein":
      i = 28;
      break;
    case "Thüringen":
      i = 30;
      break;
    default:
      break;
  }

  // inland data
  const elementIN = list[i];
  let resIN = elementIN.split(";");

  // ausland data
  const elementAUS = list[i + 1];
  let resAUS = elementAUS.split(";");

  let arr = [];
  arr.push(
    {
      month: "Januar 19",
      inland: parseInt(resIN[4]),
      ausland: parseInt(resAUS[4]),
    },
    {
      month: "Februar 19",
      inland: parseInt(resIN[5]),
      ausland: parseInt(resAUS[5]),
    },
    {
      month: "März 19",
      inland: parseInt(resIN[6]),
      ausland: parseInt(resAUS[6]),
    },
    {
      month: "April 19",
      inland: parseInt(resIN[7]),
      ausland: parseInt(resAUS[7]),
    },
    {
      month: "Mai 19",
      inland: parseInt(resIN[8]),
      ausland: parseInt(resAUS[8]),
    },
    {
      month: "Juni 19",
      inland: parseInt(resIN[9]),
      ausland: parseInt(resAUS[9]),
    },
    {
      month: "Juli 19",
      inland: parseInt(resIN[10]),
      ausland: parseInt(resAUS[10]),
    },
    {
      month: "August 19",
      inland: parseInt(resIN[11]),
      ausland: parseInt(resAUS[11]),
    },
    {
      month: "September 19",
      inland: parseInt(resIN[12]),
      ausland: parseInt(resAUS[12]),
    },
    {
      month: "Oktober 19",
      inland: parseInt(resIN[13]),
      ausland: parseInt(resAUS[13]),
    },
    {
      month: "November 19",
      inland: parseInt(resIN[14]),
      ausland: parseInt(resAUS[14]),
    },
    {
      month: "Dezember 19",
      inland: parseInt(resIN[15]),
      ausland: parseInt(resAUS[15]),
    },

    {
      month: "Januar 20",
      inland: parseInt(resIN[16]),
      ausland: parseInt(resAUS[16]),
    },
    {
      month: "Februar 20",
      inland: parseInt(resIN[17]),
      ausland: parseInt(resAUS[17]),
    },
    {
      month: "März 20",
      inland: parseInt(resIN[18]),
      ausland: parseInt(resAUS[18]),
    },
    {
      month: "April 20",
      inland: parseInt(resIN[19]),
      ausland: parseInt(resAUS[19]),
    },
    {
      month: "Mai 20",
      inland: parseInt(resIN[20]),
      ausland: parseInt(resAUS[20]),
    },
    {
      month: "Juni 20",
      inland: parseInt(resIN[21]),
      ausland: parseInt(resAUS[21]),
    },
    {
      month: "Juli 20",
      inland: parseInt(resIN[22]),
      ausland: parseInt(resAUS[22]),
    },
    {
      month: "August 20",
      inland: parseInt(resIN[23]),
      ausland: parseInt(resAUS[23]),
    },
    {
      month: "September 20",
      inland: parseInt(resIN[24]),
      ausland: parseInt(resAUS[24]),
    },
    {
      month: "Oktober 20",
      inland: parseInt(resIN[25]),
      ausland: parseInt(resAUS[25]),
    },
    {
      month: "November 20",
      inland: parseInt(resIN[26]),
      ausland: parseInt(resAUS[26]),
    },
    {
      month: "Dezember 20",
      inland: parseInt(resIN[27]),
      ausland: parseInt(resAUS[27]),
    },

    {
      month: "Januar 21",
      inland: parseInt(resIN[28]),
      ausland: parseInt(resAUS[28]),
    },
    {
      month: "Februar 21",
      inland: parseInt(resIN[29]),
      ausland: parseInt(resAUS[29]),
    },
    {
      month: "März 21",
      inland: parseInt(resIN[30]),
      ausland: parseInt(resAUS[30]),
    },
    {
      month: "April 21",
      inland: parseInt(resIN[31]),
      ausland: parseInt(resAUS[31]),
    },
    {
      month: "Mai 21",
      inland: parseInt(resIN[32]),
      ausland: parseInt(resAUS[32]),
    },
    {
      month: "Juni 21",
      inland: parseInt(resIN[33]),
      ausland: parseInt(resAUS[33]),
    },
    {
      month: "Juli 21",
      inland: parseInt(resIN[34]),
      ausland: parseInt(resAUS[34]),
    },
    {
      month: "August 21",
      inland: parseInt(resIN[35]),
      ausland: parseInt(resAUS[35]),
    },
    {
      month: "September 21",
      inland: parseInt(resIN[36]),
      ausland: parseInt(resAUS[36]),
    },
    {
      month: "Oktober 21",
      inland: parseInt(resIN[37]),
      ausland: parseInt(resAUS[37]),
    },
    {
      month: "November 21",
      inland: parseInt(resIN[38]),
      ausland: parseInt(resAUS[38]),
    },
    {
      month: "Dezember 21",
      inland: parseInt(resIN[39]),
      ausland: parseInt(resAUS[39]),
    },

    {
      month: "Januar 22",
      inland: parseInt(resIN[40]),
      ausland: parseInt(resAUS[40]),
    },
    {
      month: "Februar 22",
      inland: parseInt(resIN[41]),
      ausland: parseInt(resAUS[41]),
    },
    {
      month: "März 22",
      inland: parseInt(resIN[42]),
      ausland: parseInt(resAUS[42]),
    },
    {
      month: "April 22",
      inland: parseInt(resIN[43]),
      ausland: parseInt(resAUS[43]),
    },
    {
      month: "Mai 22",
      inland: parseInt(resIN[44]),
      ausland: parseInt(resAUS[44]),
    },
    {
      month: "Juni 22",
      inland: parseInt(resIN[45]),
      ausland: parseInt(resAUS[45]),
    },
    {
      month: "Juli 22",
      inland: parseInt(resIN[46]),
      ausland: parseInt(resAUS[46]),
    },
    {
      month: "August 22",
      inland: parseInt(resIN[47]),
      ausland: parseInt(resAUS[47]),
    },
    {
      month: "September 22",
      inland: parseInt(resIN[48]),
      ausland: parseInt(resAUS[48]),
    },
    {
      month: "Oktober 22",
      inland: parseInt(resIN[49]),
      ausland: parseInt(resAUS[49]),
    },
    {
      month: "November 22",
      inland: parseInt(resIN[50]),
      ausland: parseInt(resAUS[50]),
    },
    {
      month: "Dezember 22",
      inland: parseInt(resIN[51]),
      ausland: parseInt(resAUS[51]),
    }
  );

  return arr;
}

async function fetchData() {
  const user = "DEYOD01FTO";
  const password = "InfoVis123";
  const startYear = "2019";
  const endYear = "2022";

  return await fetch(
    `https://www-genesis.destatis.de/genesisWS/rest/2020/data/timeseries?username=${user}&password=${password}&name=45412LM001&area=all&startyear=${startYear}&endyear=${endYear}&format=csv&language=de&contents=GAST01`
  )
    .then((response) => response.text())
    .catch((error) => console.error(error));
}
