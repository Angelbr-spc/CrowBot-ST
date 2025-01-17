function handler(m, { text }) {
if (!text) return conn.reply(m.chat, '🍬 Por favor, ingresa el texto que quieres transformar.', m, rcanal)

if (command == 'letra1' || command == 'font1') {

let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

m.reply(teks.replace(/[a-z]/gi, v => {
return {
'a': 'ᥲ',
'b': 'ᑲ',
'c': 'ᥴ',
'd': 'ძ',
'e': 'ᥱ',
'f': '𝖿',
'g': 'g',
'h': 'һ',
'i': 'і',
'j': 'ȷ',
'k': 'k',
'l': 'ᥣ',
'm': 'm',
'n': 'ᥒ',
'o': '᥆',
'p': '⍴',
'q': '𝗊',
'r': 'r',
's': 's',
't': '𝗍',
'u': 'ᥙ',
'v': '᥎',
'w': 'ᥕ',
'x': '᥊',
'y': 'ᥡ',
'z': 'z'
}[v.toLowerCase()] || v }))}

handler.help = ['letra *<texto>*']
handler.tags = ['fun']
handler.command = ['letra1', 'font1']
handler.register = true

export default handler