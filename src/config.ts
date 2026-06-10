export const config = {
  name: 'Amanda Stys',
  role: 'Terapeuta',
  crp: 'CRP 00/00000',          // preencha seu registro profissional
  approach: 'Terapia integrativa', // sua abordagem
  whatsappDigits: '11932570067', // só números, com DDD
  phoneDisplay: '(11) 93257-0067',
  instagram: 'amandanstys',
  city: 'São Paulo',
  format: 'Online e presencial',
} as const

export const wa = (msg: string) =>
  `https://wa.me/55${config.whatsappDigits}?text=${encodeURIComponent(msg)}`

export const ig = `https://instagram.com/${config.instagram}`
