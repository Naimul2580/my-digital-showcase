const Footer = () => {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Naimul Islam
        </p>
        <p className="text-muted-foreground text-xs font-body">
          Built with conviction.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
