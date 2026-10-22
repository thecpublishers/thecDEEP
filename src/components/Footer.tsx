import { Link } from 'react-router-dom';
import { navigation, site } from '../content/site';
import { services } from '../content/services';
import { Icon, type IconName } from './Icon';
import { Logo } from './Logo';

const socialItems: Array<{ label: string; icon: IconName; url: string | null }> = [
  { label: 'Instagram', icon: 'instagram', url: site.social.instagram },
  { label: 'Facebook', icon: 'facebook', url: site.social.facebook },
  { label: 'LinkedIn', icon: 'linkedin', url: site.social.linkedin },
  { label: 'X', icon: 'x', url: site.social.x },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo variant="light" />
            <p className="footer-brand__slogan">{site.slogans.primary}</p>
            <p>
              An independent Nigerian publishing house helping authors shape, produce, and share
              books that carry African ideas into the world.
            </p>
            <div className="footer-social" aria-label="Social media">
              {socialItems.map((item) =>
                item.url ? (
                  <a
                    key={item.label}
                    href={item.url}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.shortName} on ${item.label}`}
                  >
                    <Icon name={item.icon} size={18} />
                  </a>
                ) : (
                  <span
                    key={item.label}
                    className="social-icon social-icon--pending"
                    aria-label={`${item.label} profile link pending`}
                    title={`${item.label} profile link pending`}
                  >
                    <Icon name={item.icon} size={18} />
                  </span>
                ),
              )}
              <span className="footer-social__note">Social profile links pending</span>
            </div>
          </div>

          <div className="footer-column">
            <h2 className="footer-heading">Explore</h2>
            <ul>
              {navigation.slice(1).map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/bookstore">Bookstore</Link>
              </li>
              <li>
                <Link to="/referral-program">Referral Program</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-column--services">
            <h2 className="footer-heading">Services</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h2 className="footer-heading">Get in touch</h2>
            <address>
              <p>
                <span className="footer-contact__label">Corporate HQ</span>
                {site.contact.corporateHq}
              </p>
              <p>
                <span className="footer-contact__label">Fulfilment office</span>
                {site.contact.fulfilmentOffice}
              </p>
            </address>
            <ul className="footer-contact__links">
              <li>
                <a href={`mailto:${site.contact.email}`}>
                  <Icon name="mail" size={16} />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneHref}`}>
                  <Icon name="phone" size={16} />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <span>
                  <Icon name="clock" size={16} />
                  {site.contact.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="footer-bottom__note">
            Founded {site.founded} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
