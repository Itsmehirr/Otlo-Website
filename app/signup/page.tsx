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
          ← [BACK TO HOME]
        </Link>
        <h1 className="anim d2 text-h2-sm font-medium mb-2">[SIGNUP HEADING]</h1>
        <p className="anim d3 text-body-sm text-muted mb-8">[SIGNUP SUBHEADING SENTENCE]</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <div className="anim d3 grid grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="[FIRST NAME PLACEHOLDER]"
              className="rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal focus:shadow-[0_0_0_3px_rgba(29,27,24,.08)] transition"
            />
            <input
              type="text"
              required
              placeholder="[LAST NAME PLACEHOLDER]"
              className="rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal focus:shadow-[0_0_0_3px_rgba(29,27,24,.08)] transition"
            />
          </div>
          <input
            type="email"
            required
            placeholder="[EMAIL PLACEHOLDER]"
            className="anim d4 rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal focus:shadow-[0_0_0_3px_rgba(29,27,24,.08)] transition"
          />
          <select
            required
            defaultValue=""
            className="anim d5 rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal transition"
          >
            <option value="" disabled>[SELECT 1 PLACEHOLDER]</option>
            <option>[SELECT 1 OPTION A]</option>
            <option>[SELECT 1 OPTION B]</option>
          </select>
          <select
            defaultValue=""
            className="anim d6 rounded-xl border border-border bg-stone/50 px-4 py-3.5 text-body-sm outline-none focus:border-charcoal transition"
          >
            <option value="" disabled>[SELECT 2 PLACEHOLDER OPTIONAL]</option>
            <option>[SELECT 2 OPTION A]</option>
            <option>[SELECT 2 OPTION B]</option>
          </select>
          <button
            type="submit"
            className="anim d7 rounded-pill bg-charcoal text-cream px-6 py-3.5 text-nav font-medium mt-2"
          >
            [SUBMIT BUTTON LABEL]
          </button>
        </form>

        <div className="anim d7 flex items-center gap-3 my-6">
          <div className="h-px bg-border flex-1" />
          <span className="text-body-sm text-muted">[DIVIDER LABEL]</span>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="anim d8 flex flex-col gap-3">
          <button className="rounded-pill border border-border px-6 py-3 text-nav">[SOCIAL LOGIN 1]</button>
          <button className="rounded-pill border border-border px-6 py-3 text-nav">[SOCIAL LOGIN 2]</button>
        </div>

        <p className="anim d9 text-body-sm text-muted-light mt-8">[TERMS DISCLAIMER SENTENCE]</p>
        <p className="anim d9 text-body-sm text-muted mt-2">
          [LOGIN PROMPT] <Link href="/signup" className="text-charcoal underline">[LOGIN LINK LABEL]</Link>
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
