import Link from 'next/link';
import { SiGithub, SiLinkedin, SiYoutube, SiInstagram } from 'react-icons/si';

interface SocialLinks {
  title: string;
  icon: any;
  href: string;
}

const socialLinks: SocialLinks[] = [
  {
    title: 'LinkedIn/MikeGulline',
    icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/mikegulline/',
  },
  {
    title: 'GitHub/MikeGulline',
    icon: SiGithub,
    href: 'https://github.com/mikegulline/',
  },
  // {
  //   title: 'Instagram',
  //   icon: SiInstagram,
  //   href: 'https://www.instagram.com/',
  // },
  // {
  //   title: 'YouTube',
  //   icon: SiYoutube,
  //   href: 'https://www.youtube.com/',
  // },
];

export default function SocialIconsMenu() {
  const links = socialLinks?.map(({ title, icon: Icon, href }) => (
    <li key={title}>
      <Link
        href={href}
        title={title}
        target='_blank'
        className='rounded-full border border-neutral-700 hover:bg-neutral-200 hover:text-black flex justify-center items-center w-12 h-12'
      >
        <Icon />
      </Link>
    </li>
  ));

  return <ul className='flex gap-4 items-center mb-8'>{links}</ul>;
}
