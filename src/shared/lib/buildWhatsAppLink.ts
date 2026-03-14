export function buildWhatsAppLink(number: string) { return `https://wa.me/${number.replace(/[^\d]/g, "")}`; }
