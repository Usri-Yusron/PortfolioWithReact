import { ContainerScroll } from "../ui/container-scroll-animation";

export function SertifikatOpening() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
                Let go of all your doubts <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                let's collaborate to create magic
              </span>
            </h1>
          </>
        }
      >
        <img src="github.jpg"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
