import { processSteps } from '../content/site';

export function ProcessSteps() {
  return (
    <ol className="process-steps">
      {processSteps.map((step) => (
        <li key={step.number} className="process-step">
          <span className="process-step__number">{step.number}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
