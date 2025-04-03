import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"

export const AnimatedShinyTextDemo = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-white/10 bg-white/5 text-base backdrop-blur-sm transition-all ease-in hover:cursor-pointer hover:bg-white/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
        )}
      >
        <AnimatedShinyText 
          shimmerWidth={200}
          className="inline-flex items-center justify-center px-6 py-2 font-medium"
        >
          <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">✨ Try Shiksha Saarthi</span>
          <ArrowRightIcon className="ml-2 size-4 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  )
} 