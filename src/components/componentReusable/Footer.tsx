import { BackgroundBeams } from "../ui/background-beams";
import { CloseButton } from "./CloseButton";

export function Footer() {
  return (
    <div className="h-screen  w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          The end...
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Terimakasih untuk kamu yang sudah menjelajahi website saya sampai akhir, saya harap perjalanan kamu dengan saya tidak akan berakhir sampai
          sini saja, mari kita berkenalan lebih jauh untuk menciptakan keajaiban lainnya dengan mengklik tombol yang ada di bawah ini 👇.
        </p>
      </div>
        {/* ini tombol */}
        <div className="relative z-20 mt-3">
            <CloseButton/>
        </div>
      <BackgroundBeams />
    </div>
  );
}
