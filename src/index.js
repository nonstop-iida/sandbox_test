// /**
//  *  論理演算子の本当の意味を知ろう && ||
//  */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2) {
//    console.log('1か2はtrue')
//  } else {
//    console.log('どちらもfalse')
//  }

//  if (flag1 && flag2) {
//   console.log('1も2もtrue')
// } else {
//   console.log('どちらもtrueではない')
// }

//左がfalse、右がtrue
const num = null;
const fee = num && "金額が未設定";

console.log(fee);
