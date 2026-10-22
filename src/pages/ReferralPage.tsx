import { ButtonLink } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { site } from '../content/site';
import { usePageMeta } from '../lib/seo';

const referralMailto = `mailto:${site.contact.email}?subject=${encodeURIComponent('Referral programme: expression of interest')}`;

export function ReferralPage() {
  usePageMeta({
    title: 'Referral Program',
    description:
      'The Thec Writers & Publishers referral programme is in development. Approved terms and incentives will be published here once confirmed.',
  });

  return (
    <>
      <PageHero
        eyebrow="Referral Program"
        title={
          <>
            Good books travel through <em>good people.</em>
          </>
        }
        intro={
          <p>
            We are preparing a referral programme for people who believe in our work and want to
            connect authors, readers, and institutions with Thec Publishers.
          </p>
        }
        note={
          <div className="programme-status">
            <span className="programme-status__badge">Programme in development</span>
            <p>
              No commission rates, rewards, or eligibility terms are published here because those
              details have not been approved. This page will be updated when they are.
            </p>
          </div>
        }
        aside={
          <div className="referral-aside">
            <span className="referral-aside__index">Programme brief</span>
            <h2>What we can confirm</h2>
            <ul>
              <li>
                <Icon name="check" size={16} />
                A referral programme is being developed.
              </li>
              <li>
                <Icon name="check" size={16} />
                No programme terms are currently live.
              </li>
              <li>
                <Icon name="check" size={16} />
                Expressions of interest are welcome.
              </li>
            </ul>
            <ButtonLink to={referralMailto} external variant="secondary" size="small" icon="mail" iconPosition="start">
              Register your interest
            </ButtonLink>
          </div>
        }
      />

      <section className="section referral-body" aria-labelledby="referral-body-heading">
        <div className="container referral-body__grid">
          <div className="referral-body__main">
            <p className="eyebrow">Why referrals</p>
            <h2 id="referral-body-heading">The right introduction is a service in itself.</h2>
            <p className="lead">
              Publishing relationships often begin with a recommendation from someone who trusts the
              work. We want to build a referral programme that respects that trust.
            </p>
            <p>
              Before launching, we are working through the details: who can participate, how
              referrals are recorded, what happens when an author is already in conversation with
              us, and what — if anything — is offered in return.
            </p>
            <p>
              We will not publish a headline incentive and change the terms later. When the
              programme is ready, the approved terms will appear on this page and in writing before
              anyone participates.
            </p>

            <div className="referral-principles">
              <h3>Principles we are applying</h3>
              <div>
                <article>
                  <span>01</span>
                  <h4>Clarity before commitment</h4>
                  <p>
                    Every referral should understand the terms, the process, and any conditions
                    before making an introduction.
                  </p>
                </article>
                <article>
                  <span>02</span>
                  <h4>Author interest first</h4>
                  <p>
                    A referral should serve the author’s needs. No programme should pressure
                    someone into the wrong publishing relationship.
                  </p>
                </article>
                <article>
                  <span>03</span>
                  <h4>Written confirmation</h4>
                  <p>
                    Approved terms will be documented in writing — not left to a social media post
                    or a verbal promise.
                  </p>
                </article>
              </div>
            </div>
          </div>

          <aside className="referral-body__aside" aria-labelledby="referral-interest-heading">
            <div className="referral-interest-card">
              <p className="eyebrow">Express an interest</p>
              <h2 id="referral-interest-heading">Be first to know when terms are approved.</h2>
              <p>
                Send us a short note about your interest in referring authors or readers. We will
                keep your details only for this conversation and will not present your interest as
                participation in a live programme.
              </p>
              <ButtonLink to={referralMailto} external icon="mail" iconPosition="start">
                Email our team
              </ButtonLink>
              <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={17} />
                Or message us on WhatsApp
              </a>
              <p className="referral-interest-card__email">{site.contact.email}</p>
            </div>
            <div className="referral-rule">
              <h3>No active incentives</h3>
              <p>
                Thec Writers &amp; Publishers is not currently offering or promising referral
                commissions, discounts, credits, or rewards. Any future programme will be published
                with approved terms.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section referral-steps" aria-labelledby="referral-steps-heading">
        <div className="container">
          <SectionHeading
            eyebrow="When it launches"
            title="A programme designed to be understood."
            id="referral-steps-heading"
            intro="These are the stages we expect a referral conversation to follow. They describe process, not current incentives."
          />
          <ol className="referral-steps__list">
            <li>
              <span>01</span>
              <h3>An introduction is made</h3>
              <p>
                A referrer connects an author or reader with our team and shares enough context for a
                useful first conversation.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>The author decides</h3>
              <p>
                The referred person speaks with us directly and chooses whether to proceed. A
                referral is never a commitment.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Eligibility is checked</h3>
              <p>
                If a programme is live, any approved terms and eligibility criteria will be checked
                and confirmed in writing.
              </p>
            </li>
            <li>
              <span>04</span>
              <h3>Outcome is recorded</h3>
              <p>
                Any qualifying outcome and reward process will follow the published terms, with
                clear records for both sides.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <CTASection
        eyebrow="Programme status"
        title="Have a question about referrals?"
        text="We are happy to explain where the programme stands. We will not quote terms that have not been approved."
        primaryLabel="Contact our team"
        primaryTo="/contact"
        secondaryLabel="Explore our services"
        secondaryTo="/services"
      />
    </>
  );
}
