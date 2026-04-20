import InvestmentCalculator from '@/components/tools/InvestmentCalculator';
import Container from '@/components/common/Container';

export default function InvestmentCalculatorPage() {
  return (
    <>
      <section className="bg-primary text-secondary py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Investment Calculator</h1>
          <p className="text-xl text-gray-200 mt-2">
            Calculate your investment returns with compound interest
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <InvestmentCalculator />
            <div className="mt-12 bg-lightBg p-8 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Compound Interest Formula</h2>
              <p className="text-gray-700 mb-4">
                Our calculator uses the compound interest formula: A = P(1 + r/100)^t
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>A = Final Amount</li>
                <li>P = Principal (initial investment)</li>
                <li>r = Annual interest rate (%)</li>
                <li>t = Time period (years)</li>
              </ul>
              <p className="text-sm text-gray-600">
                This calculation assumes annual compounding. Results are for reference only.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
