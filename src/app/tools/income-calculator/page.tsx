import IncomeCalculator from '@/components/tools/IncomeCalculator';
import Container from '@/components/common/Container';

export default function IncomeCalculatorPage() {
  return (
    <>
      <section className="bg-primary text-secondary py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Income Tax Calculator</h1>
          <p className="text-xl text-gray-200 mt-2">
            Estimate your tax liability accurately
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <IncomeCalculator />
            <div className="mt-12 bg-lightBg p-8 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">How It Works</h2>
              <p className="text-gray-700 mb-4">
                Our income tax calculator uses progressive tax rates to estimate your tax liability. Enter your gross income and deductible expenses to see your estimated tax amount.
              </p>
              <p className="text-sm text-gray-600">
                Note: This is a general calculation for reference only. Consult with a tax professional for accurate tax planning.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
