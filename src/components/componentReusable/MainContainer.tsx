import { Boxes } from "../ui/Background-boxes"
import { VelocityScroll } from "../ui/TextScrollBase"

function MainContainer(){
    return(
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes/>
            <h1>
                <VelocityScroll
                    text="Welcome Bienvenido أهلاً وسهلاً Willkommen स्वागत है  Selamat Datang Welkom 환영합니다 Maligayang pagdating"
                    default_velocity={2}
                    className="font-display mb-3 text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm md:text-7xl md:leading-[5rem]"
                />
            </h1>
        </div>
    )
}

export default MainContainer