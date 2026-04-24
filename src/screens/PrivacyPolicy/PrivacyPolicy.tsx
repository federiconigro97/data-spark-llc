import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Satoshi', Helvetica" }}>
      <header className="w-full border-b border-black/10 px-6 py-4">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img className="w-10 h-auto" alt="Data Spark Logo" src="/group.png" />
            <span className="font-semibold text-[#191818] text-lg">Data Spark LLC</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-[#191818] transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#191818] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-2">Last Updated On 24-Apr-2026</p>
        <p className="text-sm text-gray-400 mb-10">Effective Date 24-Apr-2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>
            This Privacy Policy describes the policies of Data Spark LLC, 5830 E 2ND ST, STE 7000
            CASPER, WY 82609, Wyoming 82609, United States of America, email:{" "}
            <a
              href="mailto:federico@datasparkgrowth.com"
              className="text-[#3d3b8e] hover:underline"
            >
              federico@datasparkgrowth.com
            </a>
            , phone: +1 307 6838436, on the collection, use and disclosure of your information
            that we collect when you use our website (
            <a
              href="https://www.datasparkgrowth.com"
              className="text-[#3d3b8e] hover:underline"
            >
              https://www.datasparkgrowth.com
            </a>
            ) (the "Service"). By accessing or using the Service, you are consenting to the
            collection, use and disclosure of your information in accordance with this Privacy
            Policy. If you do not consent to the same, please do not access or use the Service.
          </p>

          <p>
            We may modify this Privacy Policy at any time without any prior notice to you and will
            post the revised Privacy Policy on the Service. The revised Policy will be effective
            180 days from when the revised Policy is posted in the Service and your continued
            access or use of the Service after such time will constitute your acceptance of the
            revised Privacy Policy. We therefore recommend that you periodically review this page.
          </p>

          <ol className="list-decimal list-outside space-y-10 pl-5">
            <li>
              <h2 className="text-xl font-semibold text-[#191818] mb-3">
                How We Share Your Information
              </h2>
              <p className="mb-3">
                We will not transfer your personal information to any third party without seeking
                your consent, except in limited circumstances as described below:
              </p>
              <ol className="list-disc list-outside pl-5 space-y-1 mb-3">
                <li>Ad service</li>
                <li>Analytics</li>
              </ol>
              <p className="mb-3">
                We require such third parties to use the personal information we transfer to them
                only for the purpose for which it was transferred and not to retain it for longer
                than is required for fulfilling the said purpose.
              </p>
              <p>
                We may also disclose your personal information for the following: (1) to comply
                with applicable law, regulation, court order or other legal process; (2) to enforce
                your agreements with us, including this Privacy Policy; or (3) to respond to claims
                that your use of the Service violates any third-party rights. If the Service or our
                company is merged or acquired with another company, your information will be one of
                the assets that is transferred to the new owner.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold text-[#191818] mb-3">Your Rights</h2>
              <p className="mb-3">
                Depending on the law that applies, you may have a right to access and rectify or
                erase your personal data or receive a copy of your personal data, restrict or
                object to the active processing of your data, ask us to share (port) your personal
                information to another entity, withdraw any consent you provided to us to process
                your data, a right to lodge a complaint with a statutory authority and such other
                rights as may be relevant under applicable laws. To exercise these rights, you can
                write to us at{" "}
                <a
                  href="mailto:federico@datasparkgrowth.com"
                  className="text-[#3d3b8e] hover:underline"
                >
                  federico@datasparkgrowth.com
                </a>
                . We will respond to your request in accordance with applicable law.
              </p>
              <p>
                Do note that if you do not allow us to collect or process the required personal
                information or withdraw the consent to process the same for the required purposes,
                you may not be able to access or use the services for which your information was
                sought.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold text-[#191818] mb-3">Cookies Etc.</h2>
              <p>
                To learn more about how we use these and your choices in relation to these tracking
                technologies, please refer to our{" "}
                <a
                  href="https://www.datasparkgrowth.com"
                  className="text-[#3d3b8e] hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold text-[#191818] mb-3">Security</h2>
              <p>
                The security of your information is important to us and we will use reasonable
                security measures to prevent the loss, misuse or unauthorized alteration of your
                information under our control. However, given the inherent risks, we cannot
                guarantee absolute security and consequently, we cannot ensure or warrant the
                security of any information you transmit to us and you do so at your own risk.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold text-[#191818] mb-3">
                Third Party Links & Use Of Your Information
              </h2>
              <p>
                Our Service may contain links to other websites that are not operated by us. This
                Privacy Policy does not address the privacy policy and other practices of any third
                parties, including any third party operating any website or service that may be
                accessible via a link on the Service. We strongly advise you to review the privacy
                policy of every site you visit. We have no control over and assume no
                responsibility for the content, privacy policies or practices of any third party
                sites or services.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold text-[#191818] mb-3">
                Grievance / Data Protection Officer
              </h2>
              <p>
                If you have any queries or concerns about the processing of your information that
                is available with us, you may email our Grievance Officer at Data Spark LLC, 5830
                E 2ND ST, STE 7000 CASPER, WY 82609, email:{" "}
                <a
                  href="mailto:federico@datasparkgrowth.com"
                  className="text-[#3d3b8e] hover:underline"
                >
                  federico@datasparkgrowth.com
                </a>
                . We will address your concerns in accordance with applicable law.
              </p>
            </li>
          </ol>

          <p className="text-sm text-gray-400 pt-6 border-t border-black/10">
            Privacy Policy generated with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW"
              className="text-[#3d3b8e] hover:underline"
            >
              CookieYes
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
};
