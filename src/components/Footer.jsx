export default function Footer() {
  return (
    <footer className="pattern-kawung border-t border-sawo-matang/25 bg-kertas-minyak">
      <div className="mx-auto w-full max-w-280 px-4 py-8 md:px-6 md:py-10">
        <div className="flex items-start gap-3">
          <img
            src="/images/logo/logo.png"
            alt="Logo Aneka Snack Bu Sum"
            width="1254"
            height="1254"
            className="h-10 w-auto shrink-0 rounded-full"
          />
          <div>
            <p className="font-display text-lg font-semibold text-arang">
              Jajanan Bu Sum
            </p>
            <p className="mt-1 max-w-[42ch] text-sm text-sawo-matang">
              Jajanan rumahan untuk berbagai kebutuhan acara.
            </p>
          </div>
        </div>

        <p className="mt-6 border-t border-sawo-matang/25 pt-5 text-sm text-sawo-matang">
          &copy; {new Date().getFullYear()} Jajanan Bu Sum. Semua hak
          dilindungi.
        </p>
      </div>
    </footer>
  );
}
