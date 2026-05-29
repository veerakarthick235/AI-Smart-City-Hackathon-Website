import Link from 'next/link';
import { Link as LinkIcon, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const PLATFORM_LINKS = [
  { label: 'How It Works', href: '/about' },
  { label: 'Register', href: '/events' },
  { label: 'Verify Certificate', href: '/verify' },
  { label: 'Leaderboard', href: '/hall-of-fame' },
];

const EVENT_LINKS = [
  { label: 'Upcoming Events', href: '/events' },
  { label: 'Past Events', href: '/events' },
  { label: 'Smart City Challenge', href: '/events' },
  { label: 'AI Innovation Sprint', href: '/events' },
];

const RESOURCE_LINKS = [
  { label: 'Documentation', href: '/about' },
  { label: 'API Reference', href: '/about' },
  { label: 'Guidelines', href: '/about' },
  { label: 'FAQ', href: '/about' },
];

const SOCIAL_LINKS = [
  { icon: LinkIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: LinkIcon, href: 'https://instagram.com', label: 'Instagram' },
  { icon: LinkIcon, href: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>


        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Innovation Hacks. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/about" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/about" className={styles.bottomLink}>
              Terms of Service
            </Link>
            <a
              href="mailto:hello@innovationhacks.de"
              className={styles.bottomLink}
            >
              innovationhacksofficial@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
