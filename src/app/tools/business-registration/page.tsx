import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function BusinessRegistrationPage() {
  return (
    <>
      <section className="bg-primary text-secondary py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Business Registration</h1>
          <p className="text-xl text-gray-200 mt-2">
            Step-by-step business registration guidance
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-lightBg p-8 rounded-lg border-2 border-border mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Register Your Business Today</h2>
              <p className="text-gray-700 mb-6">
                Our business registration service guides you through every step of the process. We help you choose the right business structure and handle all filing requirements.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">1</span>
                  <div>
                    <h3 className="font-bold text-primary">Choose Business Structure</h3>
                    <p className="text-gray-600">Sole Proprietorship, LLC, Corporation, or Partnership</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">2</span>
                  <div>
                    <h3 className="font-bold text-primary">Prepare Documents</h3>
                    <p className="text-gray-600">We provide templates and guidance for all required documents</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">3</span>
                  <div>
                    <h3 className="font-bold text-primary">File & Register</h3>
                    <p className="text-gray-600">Complete filing with government authorities</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">4</span>
                  <div>
                    <h3 className="font-bold text-primary">Get Compliant</h3>
                    <p className="text-gray-600">Initial compliance setup and ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
            <Button size="lg">Start Registration</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
