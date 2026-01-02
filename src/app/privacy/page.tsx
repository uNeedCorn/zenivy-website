import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Prose } from "@/components/site/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy | Zenivy",
  description: "Zenivy Privacy Policy and Data Handling Practices.",
};

const LAST_UPDATED = "2026-01-02";

export default function PrivacyPage() {
  return (
    <main>
      <Container className="py-16">
        <Prose>
          <h1>Privacy Policy</h1>

          <p>
            Zenivy (developed by Nextora) is committed to protecting your privacy. This policy explains how we collect, use, and protect your data.
          </p>

          <h2>Service Description</h2>
          <p>
            Inboxless is an email analysis and inbox cleanup tool that helps you organize and manage your Gmail messages.
          </p>

          <h2>Data We Collect</h2>
          <p>When you use our service, we may collect the following data:</p>
          <ul>
            <li>
              <strong>Google Account Information</strong>: Your email address, name, and profile picture (for identification purposes).
            </li>
            <li>
              <strong>Gmail Message Metadata</strong>: Sender, subject, and date information (for analysis purposes).
            </li>
          </ul>

          <h3>Important Notes</h3>
          <ul>
            <li>We do <strong>NOT</strong> store your email content on our servers.</li>
            <li>All data analysis is performed locally on your device (client-side).</li>
            <li>Local data is cleared when you close the application.</li>
          </ul>

          <h2>OAuth Permissions</h2>
          <p>Our application requests the following Google OAuth permissions:</p>
          <ul>
            <li>
              <strong>gmail.readonly</strong>: To read your emails for inbox analysis.
            </li>
            <li>
              <strong>gmail.modify</strong>: To delete or archive emails (only when you initiate the action).
            </li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>
              <strong>Google OAuth</strong>: For secure authentication.
            </li>
            <li>
              <strong>Supabase</strong>: For user identity management.
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We follow a minimal data retention policy. Email data used for analysis is stored only on your device and is cleared when you close the application. Account-related data will be removed when you delete your account.
          </p>

          <h2>Data Security</h2>
          <p>
            We employ industry-standard security measures to protect your data, including encrypted transmission (HTTPS) and secure authentication mechanisms.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Revoke the application&apos;s access to your Google account at any time.</li>
            <li>Request deletion of your account and related data.</li>
            <li>Inquire about how we handle your data.</li>
          </ul>

          <h2>Policy Updates</h2>
          <p>
            We may update this policy. Significant changes will be announced on our website or via email (if you have provided contact information).
          </p>

          <h2>Contact Us</h2>
          <p>
            For any privacy-related questions, please email us at{" "}
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
