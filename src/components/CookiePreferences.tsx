import { useEffect, useRef, useState } from "react";
import type { PostHog } from "posthog-js";
import "./CookiePreferences.css";

const POSTHOG_KEY = "phc_rcFD8YipcVKQWJgHonxs4C7i6rd6wGmS2LSkcr5rGLPP";
const POSTHOG_HOST = "https://us.i.posthog.com";
const CONSENT_STORAGE_KEY = "lukas-cookie-consent";

type Consent = "accepted" | "rejected";

interface Props {
  analyticsEnabled: boolean;
}

let posthogInstance: PostHog | undefined;

async function enableAnalytics() {
  if (!posthogInstance) {
    const { default: posthog } = await import("posthog-js");

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      advanced_disable_feature_flags_on_first_load: true,
      autocapture: true,
      capture_pageleave: true,
      capture_pageview: false,
      disable_session_recording: true,
      opt_out_capturing_by_default: true,
      opt_out_persistence_by_default: true,
      persistence: "localStorage+cookie",
      person_profiles: "identified_only",
    });
    posthogInstance = posthog;
  }

  posthogInstance.opt_in_capturing({ captureEventName: false });
  posthogInstance.capture("$pageview");
}

function disableAnalytics() {
  if (!posthogInstance) return;

  posthogInstance.reset();
  posthogInstance.opt_out_capturing();
}

export default function CookiePreferences({ analyticsEnabled }: Props) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
      if (savedConsent === "accepted" && analyticsEnabled) {
        void enableAnalytics();
      }
    } else {
      setOpen(true);
    }

    const openPreferences = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-cookie-preferences]")) return;

      event.preventDefault();
      setOpen(true);
    };

    document.addEventListener("click", openPreferences);
    return () => document.removeEventListener("click", openPreferences);
  }, [analyticsEnabled]);

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  const chooseConsent = (choice: Consent) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    setConsent(choice);
    setOpen(false);

    if (!analyticsEnabled) return;
    if (choice === "accepted") {
      void enableAnalytics();
    } else {
      disableAnalytics();
    }
  };

  if (!open) return null;

  return (
    <section
      className="cookie-preferences"
      role="dialog"
      aria-labelledby="cookie-preferences-title"
      aria-describedby="cookie-preferences-description"
    >
      <button
        ref={closeButtonRef}
        className="cookie-preferences__close"
        type="button"
        aria-label="Reject analytics and close"
        onClick={() => chooseConsent("rejected")}
      >
        &times;
      </button>
      <h2 className="cookie-preferences__title" id="cookie-preferences-title">
        Help me gauge your interest
      </h2>
      <p
        className="cookie-preferences__description"
        id="cookie-preferences-description"
      >
        By sharing page views, button clicks, and a rough idea of your location
        ~50+ km radius, I can create a better experience for people interested
        in my work.
      </p>
      {consent && (
        <p className="cookie-preferences__status">
          Current preference: analytics {consent}.
        </p>
      )}
      <div className="cookie-preferences__actions">
        <button
          className="cookie-preferences__button cookie-preferences__button--primary"
          type="button"
          onClick={() => chooseConsent("accepted")}
        >
          Enable event tracking
        </button>
        {consent === "accepted" && (
          <button
            className="cookie-preferences__button"
            type="button"
            onClick={() => chooseConsent("rejected")}
          >
            Disable event tracking
          </button>
        )}
      </div>
    </section>
  );
}
