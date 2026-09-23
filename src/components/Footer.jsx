export default function Footer() {
  return (
    <footer className="border-t border-sawo-matang/25 bg-kertas-minyak">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-1 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-display text-lg font-semibold text-arang">
          Aneka Snack Bu Sum
        </p>
        <p className="text-sm text-sawo-matang">
          &copy; {new Date().getFullYear()} Aneka Snack Bu Sum
        </p>
      </div>
    </footer>
  );
}
