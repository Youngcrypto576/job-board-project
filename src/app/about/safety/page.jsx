export default function SafetyPage() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Stay Safe on JobHive</h1>
      <p className="mb-4">Your safety is our priority. Protect yourself from fraud:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Never pay for job applications or provide financial info.</li>
        <li>Watch out for phishing emails asking for personal details (<a href="mailto:support@jobhive.com" className="text-blue-600 hover:underline">support@jobhive.com</a> is our official contact).</li>
        <li>Verify employers and ads that seem suspicious – if too good to be true, it probably is.</li>
        <li>Report dodgy job postings or emails to us immediately via <a href="mailto:support@jobhive.com" className="text-blue-600 hover:underline">support@jobhive.com</a>.</li>
      </ul>
      <p className="mt-4">Be cautious of requests for sensitive info like bank details or passwords.</p>
    </div>
  );
}