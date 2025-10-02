"use client";

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. What is JobHive?</h2>
          <p>
            Jobhive.com is West Africa’s leading jobs platform. We help employers
            fill vacancies quickly and cost-effectively by providing access to a
            large pool of qualified job seekers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Can I advertise with JobHive?
          </h2>
          <p>
            Yes. As an employer, you can advertise your job vacancies directly on{" "}
            <strong>Jobhive.com</strong> by clicking on <strong>“Post a Job”</strong> and
            selecting a package. For brand advertising, send an email to{" "}
            <a
              href="mailto:support@jobhive.com"
              className="text-indigo-600 underline"
            >
              support@jobhive.com
            </a>{" "}
            for a free consultation on our advertising rates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. How do I apply for a job?</h2>
          <p>
            Click on the job title and follow the application instructions in the
            listing. If you have questions about your application, please contact
            the employer directly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Do I need a resume to apply?
          </h2>
          <p>
            Yes. Your resume highlights your qualifications, skills, and experience,
            which helps employers make hiring decisions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Will JobHive take part of my salary if I get a job?
          </h2>
          <p>
            No. JobHive never collects a cut of your salary. All your earnings belong
            to you.
          </p>
        </div>
      </div>
    </div>
  );
}
