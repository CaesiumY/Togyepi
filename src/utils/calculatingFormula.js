const cec = {
  id: 0,
  name: "CEC",
  description: "1N- Cacl2 치환침출법 계산",
  params: {
    a: "시료 적정에 소요된 황산 ml",
    b: "Blank 적정에 소요된 황산 ml",
  },
  rules: [
    "황산 적정용액 규정농도 : 0.05",
    "토양시료 무게 : 5g",
    "단위 환산인자 cmol/kg(=me/100g) : 100g",
  ],
  formula: (a, b) => (a - b) * 5,
};

const microwave = {
  id: 1,
  name: "Microwave",
  description: "중금속",
  params: {
    T: "시료 측정치 값",
    B: "Blank 측정치 값",
    S: "시료양",
  },
  rules: ["100 = 100ml mess up량"],
  formula: (T, B, S) => ((T - B) * 100) / S,
};

const organicCarbonContentOfSoil = {
  id: 2,
  name: "Organic Carbon content of Soil",
  description: "토양의 유기탄소함량",
  params: {
    B: "Blank 적정치 0.2-N 황산제1철암모니움요액 소요량",
    T: "시료 적정치 0.2-N 황산제1철암모니움요액 소요량",
    F: "적정액의 농도보정계수",
    W: "토양무게",
  },
  rules: [],
  formula: (B, T, F, W) => (B - T) * F * (12 / 4000) * (100 / W) * 1.724,
};

const nitrogen = {
  id: 3,
  name: "Nitrogen",
  description: "전질소 계산",
  params: {
    T: "황산표준용액 적정에 쇼요된 ml수",
    B: "Blank 의 환산표준액 적정에 소요된 ml수",
    F: "황산표준액의 보정치(factor)",
    N: "황산표준액의 Normality",
    W: "토양시료의 무게(g)",
  },
  rules: [],
  formula: (T, B, F, N, W) =>
    (T - B) * F * N * 14 * (1 / 1000) * ((1 / W) * 100),
};

const ec = {
  id: 4,
  name: "EC",
  description: "삼투압의 원리",
  params: {
    water: "증류수(ml)",
    weight: "토양무게",
    value: "측정치",
    factor: "온도보정계수",
  },
  rules: [],
  formula: (water, weight, value, factor) => (water / weight) * value * factor,
};

const salinity = {
  id: 5,
  name: "Salinity",
  description: "삼투압의 원리, 염농도 계산",
  params: {
    water: "증류수(ml)",
    weight: "토양무게",
    value: "측정치",
    factor: "온도보정계수",
  },
  rules: [],
  formula: (water, weight, value, factor) =>
    (water / weight) * value * factor * 0.064,
};

const cl2 = {
  id: 6,
  name: "Cl_2",
  description: "0.02-N AgNO3 적정 계산",
  params: {
    value: "측정치",
  },
  rules: ["Cl_2(ppm) = 0.02-N AgNO3 일때 염소"],
  formula: (value) => 5 * 0.04 * 0.07091 * 10000 * value,
};

const cl1 = {
  id: 7,
  name: "Cl_1",
  description: "0.01-N AgNO3 적정 계산",
  params: {
    value: "측정치",
  },
  rules: ["Cl_2(ppm) = 0.01-N AgNO3 일때 염소"],
  formula: (value) => 5 * 0.04 * 0.03545 * 10000 * value,
};

const ammoniaNitrogenKjeldahl = {
  id: 8,
  name: "Ammonia Nitrogen Kjeldahl",
  description: "암모니아태 질소(NH4+-N) Kjeldahl법",
  params: {
    T: "황산표준용액의 ml수",
    B: "Blank의 황산표준액의 ml수",
    F: "황산표준액의 보정치(factor)",
    N: "황산표준액의 Normality",
    W: "토양시료의 무게(g)",
    leachate: "침출액량",
    sample: "취한시료액량",
  },
  rules: [],
  formula: (T, B, F, N, W, leachate, sample) =>
    (T - B) * F * N * 14 * (1 / 1000) * (W / leachate) * (1 / sample) * 1000000,
};

const nitrateNitrogenKjeldahl = {
  id: 9,
  name: "Nitrate Nitrogen Kjeldahl",
  description: "질산태 질소(NO3-N) Kjeldahl법",
  params: {
    T: "황산표준용액의 ml수",
    B: "Blank의 황산표준액의 ml수",
    F: "황산표준액의 보정치(factor)",
    N: "황산표준액의 Normality",
    W: "토양시료의 무게(g)",
    leachate: "침출액량",
    sample: "취한시료액량",
  },
  rules: [],
  formula: (T, B, F, N, W, leachate, sample) =>
    (T - B) * F * N * 14 * (1 / 1000) * (W / leachate) * (1 / sample) * 1000000,
};

const ammoniaNitrogenIndophenolBlueDrysoil = {
  id: 10,
  name: "Ammonia Nitrogen Indophenol Blue Drysoil",
  description: "암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(건토)",
  params: {
    a: "기울기",
    dilution_factor: "희석배수",
    absorbance: "흡광도",
  },
  rules: [],
  formula: (a, dilution_factor, absorbance) =>
    a * (50 / 5) * dilution_factor * absorbance,
};

const ammoniaNitrogenIndophenolBlueWetsoil = {
  id: 11,
  name: "Ammonia Nitrogen Indophenol Blue Wetsoil",
  description: "암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(습토)",
  params: {
    a: "기울기",
    dilution_factor: "희석배수",
    absorbance: "흡광도",
    wetsoil: "습토",
    drysoil: "건토",
  },
  rules: [],
  formula: (a, dilution_factor, absorbance, wetsoil, drysoil) =>
    a * dilution_factor * absorbance * ((50 + (wetsoil - drysoil)) / wetsoil),
};

const nitrateNitrogenBrucineDrysoil = {
  id: 12,
  name: "Nitrate Nitrogen Brucine Drysoil",
  description: "질산태 질소(NO3-N) Brucine - 비색법(건토)",
  params: {
    a: "기울기",
    dilution_factor: "희석배수",
    absorbance: "흡광도",
  },
  rules: [],
  formula: (a, dilution_factor, absorbance) =>
    a * (50 / 5) * dilution_factor * absorbance,
};

const nitrateNitrogenBrucineWetsoil = {
  id: 13,
  name: "Nitrate Nitrogen Brucine Wetsoil",
  description: "질산태 질소(NO3-N) Brucine - 비색법(습토)",
  params: {
    a: "기울기",
    dilution_factor: "희석배수",
    absorbance: "흡광도",
    wetsoil: "습토",
    drysoil: "건토",
  },
  rules: [],
  formula: (a, dilution_factor, absorbance, wetsoil, drysoil) =>
    a * dilution_factor * absorbance * ((50 + (wetsoil - drysoil)) / wetsoil),
};

export default {
  cec,
  microwave,
  organicCarbonContentOfSoil,
  nitrogen,
  ec,
  salinity,
  cl2,
  cl1,
  ammoniaNitrogenKjeldahl,
  nitrateNitrogenKjeldahl,
  ammoniaNitrogenIndophenolBlueDrysoil,
  ammoniaNitrogenIndophenolBlueWetsoil,
  nitrateNitrogenBrucineDrysoil,
  nitrateNitrogenBrucineWetsoil,
};
