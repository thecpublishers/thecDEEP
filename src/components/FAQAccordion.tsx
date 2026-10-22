import { useState } from 'react';
import { Icon } from './Icon';

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: readonly FaqItem[];
  defaultOpen?: string | null;
  idPrefix?: string;
};

export function FAQAccordion({ items, defaultOpen = null, idPrefix = 'faq' }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const buttonId = `${idPrefix}-${item.id}-button`;
        const panelId = `${idPrefix}-${item.id}-panel`;
        const number = String(index + 1).padStart(2, '0');

        return (
          <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.id}>
            <h3 className="faq-item__heading">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="faq-item__number" aria-hidden="true">
                  {number}
                </span>
                <span className="faq-item__question">{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  <Icon name="chevron-down" size={19} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-item__answer"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
