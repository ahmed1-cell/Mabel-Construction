import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import useResponsive from "@/hooks/use-responsive";
import { Mail, Briefcase, Heart } from "lucide-react";

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const { isMobile } = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // replace with real API call later
    console.log("careers-signup", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      <header className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Careers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're always interested in great people. Currently there are no open opportunities, but join our talent list and we'll notify you when roles become available.
          </p>
        </div>
      </header>

      <main className={`max-w-5xl mx-auto px-4 py-16 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why work with Mabel Construction?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-1" />
                <span>Meaningful projects — residential and commercial work that shapes communities.</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1" />
                <span>A culture of safety, craftsmanship and continuous learning.</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <span>Competitive compensation and benefits — shared as roles open.</span>
              </li>
            </ul>

            <div className="mt-8 text-sm text-muted-foreground">
              <p>
                Follow us on LinkedIn for the latest openings and company updates, or contact us directly at <a href="mailto:careers@mabelconstruction.com" className="text-primary hover:underline">careers@mabelconstruction.com</a>.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-card border border-card-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Join our Talent List</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <p className="font-semibold text-primary mb-2">Thank you — we've received your interest.</p>
                  <p className="text-muted-foreground">We'll contact you if a matching opportunity opens up.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Full name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border px-3 py-2 bg-background/50"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border px-3 py-2 bg-background/50"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Role of interest (optional)</label>
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 bg-background/50"
                      placeholder="e.g., Site Supervisor, Carpenter, Project Manager"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button type="submit" className="btn btn-primary flex-1">
                      Join Talent List
                    </button>
                    <a href="/contact" className="btn btn-outline px-4 py-2">Contact</a>
                  </div>

                  <p className="text-xs text-muted-foreground mt-2">
                    By joining the list you agree to receive occasional recruiting emails. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}