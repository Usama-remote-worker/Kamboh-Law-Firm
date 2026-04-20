import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function RetirementPlannerPage() {
  return (
    <>
      <section className="bg-primary text-secondary py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Retirement Planner</h1>
          <p className="text-xl text-gray-200 mt-2">
            Plan your retirement with expert guidance
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-lightBg p-8 rounded-lg border-2 border-border mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Secure Your Retirement Future</h2>
              <p className="text-gray-700 mb-6">
                Our retirement planning tool helps you estimate how much you&apos;ll need for retirement and plan accordingly. Get personalized recommendations based on your goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-border p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Retirement Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate your retirement needs based on age, income, and lifestyle</p>
                </div>
                <div className="border-2 border-border p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Savings Plan</h3>
                  <p className="text-gray-600 text-sm">Get personalized savings recommendations to reach your retirement goals</p>
                </div>
                <div className="border-2 border-border p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Investment Strategy</h3>
                  <p className="text-gray-600 text-sm">Optimize your investment portfolio for retirement</p>
                </div>
                <div className="border-2 border-border p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Tax Planning</h3>
                  <p className="text-gray-600 text-sm">Maximize tax-advantaged retirement accounts</p>
                </div>
              </div>
              <Button size="lg">Start Planning</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
