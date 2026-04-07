import IdeaForm from '@/components/IdeaForm';

export default function ShareIdeas() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-blue-900">
            Your Voice Matters
          </h1>
          <p className="text-xl text-gray-600">
            What should the next Governor of Kwara focus on in your area? Share your questions, 
            suggestions, and ideas.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-900 mb-3">📝 Share Freely</h3>
            <p className="text-gray-700">
              Your thoughts, concerns, and ideas are important to us. Be honest and detailed.
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-amber-900 mb-3">🔒 Protected Privacy</h3>
            <p className="text-gray-700">
              Share anonymously or with your name. Your choice. All data is kept confidential.
            </p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border-t-4 border-emerald-500">
            <h3 className="text-xl font-bold text-emerald-900 mb-3">👂 We're Listening</h3>
            <p className="text-gray-700">
              Every submission is reviewed. Your input shapes our strategy and priorities.
            </p>
          </div>
        </div>

        {/* Idea Form */}
        <section className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Submit Your Idea
          </h2>
          <IdeaForm />
        </section>

        {/* What We're Looking For */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">
            What We're Looking For
          </h2>

          <div className="bg-blue-50 p-8 rounded-lg space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">🏢 Infrastructure & Development</h3>
              <p className="text-gray-700 mb-3">
                Roads, water, electricity, healthcare facilities, schools, and public services. 
                What's missing in your area?
              </p>
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> "We need to rehabilitate the roads in Ilorin East LGA. 
                It affects commerce and safety."
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">💼 Jobs & Business</h3>
              <p className="text-gray-700 mb-3">
                Employment opportunities, vocational training, startup support, and business-friendly policies.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> "We need vocational centers near Offa to train youth in skilled trades."
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">📚 Education & Skills</h3>
              <p className="text-gray-700 mb-3">
                School quality, teacher training, curriculum, scholarships, and skill development programs.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> "Schools in rural areas need better learning materials and trained teachers."
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">🛡️ Security & Safety</h3>
              <p className="text-gray-700 mb-3">
                Community safety, police presence, crime prevention, and emergency services.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> "Lighting and police patrols in residential areas would reduce crime significantly."
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">🚀 Innovation & Technology</h3>
              <p className="text-gray-700 mb-3">
                Digital services, tech hubs, internet connectivity, and youth empowerment programs.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> "Setting up digital innovation centers could create job opportunities for tech-savvy youth."
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">🤝 Community & Governance</h3>
              <p className="text-gray-700 mb-3">
                Transparency, citizen participation, minority rights, cultural preservation, and social cohesion.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> "We need more transparent processes for budget allocation at the LGA level."
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="Can I submit an idea anonymously?"
              answer="Yes! You can leave your name blank and submit your idea anonymously. We value your input regardless."
            />
            <FAQItem
              question="Will you respond to my submission?"
              answer="While we review every submission carefully, we may not respond individually. However, your ideas will directly influence our strategy and priorities."
            />
            <FAQItem
              question="What happens after I submit?"
              answer="Your submission is reviewed by our team, categorized by topic and LGA, and used to refine our agenda and action plans."
            />
            <FAQItem
              question="Can I submit multiple ideas?"
              answer="Absolutely! Feel free to submit as many ideas, questions, or suggestions as you have. Each one matters."
            />
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-emerald-900 text-white p-8 rounded-lg text-center space-y-4">
          <h3 className="text-2xl font-bold">
            Together, We Build a Better Kwara
          </h3>
          <p className="text-lg">
            Your ideas are the foundation of our movement. Submit your thoughts today.
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-500">
      <h4 className="text-lg font-bold text-blue-900 mb-2">{question}</h4>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}
