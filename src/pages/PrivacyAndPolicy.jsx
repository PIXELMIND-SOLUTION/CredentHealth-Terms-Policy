import React from "react";

const PrivacyAndPolicy = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-11 col-12">
                    <h1 className="mb-4 text-center">Privacy Policy - CredentHealth</h1>

                    <div className="mb-4">
                        <h4 className="mb-2">1. Information We Collect</h4>
                        <p><strong>Personal Data You Provide:</strong></p>
                        <ul>
                            <li>Full Name, Phone Number, Email Address</li>
                            <li>Age, Gender, and Date of Birth</li>
                            <li>Uploaded medical documents, prescriptions, or reports</li>
                            <li>Messages and feedback</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">2. How We Use Your Information</h4>
                        <ul>
                            <li>Provide personalized healthcare insights and recommendations</li>
                            <li>Connect users with doctors or medical professionals</li>
                            <li>Store medical records securely for easy access</li>
                            <li>Improve app functionality and user experience</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">3. How We Protect Your Data</h4>
                        <ul>
                            <li>End-to-end encryption for health data</li>
                            <li>Secure cloud infrastructure</li>
                            <li>Access control for authorized personnel only</li>
                            <li>Regular security audits and vulnerability scans</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">4. Sharing Your Data</h4>
                        <p>We do <strong>not sell</strong> your data. We may share data only with:</p>
                        <ul>
                            <li>Licensed medical professionals (with your consent)</li>
                            <li>Cloud and analytics service providers (for internal improvements)</li>
                            <li>Regulatory or legal authorities (when legally required)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">5. Your Rights and Choices</h4>
                        <ul>
                            <li>Access and review your health and account data</li>
                            <li>Update profile or medical info anytime</li>
                            {/* <li>Request deletion of your account and associated data</li> */}
                        </ul>
                        <p className="mt-2">
                            To exercise these rights, email us at:{" "}
                            <a
                                href="mailto:contact.credenthealth@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                contact.credenthealth@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">6. Data Retention</h4>
                        <p>
                            We retain health and personal data only as long as needed for healthcare delivery,
                            legal compliance, or app functionality. You may request deletion at any time.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">7. Children's Privacy</h4>
                        <p>
                            CredentHealth is intended for users 16 years and older. We do not knowingly collect data from children under 16 without verified parental consent.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">8. Changes to This Privacy Policy</h4>
                        <p>
                            This Privacy Policy may be updated from time to time. Continued use implies acceptance of the revised policy.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">9. Contact Us</h4>
                        <p>
                            For any questions or concerns, reach out to us at:{" "}
                            <a
                                href="mailto:contact.credenthealth@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                contact.credenthealth@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyAndPolicy;
