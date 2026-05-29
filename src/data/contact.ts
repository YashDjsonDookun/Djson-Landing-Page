export interface ContactChannel {
  label: string;
  href: string;
  icon: string;
}

const email = import.meta.env.PUBLIC_EMAIL || 'dookun88@gmail.com';
const whatsapp = import.meta.env.PUBLIC_WHATSAPP || 'https://wa.me/23057522027';
const linkedin = import.meta.env.PUBLIC_LINKEDIN || 'https://www.linkedin.com/in/yashdjsondookun';
const github = 'https://github.com/YashDjsonDookun?tab=repositories';

export const channels: ContactChannel[] = [
  { label: 'Email', href: `mailto:${email}`, icon: 'email' },
  { label: 'WhatsApp', href: whatsapp, icon: 'whatsapp' },
  { label: 'LinkedIn', href: linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: github, icon: 'github' },
];

export const contact = { email, whatsapp, linkedin, github };
