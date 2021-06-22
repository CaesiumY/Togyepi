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

export default {
  cec,
};
