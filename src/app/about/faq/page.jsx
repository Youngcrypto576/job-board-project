"use client";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is JobHive?",
      answer:
        "Jobhive.com is West Africa’s leading jobs platform. We help employers fill vacancies quickly and cost-effectively by providing access to a large pool of qualified job seekers.",
    },
    {
      question: "Can I advertise with JobHive?",
      answer: (
        <>
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
        </>
      ),
    },
    {
      question: "How do I apply for a job?",
      answer:
        "Click on the job title and follow the application instructions in the listing. If you have questions about your application, please contact the employer directly.",
    },
    {
      question: "Do I need a resume to apply?",
      answer:
        "Yes. Your resume highlights your qualifications, skills, and experience, which helps employers make hiring decisions.",
    },
    {
      question: "Will JobHive take part of my salary if I get a job?",
      answer:
        "No. JobHive never collects a cut of your salary. All your earnings belong to you.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg hover:shadow-md transition duration-300 bg-white"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              {index + 1}. {faq.question}
            </h2>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
