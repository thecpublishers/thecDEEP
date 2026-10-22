import { Link } from 'react-router-dom';
import type { Service } from '../content/services';
import { Icon } from './Icon';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__number">{service.number}</span>
        <span className="service-card__icon">
          <Icon name={service.icon} size={25} />
        </span>
      </div>
      <h3>
        <Link to={`/services/${service.slug}`}>{service.title}</Link>
      </h3>
      <p>{service.shortDescription}</p>
      <Link to={`/services/${service.slug}`} className="text-link" aria-label={`Learn more about ${service.title}`}>
        Learn more
        <Icon name="arrow-right" size={16} />
      </Link>
    </article>
  );
}
