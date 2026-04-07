export default function Agenda() {
  const agendaItems = [
    {
      title: 'Jobs & Enterprise',
      description: 'Creating an enabling environment for businesses, startups, and entrepreneurs.',
      details: [
        'Establish business support centers in all LGAs',
        'Provide microfinance and startup grants',
        'Reduce bureaucratic barriers to business registration',
        'Partner with private sector for job creation',
        'Support local manufacturing and processing',
      ],
      icon: '💼',
      color: 'blue',
    },
    {
      title: 'Education & Skills',
      description: 'Improving access to quality education and practical skills.',
      details: [
        'Upgrade school infrastructure and learning materials',
        'Improve teacher compensation and training',
        'Introduce STEM education programs',
        'Establish vocational training centers',
        'Provide scholarships for disadvantaged students',
      ],
      icon: '📚',
      color: 'amber',
    },
    {
      title: 'Infrastructure & Urban Order',
      description: 'Developing organized, functional public systems.',
      details: [
        'Rehabilitate road networks across the state',
        'Improve water supply and sanitation',
        'Upgrade power infrastructure',
        'Establish modern transportation systems',
        'Plan sustainable urban development',
      ],
      icon: '🏗️',
      color: 'emerald',
    },
    {
      title: 'Security & Community Trust',
      description: 'Advocating effective and collaborative security structures.',
      details: [
        'Strengthen police-community relations',
        'Invest in modern security equipment',
        'Support community policing initiatives',
        'Ensure swift justice system response',
        'Build trust through transparent governance',
      ],
      icon: '🛡️',
      color: 'red',
    },
    {
      title: 'Youth & Innovation',
      description: 'Supporting creativity, technology, and innovation.',
      details: [
        'Establish innovation hubs and tech centers',
        'Provide mentorship programs for youth',
        'Support digital skills training',
        'Create platforms for creative industries',
        'Encourage youth participation in governance',
      ],
      icon: '🚀',
      color: 'purple',
    },
    {
      title: 'Inclusive Governance',
      description: 'Ensuring every voice and community matters.',
      details: [
        'Strengthen community engagement processes',
        'Ensure gender representation in leadership',
        'Protect minority rights and interests',
        'Increase government transparency',
        'Foster inter-community dialogue',
      ],
      icon: '🤲',
      color: 'indigo',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-blue-900">
            Kwara Ti Wa Ni in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive roadmap for inclusive development, prosperity, and sustainable governance.
          </p>
        </div>

        {/* Agenda Items */}
        <div className="grid md:grid-cols-2 gap-8">
          {agendaItems.map((item, index) => (
            <AgendaCard key={index} item={item} />
          ))}
        </div>

        {/* Implementation Strategy */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg mt-12">
          <h2 className="text-3xl font-bold mb-6">How We'll Make It Happen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-800 bg-opacity-50 rounded">
              <h3 className="text-xl font-bold mb-3">Phase 1: Assessment</h3>
              <p>Comprehensive evaluation of current conditions and resources</p>
            </div>
            <div className="p-6 bg-blue-800 bg-opacity-50 rounded">
              <h3 className="text-xl font-bold mb-3">Phase 2: Implementation</h3>
              <p>Strategic execution of programs with community participation</p>
            </div>
            <div className="p-6 bg-blue-800 bg-opacity-50 rounded">
              <h3 className="text-xl font-bold mb-3">Phase 3: Monitoring</h3>
              <p>Regular evaluation and adjustment for continuous improvement</p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">Measuring Success</h2>
          <div className="bg-white p-8 rounded-lg shadow">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-4"></span>
                <span>Reduced unemployment rate</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></span>
                <span>Improved school enrollment and performance</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-4"></span>
                <span>Enhanced security and reduced crime</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                <span>Increased entrepreneurship and business growth</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                <span>Improved infrastructure and service delivery</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-indigo-500 rounded-full mr-4"></span>
                <span>Greater citizen satisfaction and participation</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

function AgendaCard({ item }: { item: any }) {
  let colorClasses = '';
  let bgColor = '';

  if (item.color === 'blue') {
    colorClasses = 'text-blue-900 border-blue-500';
    bgColor = 'bg-blue-50';
  } else if (item.color === 'amber') {
    colorClasses = 'text-amber-900 border-amber-500';
    bgColor = 'bg-amber-50';
  } else if (item.color === 'emerald') {
    colorClasses = 'text-emerald-900 border-emerald-500';
    bgColor = 'bg-emerald-50';
  } else if (item.color === 'red') {
    colorClasses = 'text-red-900 border-red-500';
    bgColor = 'bg-red-50';
  } else if (item.color === 'purple') {
    colorClasses = 'text-purple-900 border-purple-500';
    bgColor = 'bg-purple-50';
  } else if (item.color === 'indigo') {
    colorClasses = 'text-indigo-900 border-indigo-500';
    bgColor = 'bg-indigo-50';
  }

  return (
    <div className={`border-l-4 ${colorClasses} ${bgColor} p-6 rounded-lg shadow-lg hover:shadow-xl transition`}>
      <div className="text-4xl mb-4">{item.icon}</div>
      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
      <p className="text-base mb-6 text-gray-700">{item.description}</p>

      <div>
        <h4 className="font-bold mb-3 text-sm text-gray-900">Key Initiatives:</h4>
        <ul className="space-y-2">
          {item.details.map((detail: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 font-bold">▪</span>
              <span className="text-sm text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
