export function Logo({ className = "h-12 w-auto rounded-xl" }: { className?: string }) {
  return (
    <img
      src="/logo.jpeg"
      alt="DYUTI logo"
      className={className}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}
