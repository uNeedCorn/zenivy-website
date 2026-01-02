import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Prose } from "@/components/site/Prose";

export const metadata: Metadata = {
  title: "Terms of Service | Zenivy",
  description: "Zenivy Terms of Service and Usage Guidelines.",
};

const LAST_UPDATED = "2026-01-02";

export default function TermsPage() {
  return (
    <main>
      <Container className="py-16">
        <Prose>
          <h1>Terms of Service</h1>

          <p>
            Welcome to Zenivy (developed by Nextora). By using our service, you agree to the following terms.
          </p>

          <h2>Service Description</h2>
          <p>
            Inboxless is an email analysis and inbox cleanup tool that helps you:
          </p>
          <ul>
            <li>Analyze your Gmail inbox to understand email sources and distribution.</li>
            <li>Batch clean unwanted emails to free up storage space.</li>
            <li>Manage subscription emails to reduce inbox noise.</li>
          </ul>

          <h2>Account and Authorization</h2>
          <p>To use this service, you need:</p>
          <ul>
            <li>A valid Google account.</li>
            <li>To authorize this application to access your Gmail (via Google OAuth).</li>
          </ul>
          <p>
            You can revoke authorization at any time in your{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Account Settings
            </a>.
          </p>

          <h2>Your Responsibilities</h2>
          <ul>
            <li>You agree to use this service lawfully and comply with applicable laws in your jurisdiction.</li>
            <li>You understand and consent to authorizing this application to access your Gmail account.</li>
            <li>You are responsible for maintaining the security of your account.</li>
          </ul>

          <h2>Important Warning: Irreversible Actions</h2>
          <p>
            <strong>Deleting emails is an irreversible action.</strong> Once emails are deleted, they cannot be recovered. Please review carefully before performing delete operations. We recommend:
          </p>
          <ul>
            <li>Testing with the &quot;Archive&quot; function first.</li>
            <li>Backing up important emails beforehand.</li>
            <li>Confirming your selection before executing deletion.</li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            This service is provided &quot;as is.&quot; While we strive to ensure stable operation, we do not guarantee:
          </p>
          <ul>
            <li>Uninterrupted or completely error-free service.</li>
            <li>100% accuracy of analysis results.</li>
          </ul>
          <p>
            We are not liable for any direct or indirect damages arising from the use or inability to use this service, including but not limited to data loss or business interruption.
          </p>

          <h2>Service Limitations and Termination</h2>
          <ul>
            <li>We reserve the right to modify, suspend, or terminate the service at any time.</li>
            <li>If you violate these terms, we may restrict or terminate your access.</li>
            <li>You may stop using the service and revoke authorization at any time.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content, design, and code of this service are owned by or licensed to Nextora and are protected by copyright law.
          </p>

          <h2>Terms Updates</h2>
          <p>
            We may update these terms. Significant changes will be announced on our website or via email. Continued use of the service constitutes acceptance of the updated terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of Taiwan (R.O.C.). Any disputes shall be subject to the jurisdiction of the Taipei District Court as the court of first instance.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any questions, please email us at{" "}
            <a href="mailto:hello@zenivy.app">hello@zenivy.app</a>.
          </p>

          <p className="not-prose text-sm text-stone-500">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="not-prose text-sm">
            <Link href="/">← Back to Home</Link>
          </p>
        </Prose>
      </Container>
    </main>
  );
}
