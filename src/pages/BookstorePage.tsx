import { BookCard } from '../components/BookCard';
import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { books } from '../content/books';
import { site } from '../content/site';
import { usePageMeta } from '../lib/seo';

export function BookstorePage() {
  usePageMeta({
    title: 'Bookstore',
    description:
      'Browse Thec Writers & Publishers titles and enquire directly about availability, editions, and delivery. This is the independent bookstore entry point for our catalogue.',
  });

  return (
    <>
      <PageHero
        eyebrow="Bookstore"
        title={
          <>
            Books from Thec, <em>ordered directly.</em>
          </>
        }
        intro={
          <p>
            Browse our current catalogue and enquire with our team about the title you would like
            to order. This is a direct, human service — not an automated checkout.
          </p>
        }
        note={
          <div className="store-status">
            <span className="store-status__dot" aria-hidden="true" />
            <p>
              <strong>Online checkout is not enabled.</strong> Availability, price, and delivery
              are confirmed by our team before any payment is made.
            </p>
          </div>
        }
        aside={
          <div className="store-hero-card">
            <span className="store-hero-card__icon">
              <Icon name="book" size={28} />
            </span>
            <h2>Order with confidence</h2>
            <p>
              No card details are collected on this website. You speak directly with a member of
              our team before confirming an order.
            </p>
            <ButtonLink to="#how-to-order" variant="secondary" size="small" icon="arrow-right">
              How ordering works
            </ButtonLink>
            <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={17} />
              Ask about a title
            </a>
          </div>
        }
      />

      <section className="section store-process" id="how-to-order" aria-labelledby="order-heading">
        <div className="container">
          <SectionHeading
            eyebrow="How to order"
            title="Four straightforward steps."
            id="order-heading"
            intro="Availability, price, and delivery are discussed directly with our team. This website does not collect payment."
          />
          <ol className="store-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Choose a title</h3>
                <p>Browse the catalogue and open the book you are interested in.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Send an enquiry</h3>
                <p>
                  Email or WhatsApp us with the title, quantity, and your delivery location. For
                  multiple copies, tell us how many you need.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Confirm availability</h3>
                <p>
                  Our team responds with the edition, current price, and available delivery
                  arrangement for your destination.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Complete your order</h3>
                <p>
                  Once the details are agreed, our team coordinates fulfilment with you directly.
                </p>
              </div>
            </li>
          </ol>
          <div className="store-notice">
            <Icon name="message" size={20} />
            <p>
              No approved retail prices are published on this website yet, so none are shown. For a
              current price, contact us about the title you want. We will not invent a number.
            </p>
          </div>
        </div>
      </section>

      <section className="section store-catalogue" aria-labelledby="store-catalogue-heading">
        <div className="container">
          <SectionHeading
            eyebrow="The shelves"
            title="Available to enquire."
            id="store-catalogue-heading"
            intro="The covers shown are designed placeholders until approved artwork is supplied. Catalogue details are marked where they are still being confirmed."
            action={
              <ButtonLink to="/books" variant="secondary" icon="arrow-right">
                Full book catalogue
              </ButtonLink>
            }
          />
          <div className="books-grid books-grid--store">
            {books.map((book, index) => (
              <BookCard book={book} index={index} key={book.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section store-help" aria-labelledby="store-help-heading">
        <div className="container store-help__grid">
          <div>
            <p className="eyebrow">Need help choosing?</p>
            <h2 id="store-help-heading">We can help you find the right book.</h2>
            <p>
              Tell us what you are looking for, who it is for, or what you have read before. If we
              do not have a suitable title, we will say so rather than push a sale.
            </p>
            <div className="store-help__actions">
              <ButtonLink to={`mailto:${site.contact.email}?subject=${encodeURIComponent('Bookstore enquiry')}`} external icon="mail" iconPosition="start">
                Email the bookstore
              </ButtonLink>
              <ButtonLink to={site.contact.whatsapp} external variant="secondary" icon="whatsapp" iconPosition="start">
                WhatsApp our team
              </ButtonLink>
            </div>
          </div>
          <div className="store-help__details">
            <div>
              <h3>Bulk and institutional orders</h3>
              <p>
                For multiple copies, schools, organisations, or gifting, tell us the quantity and
                destination so we can confirm what is possible.
              </p>
            </div>
            <div>
              <h3>Delivery</h3>
              <p>
                Delivery options and costs depend on the destination and order. These are confirmed
                with you directly before payment.
              </p>
            </div>
            <div>
              <h3>Payment</h3>
              <p>
                This website does not collect payment or card details. Payment instructions should
                only be taken from the approved company contact channels after your order details
                have been agreed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="The bookstore"
        title="Looking for a particular title?"
        text="Send us the title you have in mind and we will confirm what is currently available."
        primaryLabel="Make a book enquiry"
        primaryTo={`mailto:${site.contact.email}?subject=${encodeURIComponent('Bookstore enquiry')}`}
        secondaryLabel="Chat on WhatsApp"
        secondaryTo={site.contact.whatsapp}
      />
    </>
  );
}
