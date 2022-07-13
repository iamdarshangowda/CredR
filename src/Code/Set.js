function char(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let op1 = [...str1].filter((item) => !str2.includes(item)).join("");
  let op2 = [...str2].filter((item) => !str1.includes(item)).join("");
  return `Output1 is ${op1 || null}, Output2 is ${op2 || null}`;
}
