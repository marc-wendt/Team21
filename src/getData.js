import {
  badenWürttemberg,
  bayern,
  berlin,
  bremen,
  hamburg,
  hessen,
  mecklenburgVorpommern,
  niedersachsen,
  nordrheinWestfalen,
  rheinlandPfalz,
  saarland,
  sachsenAnhalt,
  sachsen,
  schleswigHolstein,
  thüringen,
  brandenburg,
} from "./bundeslandData";

export const getBundeslandData = (bundesland, setData) => {
  switch (bundesland) {
    case "Baden-Württemberg":
      setData(badenWürttemberg);
      break;
    case "Bayern":
      setData(bayern);
      break;
    case "Berlin":
      setData(berlin);
      break;
    case "Brandenburg":
      setData(brandenburg);
      break;
    case "Bremen":
      setData(bremen);
      break;
    case "Hamburg":
      setData(hamburg);
      break;
    case "Hessen":
      setData(hessen);
      break;
    case "Mecklenburg-Vorpommern":
      setData(mecklenburgVorpommern);
      break;
    case "Niedersachsen":
      setData(niedersachsen);
      break;
    case "Nordrhein-Westfalen":
      setData(nordrheinWestfalen);
      break;
    case "Rheinland-Pfalz":
      setData(rheinlandPfalz);
      break;
    case "Saarland":
      setData(saarland);
      break;
    case "Sachsen-Anhalt":
      setData(sachsenAnhalt);
      break;
    case "Sachsen":
      setData(sachsen);
      break;
    case "Schleswig-Holstein":
      setData(schleswigHolstein);
      break;
    case "Thüringen":
      setData(thüringen);
      break;
    default:
      break;
  }
};

// get only inland data for specific bundesland
export const getBundeslandInlandData = (bundesland, setData) => {
  let d;

  switch (bundesland) {
    case "Baden-Württemberg":
      d = badenWürttemberg;
      break;
    case "Bayern":
      d = bayern;
      break;
    case "Berlin":
      d = berlin;
      break;
    case "Brandenburg":
      d = brandenburg;
      break;
    case "Bremen":
      d = bremen;
      break;
    case "Hamburg":
      d = hamburg;
      break;
    case "Hessen":
      d = hessen;
      break;
    case "Mecklenburg-Vorpommern":
      d = mecklenburgVorpommern;
      break;
    case "Niedersachsen":
      d = niedersachsen;
      break;
    case "Nordrhein-Westfalen":
      d = nordrheinWestfalen;
      break;
    case "Rheinland-Pfalz":
      d = rheinlandPfalz;
      break;
    case "Saarland":
      d = saarland;
      break;
    case "Sachsen-Anhalt":
      d = sachsenAnhalt;
      break;
    case "Sachsen":
      d = sachsen;
      break;
    case "Schleswig-Holstein":
      d = schleswigHolstein;
      break;
    case "Thüringen":
      d = thüringen;
      break;
    default:
      d = [];
      break;
  }

  let arr = [];
  d.forEach(function (el) {
    arr.push({
      month: el.month,
      inland: el.inland,
      ausland: 0,
      hotels: el.hotels,
    });
  });

  setData(arr);
};

// get only ausland data for specific bundesland
export const getBundeslandAuslandData = (bundesland, setData) => {
  let d;

  switch (bundesland) {
    case "Baden-Württemberg":
      d = badenWürttemberg;
      break;
    case "Bayern":
      d = bayern;
      break;
    case "Berlin":
      d = berlin;
      break;
    case "Brandenburg":
      d = brandenburg;
      break;
    case "Bremen":
      d = bremen;
      break;
    case "Hamburg":
      d = hamburg;
      break;
    case "Hessen":
      d = hessen;
      break;
    case "Mecklenburg-Vorpommern":
      d = mecklenburgVorpommern;
      break;
    case "Niedersachsen":
      d = niedersachsen;
      break;
    case "Nordrhein-Westfalen":
      d = nordrheinWestfalen;
      break;
    case "Rheinland-Pfalz":
      d = rheinlandPfalz;
      break;
    case "Saarland":
      d = saarland;
      break;
    case "Sachsen-Anhalt":
      d = sachsenAnhalt;
      break;
    case "Sachsen":
      d = sachsen;
      break;
    case "Schleswig-Holstein":
      d = schleswigHolstein;
      break;
    case "Thüringen":
      d = thüringen;
      break;
    default:
      d = [];
      break;
  }

  let arr = [];
  d.forEach(function (el) {
    arr.push({
      month: el.month,
      inland: 0,
      ausland: el.ausland,
      hotels: el.hotels,
    });
  });

  setData(arr);
};

// gets empty array
export const getEmptyBundeslandData = (setData) => {
  let arr = [];
  setData(arr);
};
