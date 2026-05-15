import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display italic text-2xl tracking-tight text-foreground">
          Palomar
        </Link>
        <div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
          <a href="#solution" className="hover:text-foreground transition-colors">Approach</a>
          <a href="#how" className="hover:text-foreground transition-colors">Method</a>
          <a href="#value" className="hover:text-foreground transition-colors">For Companies</a>
          <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex text-[10px] font-mono uppercase tracking-widest text-foreground/40 gap-2">
            <span className="text-foreground">EN</span>
            <span>·</span>
            <span>IT</span>
            <span>·</span>
            <span>FR</span>
          </span>
          <a
            href="#contact"
            className="px-5 py-2 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-widest rounded-full hover:bg-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <span className="font-display italic text-3xl text-foreground block mb-2">Palomar</span>
          <p className="text-xs text-muted-foreground max-w-xs">
            A bridge between companies, people and Mediterranean research.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <div className="flex gap-6">
            <span>Barcelona</span>
            <span>Marseille</span>
            <span>Palermo</span>
          </div>
          <span>© {new Date().getFullYear()} Palomar Collective</span>
        </div>
      </div>
    </footer>
  );
}
