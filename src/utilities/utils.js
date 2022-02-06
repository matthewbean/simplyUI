//color changing
const isValidHex = (hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))

const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)

const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") {return a / 255}
    if ((typeof alpha != "number") || alpha <0 || alpha >1){
      return 1
    }
    return alpha
}

const hexToRGB = (hex, alpha) => {
    if (!isValidHex(hex)) {throw new Error("Invalid HEX")}
    const chunkSize = Math.floor((hex.length - 1) / 3)
    const hexArr = getChunksFromString(hex.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${(alpha?(r+g+b)/756: 1)})`
}

export const shade=(p,color, alpha )=>{
  var c;
  if (color[0]  === 'r'){
    c=color.replace(/[^\d^\,]/g,'')
    c=c.split(',')
    c=`rgba(${c[0]}, ${c[1]}, ${c[2]}, ${(alpha?((parseInt(c[0])+parseInt(c[1])+parseInt(c[2]))/756): 1)})`
  } else {
    c=hexToRGB(color, alpha)
  }

  var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:p*255**2,P=P?1+p:1-p;
  return"rgb"+(d?"a(":"(")+r((P*i(a[3]=="a"?a.slice(5):a.slice(4))**2+t)**0.5)+","+r((P*i(b)**2+t)**0.5)+","+r((P*i(c)**2+t)**0.5)+(d?","+d:")");
}