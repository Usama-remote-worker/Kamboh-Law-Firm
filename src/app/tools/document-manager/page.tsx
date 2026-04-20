import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function DocumentManagerPage() {
  return (
    <>
      <section className="bg-primary text-secondary py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Document Manager</h1>
          <p className="text-xl text-gray-200 mt-2">
            Organize and manage your tax documents
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-lightBg p-8 rounded-lg border-2 border-border mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Secure Document Storage & Organization</h2>
              <p className="text-gray-700 mb-6">
                Keep all your tax and business documents organized in one secure place. Easy upload, categorization, and retrieval of documents.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">🔒</span>
                  <div>
                    <h3 className="font-bold text-primary">Secure Storage</h3>
                    <p className="text-gray-600">Bank-level encryption protects your sensitive documents</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">📂</span>
                  <div>
                    <h3 className="font-bold text-primary">Easy Organization</h3>
                    <p className="text-gray-600">Automatic categorization and smart filing system</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">🔍</span>
                  <div>
                    <h3 className="font-bold text-primary">Quick Search</h3>
                    <p className="text-gray-600">Find documents instantly with advanced search</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl text-accent">👥</span>
                  <div>
                    <h3 className="font-bold text-primary">Easy Sharing</h3>
                    <p className="text-gray-600">Share documents with accountants and advisors securely</p>
                  </div>
                </div>
              </div>
              <Button size="lg">Upload Documents</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
