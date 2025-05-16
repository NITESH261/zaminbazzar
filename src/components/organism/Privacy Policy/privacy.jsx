import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="w-full px-4 py-6 md:py-10 lg:py-16 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="text-sm md:text-base mb-4">
                At ZaminWale, we are committed to safeguarding your privacy. This
                Privacy Policy outlines how we collect, use, and protect your personal
                information when you use our website and services.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="text-sm md:text-base mb-4">
                We may collect personal information such as your name, email address,
                phone number, and location when you register on our site, fill out a
                form, or interact with our services.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p className="text-sm md:text-base mb-4">
                The data we collect is used to:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base mb-4 space-y-1">
                <li>Provide personalized property recommendations</li>
                <li>Improve our website and user experience</li>
                <li>Send relevant updates, newsletters, or offers</li>
                <li>Respond to inquiries and customer support requests</li>
            </ul>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
            <p className="text-sm md:text-base mb-4">
                We do not sell, trade, or rent your personal information to others. We
                may share data with trusted partners who assist us in operating the
                website and conducting business, under confidentiality agreements.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
            <p className="text-sm md:text-base mb-4">
                Our website may use cookies to enhance user experience and analyze
                site traffic. You can choose to disable cookies through your browser
                settings.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
            <p className="text-sm md:text-base mb-4">
                We implement appropriate security measures to protect your data from
                unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">6. Your Consent</h2>
            <p className="text-sm md:text-base mb-4">
                By using our website, you consent to our privacy policy and agree to
                its terms.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
            <p className="text-sm md:text-base mb-4">
                ZaminWale reserves the right to update this privacy policy at any time.
                We encourage users to frequently check this page for any changes.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
            <p className="text-sm md:text-base">
                If you have any questions regarding this privacy policy, feel free to
                contact us at <a href="mailto:support@zaminwale.com" className="text-blue-600 hover:underline">support@zaminwale.com</a>.
            </p>
        </section>
    );
};

export default PrivacyPolicy;
