"use client";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { SIGNUP_TESTIMONIAL_IMAGE } from "@/lib/stock-media";

/** /signup — structure verified read-only via Playwright (2 name fields side
 * by side, email, 2 selects, submit, social row, terms line, login link) and
 * never submitted. This form has no live backend in the clone — submit is
 * a no-op. */
export default function SignupPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 sm:px-14 py-16 max-w-[520px] mx-auto w-full">
        <Link href="/" className="anim d1 text-body-sm text-muted mb-10 inline-flex items-center gap-2">
          ← Back to home
        </Link>
        <h1 className="anim d2 text-h2-sm font-medium mb-2">Let&rsquo;s get your room set up.</h1>
        <p className="anim d3 text-body-sm text-muted mb-8">
          Early access rolls out city by city. Tell us who you are and we&rsquo;ll let you know when it&rsquo;s your turn.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <div className="anim d3 grid grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="First name"
              className="rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal focus:shadow-[0_0_0_3px_rgba(29,27,24,.08)] transition"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal focus:shadow-[0_0_0_3px_rgba(29,27,24,.08)] transition"
            />
          </div>
          <input
            type="email"
            required
            placeholder="Email"
            className="anim d4 rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal focus:shadow-[0_0_0_3px_rgba(29,27,24,.08)] transition"
          />
          <select
            required
            defaultValue=""
            className="anim d5 rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal transition"
          >
            <option value="" disabled>I&rsquo;m a...</option>
            <option>Club Owner</option>
            <option>Network Builder</option>
            <option>Creator Collective</option>
            <option>Brand Community Manager</option>
            <option>Social Curator</option>
            <option>Org / Association</option>
          </select>
          <select
            defaultValue=""
            className="anim d6 rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal transition"
          >
            <option value="" disabled>Which city? (optional)</option>
            <option>Mumbai</option>
            <option>Bengaluru</option>
            <option>Delhi NCR</option>
            <option>Other</option>
          </select>
          <button
            type="submit"
            className="anim d7 rounded-pill bg-charcoal text-cream px-6 py-3.5 text-nav font-medium mt-2"
          >
            Get early access
          </button>
        </form>

        <div className="anim d7 flex items-center gap-3 my-6">
          <div className="h-px bg-border flex-1" />
          <span className="text-body-sm text-muted">or</span>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="anim d8 flex flex-col gap-3">
          <button className="rounded-pill border border-border px-6 py-3 text-nav">Continue with Google</button>
          <button className="rounded-pill border border-border px-6 py-3 text-nav">Continue with Apple</button>
        </div>

        <p className="anim d9 text-body-sm text-muted-light mt-8">
          By requesting access, you agree to Otlo&rsquo;s Terms and Privacy Policy.
        </p>
        <p className="anim d9 text-body-sm text-muted mt-2">
          Already on the list? <Link href="/signup" className="text-charcoal underline">Sign in</Link>
        </p>
      </div>

      <div className="hidden lg:block relative lg:sticky lg:top-0 lg:h-screen">
        <Placeholder
          label="[IMAGE SIGNUP TESTIMONIAL]"
          seed={SIGNUP_TESTIMONIAL_IMAGE}
          className="w-full h-full rounded-none"
        />
      </div>
    </main>
  );
}
